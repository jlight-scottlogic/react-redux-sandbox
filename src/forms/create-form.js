export default (obj, rules, display) => Object.keys(obj).reduce((form, key) => {
    return obj == null ? {} : {
        ...form,
        [key]: {
            id: key,
            displayName: display != null ? display[key] || convertToDisplayName(key) : convertToDisplayName(key),
            value: obj[key],
            rules: rules != null ? rules[key] || [] : [],
            errors: [],
            valid: false,
            touched: false
        }
    }
}, {});

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