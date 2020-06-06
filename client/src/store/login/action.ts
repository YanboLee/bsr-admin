export const SET_TODOS = 'SET_TODOS';
export const setTodos = (list = []) => {
    return {
        type: SET_TODOS,
        list,
    }
}

// export const loadTodos = (params) => {
//     return async (dispatch, getState) => {
//         const todos = await http.get('save/todo');
//         dispatch(setTodos(setTodos));
//     }
// }