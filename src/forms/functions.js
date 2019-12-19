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