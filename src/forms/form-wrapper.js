import React from 'react';
import { bindChangeHandlers, validate, getValueFromForm, submit } from './validation';

export default (formCreator) => (WrappedComponent) => {

    return class FormContainer extends React.Component {

        constructor(props) {
            super(props);
            
            this.handleChange = this.handleChange.bind(this);
            this.submitForm = this.submitForm.bind(this);

            this.state = bindChangeHandlers(formCreator(this.props), this.handleChange);
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

            this.setState(submit(this.state));

            if (this.state.isValid) {
                this.props.onSave(getValueFromForm(this.state), e);
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props}
                    form={this.state}
                    submitForm={this.submitForm}
                ></WrappedComponent>
            )
        }
    }
}