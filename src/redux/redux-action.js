export class ReduxAction {

    type = 'UNDEFINED';

    constructor(type) {
        this.type = type;
    }

    matches = (action) => this.type === action.type;

    create = (payload) => ({
        type: this.type,
        payload: payload
    });
}