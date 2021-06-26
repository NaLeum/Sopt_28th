// 5. 리듀서 만들기
import {combineReducers} from 'redux';
import counter from './counter';

const rootReducer = combineReducers({ counter });

export default rootReducer;

