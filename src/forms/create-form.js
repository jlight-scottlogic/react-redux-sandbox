export default (obj) => (options = {}) => Object.keys(obj).reduce((form, key) => {

    const optionsForKey = options[key] || {};

    return obj == null ? {} : {
        ...form,
        controls: {
            ...form.controls,
            [key]: {
                id: key,
                displayName: optionsForKey.displayName || convertToDisplayName(key),
                value: obj[key],
                rules: optionsForKey.rules || [],
                errors: [],
                isValid: false,
                isTouched: false,
                isSubmitted: false
            }
        }
    }
}, {
    isSubmitted: false,
    isValid: false
});

const convertToDisplayName = (str) => str
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/^./, function (str) { return str.toUpperCase(); })
    .trim();