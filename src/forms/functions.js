export const createFormObject = (obj = {}) => (options = {}) => Object.keys(obj).reduce((form, key) => {

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
    
export const getValueFromForm = (form) => form.controls == null ? {} : Object.keys(form.controls).reduce((values, key) => ({
    ...values,
    [key]: form.controls[key].value
}), {});

export const submit = (form) => updateControlsWithValue({ ...form, isSubmitted: true }, { isSubmitted: true })

export const bindChangeHandlers = (form, handleChange) => updateControlsWithValue(form, { update: handleChange })

const updateControlsWithValue = (form, obj) => form.controls == null ? form : Object.keys(form.controls).reduce(
    (newForm, fieldKey) => ({
        ...newForm,
        controls: {
            ...newForm.controls,
            [fieldKey]: {
                ...newForm.controls[fieldKey],
                ...obj
            }
        }
    }),
    form
);

const convertToDisplayName = (str) => str
    .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/^./, function (str) { return str.toUpperCase(); })
    .trim();