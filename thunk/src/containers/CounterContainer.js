// 8. 컨테이너 컴포넌트 작성
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter"
import { decrease, decreaseAsync, increase, increaseAsync } from "../modules/counter";



const CounterContainer = () => {

    // 9. 함수 작성
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increaseAsync());
    }

    const onDecrease = () => {
        dispatch(decreaseAsync());
    }
    return(
        <Counter 
            number={number} 
            onIncrease={onIncrease} 
            onDecrease={onDecrease}
        />
    )
}

export default CounterContainer;