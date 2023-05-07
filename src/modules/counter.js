// 액션 타입 정의하기

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number : state.number + 1
            };
        case DECREASE :
            return {
                number: state.number -1
            };
        default:
            return state;
    }
}

export default counter;