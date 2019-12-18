import React from 'react';

export default (formCreator) => (WrappedComponent) => {

    const getValueFromForm = (form) => Object.keys(form.controls).reduce((values, key) => ({
        ...values,
        [key]: form.controls[key].value
    }), {});

    const validate = (form) => Object.keys(form.controls).reduce(
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

    const updatedFormValue = (e, form) => validate({
        ...form,
        controls: {
            ...form.controls,
            [e.target.id]: {
                ...form.controls[e.target.id],
                value: e.target.value,
                isTouched: true
            }
        }
    });

    return class FormContainer extends React.Component {

        constructor(props) {
            super(props);

            this.state = validate(formCreator(this.props));

            this.handleChange = this.handleChange.bind(this);
            this.submitForm = this.submitForm.bind(this);
        }

        handleChange(e) {
            this.setState(updatedFormValue(e, this.state));
        }

        submitForm(e) {
            e.preventDefault();

            this.setState({
                ...this.state,
                isSubmitted: true
            });

            if (this.state.isValid) {
                this.props.onSave(getValueFromForm(this.state), e);
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props}
                    form={this.state}
                    updateValue={this.handleChange}
                    submitForm={this.submitForm}
                ></WrappedComponent>
            )
        }
    }
}