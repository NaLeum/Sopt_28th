// 1. 액션 타입 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 2. 액션 생성 함수 작성
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

// 14. thunk 함수 생성
export const increaseAsync = () => (dispath) => {
    setTimeout(()=>{
        dispath(increase());
    },1000)
}

export const decreaseAsync = () => (dispath) => {
    setTimeout(()=>{
        dispath(decrease());
    },1000)
}

// 3. 초기 상태 설정 (꼭 객체이거나 배열일 필요는 없다)
const initialState = 0;


// 4. 리듀서 설정
export default function counter(state=initialState, action){
    switch(action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}

