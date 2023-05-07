import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수 만들기

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text => ({
    id : id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, id => id);

export const remove = createAction(REMOVE, id => id);

//초기 상태 및 리듀서 함수 만들기

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: 'redux study',
            done: true
        },
        {
            id: 2,
            text: 'use redux and react',
            done: false
        }
    ]
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, {payload: input}) => ({ ...state, input: input}),
        [INSERT] : (state, {payload: todo}) => ({
            ...state,
            todos : state.todos.concat(todo),
        }),
        [TOGGLE]: (state, {payload : id}) => ({
            ...state,
            todos: state.todos.map(todo => 
                todo.id === id ? {...todo, done: !todo.done } : todo,
            ),
        }),
        [REMOVE] : (state, {payload : id}) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id),
        }),
    },
    initialState,
);
     


export default todos;