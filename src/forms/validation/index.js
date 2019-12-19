import * as functions from './functions';

export const required = functions.required;

export const getValueFromForm = (form) => Object.keys(form.controls).reduce((values, key) => ({
    ...values,
    [key]: form.controls[key].value
}), {});

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

const validateField = (field, form) => field.rules.map(rule => rule(field.value, getValueFromForm(form)));

export const submit = (form) => updateControlsWithValue({ ...form, isSubmitted: true }, { isSubmitted: true })
export const bindChangeHandlers = (form, handleChange) => updateControlsWithValue(form, { update: handleChange })

const updateControlsWithValue = (form, obj) => Object.keys(form.controls).reduce(
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