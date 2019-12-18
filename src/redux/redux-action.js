export const createReduxAction = (type) => ({
    type,
    matches: (action) => type === action.type,
    create: (payload) => ({
        type: type,
        payload: payload
    })
})