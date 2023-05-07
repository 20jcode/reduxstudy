import { createAction, handleAction } from 'redux-actions';

// 액션 타입 정의하기

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수 만들기
export const increase =  createAction(INCREASE);
export const decrease =  createAction(DECREASE);

const initialState = {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number : state.number + 1}),
        [DECREASE]: (state, action) => ({ number : state.number -1 }),
    },
    initialState,
);

export default counter;