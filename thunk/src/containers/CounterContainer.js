// 8. 컨테이너 컴포넌트 작성
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter"
import { decrease, increase } from "../modules/counter";



const CounterContainer = () => {

    // 9. 함수 작성
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
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