import { getValueFromForm } from '../functions';

export default (form) => Object.keys(form.controls).reduce(
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