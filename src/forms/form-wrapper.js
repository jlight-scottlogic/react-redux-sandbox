import React from 'react';

export default (formCreator) => (WrappedComponent) => {

    const getValueFromForm = (form) => Object.keys(form).reduce((values, key) => ({
        ...values,
        [key]: form[key].value
    }), {});

    const validate = (form) => Object.keys(form).reduce(
        (newForm, fieldKey) => {
            const field = newForm[fieldKey];
            const errors = validateField(field, newForm).filter(x => !x.valid)

            return {
                ...newForm,
                [fieldKey]: {
                    ...field,
                    valid: errors.length === 0,
                    errors: errors.map(result => result.message.replace('{field}', field.displayName || field.id))
                }
            }
        },
        form);

    const validateField = (field, form) => field.rules.map(rule => rule(field.value, getValueFromForm(form)));

    const updatedFormValue = (e, form) => validate({
        ...form,
        [e.target.id]: {
            ...form[e.target.id],
            value: e.target.value,
            touched: true
        }
    });

    return class Container extends React.Component {

        constructor(props) {
            super(props);

            this.state = validate(formCreator(this.props));

            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e) {
            this.setState(updatedFormValue(e, this.state));
        }

        render() {
            return (
                <WrappedComponent {...this.props} form={this.state} updateValue={this.handleChange} getFormValue={getValueFromForm}></WrappedComponent>
            )
        }
    }
}