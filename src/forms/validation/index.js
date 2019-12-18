import * as functions from './functions';

export const required = functions.required;

export const validate = (form) => Object.keys(form.controls).reduce(
    (newForm, fieldKey) => {
        const field = newForm.controls[fieldKey];
        const errors = validateField(field, newForm).filter(x => !x.isValid)

        return {
            ...newForm,
            controls: {
                ...newForm.controls,
                [fieldKey]: {
                    ...field,
                    isValid: errors.length === 0,
                    errors: errors.map(result => result.message.replace('{field}', field.displayName || field.id))
                }
            },
            isValid: newForm.isValid && errors.length === 0
        }
    },
    { ...form, isValid: true });

export const getValueFromForm = (form) => Object.keys(form.controls).reduce((values, key) => ({
    ...values,
    [key]: form.controls[key].value
}), {});

const validateField = (field, form) => field.rules.map(rule => rule(field.value, getValueFromForm(form)));