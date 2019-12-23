import React from 'react';
import { validate } from './validation';
import { getValueFromForm, submit, bindChangeHandlers } from './functions';

export default (formCreator) => (WrappedComponent) => {

    return class FormContainer extends React.Component {

        constructor(props) {
            super(props);
            
            this.handleChange = this.handleChange.bind(this);
            this.submitForm = this.submitForm.bind(this);

            this.state = bindChangeHandlers(validate(formCreator(this.props)), this.handleChange);
        }

        handleChange(id, value) {
            this.setState(validate({
                ...this.state,
                controls: {
                    ...this.state.controls,
                    [id]: {
                        ...this.state.controls[id],
                        value: value,
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