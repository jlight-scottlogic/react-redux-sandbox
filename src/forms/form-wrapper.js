import React from 'react';
import { validate, getValueFromForm } from './validation';

export default (formCreator) => (WrappedComponent) => {

    return class FormContainer extends React.Component {

        constructor(props) {
            super(props);

            this.state = validate(formCreator(this.props));

            this.handleChange = this.handleChange.bind(this);
            this.submitForm = this.submitForm.bind(this);
        }

        handleChange(e) {
            this.setState(validate({
                ...this.state,
                controls: {
                    ...this.state.controls,
                    [e.target.id]: {
                        ...this.state.controls[e.target.id],
                        value: e.target.value,
                        isTouched: true
                    }
                }
            }));
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