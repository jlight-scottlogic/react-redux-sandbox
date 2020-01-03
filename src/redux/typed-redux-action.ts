import { Action } from "redux";

export const createUntypedReduxAction = (type: string) => ({
    type,
    matches: (action: Action) => type === action.type,
    create: () => ({
        type: type
    })
})

export const createTypedReduxAction = <T = any>(type: string) => ({
    type,
    matches: (action: Action) => type === action.type,
    create: (payload: T) => ({
        type: type,
        payload: payload
    })
})