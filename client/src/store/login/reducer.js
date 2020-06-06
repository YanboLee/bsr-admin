import {
    SET_TODOS,
} from './actions'

export const setTodos = (state, list) => {
    return state.set('list', list);
}

export const reduder = (state, action) => {
    switch (action.type) {
        case SET_TODOS:
            return setTodos(state, action.list);
        default:
            break;
    }
}