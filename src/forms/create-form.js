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
                isTouched: false
            }
        }
    }
}, {
    isSubmitted: false,
    isValid: false
});

const convertToDisplayName = (str) => camelPad(str);

const camelPad = (str) => str
    // Look for long acronyms and filter out the last letter
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    // Look for lower-case letters followed by upper-case letters
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // Look for lower-case letters followed by numbers
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/^./, function (str) { return str.toUpperCase(); })
    // Remove any white space left around the word
    .trim();