import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from "../lib/createRequestSaga";
import { createRequestActionTypes } from "../lib/createRequestSaga";
import * as userAPI from "../lib/api/user";
import { takeLatest } from "redux-saga/effects";

/* GET_USER에 대한 성공,실패 액션을 생성 */
const [GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes(
    "user/GET_USER"
);
const [GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAILURE] = createRequestActionTypes(
    "user/GET_REPOS"
);

/* 액션 호출 함수 생성 */
export const getUser = createAction(GET_USER, (username) => username);
export const getRepo = createAction(GET_REPOS, (username) => username);

const getUserSaga = createRequestSaga(GET_USER, userAPI.userInfo);
const getRepoSaga = createRequestSaga(GET_REPOS, userAPI.userRepo);

export function* userSaga(){
    yield takeLatest(GET_USER, getUserSaga);
    yield takeLatest(GET_REPOS, getRepoSaga);
}

const initState = {
    userInfo: null,
    error: null,
    reposInfo: null,
}

const user = handleActions(
    {
        [GET_USER_SUCCESS]: (state, { payload: userInfo }) => ({
            ...state,
            userInfo,
          }),
          [GET_USER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
          }),
          [GET_REPOS_SUCCESS]: (state, { payload: reposInfo }) => ({
            ...state,
            reposInfo,
          }),
          [GET_REPOS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
          }),
    },
    initState
);

export default user;