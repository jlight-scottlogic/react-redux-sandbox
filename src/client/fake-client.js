import { delay } from "q";

export const post = async (url, item) => {
    await delay(500);
    const split = url.split('/');
    const set = getSetFromStorage(split[0]);

    item.id = set.length + 1;

    localStorage.setItem(split[0], JSON.stringify(set.concat(item)));

    return item.id;
};

export const put = async (url, item) => {
    await delay(500);

    const split = url.split('/');
    const set = getSetFromStorage(split[0]);

    const itemIndexToEdit = set.findIndex(x => x.id.toString() === split[1]);

    if (itemIndexToEdit < 0) {
        return;
    }

    const newSet = [
        ...set.slice(0, itemIndexToEdit),
        item,
        ...set.slice(itemIndexToEdit + 1)
    ]

    localStorage.setItem(split[0], JSON.stringify(newSet));
}

export const get = async (url, data) => {
    await delay(500);

    const split = url.split('/');

    if (split.length === 1) {
        const set = getSetFromStorage(split[0]);

        if (data != null) {
            switch (split[0]) {
                case 'products':
                    return set.filter(x => data.includes(x.id));

                default:
                    return set;
            }
        }

        return set;
    }

    if (split.length === 2) {
        return getSetFromStorage(split[0]).find(x => x.id.toString() === split[1]) || null;
    }

    if (split.length === 3) {
        return getSetFromStorage(split[2]).filter(x => x.categoryId.toString() === split[1]);
    }

    return {};
}

const getSetFromStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];