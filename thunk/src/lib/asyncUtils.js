export const createPromiseThunk = (type,promiseCreator) => {
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    const thunkCreator = param => async dispatch => {
        dispatch({type})
        try{
            const payload = await promiseCreator(param);
            dispatch({
                type: SUCCESS,
                payload
            })
        }catch(e){
            dispatch({
                type: ERROR,
                payload: e,
                error: true
            })
        }
    }

    return thunkCreator;
}

const defaultIdSelector = param => param;
// idSelector = 파라미터중에 id값은 무엇이냐
export const createPromiseThunkById = (type,promiseCreator,idSelector=defaultIdSelector) => {
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    const thunkCreator = param => async dispatch => {
        const id = idSelector(param);
        dispatch({type, meta:id})
        try{
            const payload = await promiseCreator(param);
            dispatch({
                type: SUCCESS,
                payload,
                meta: id
            })
        }catch(e){
            dispatch({
                type: ERROR,
                payload: e,
                error: true,
                meta: id
            })
        }
    }

    return thunkCreator;
}
export const handleAsyncActions = (type,key, keepData) => {
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    const reducer = (state, action) => {
        switch (action.type){
            case type:
                return{
                    ...state,
                    [key]: reducerUtils.loading(keepData ? state[key].data : null)
                }
            case SUCCESS:
               return {
                   ...state,
                   [key]:reducerUtils.success(action.payload)
                }
            case ERROR:
                return{
                    ...state,
                    [key]:reducerUtils.error(action.payload)
                }
            default:
                return state;
        }
    }
    return reducer;
}

export const handleAsyncActionsById = (type,key, keepData) => {
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    const reducer = (state, action) => {
        const id = action.meta;
        switch (action.type){
            case type:
                return{
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(
                            keepData ? (state[key][id] && state[key][id].data) : null)
                    }
                }
            case SUCCESS:
               return {
                   ...state,
                   [key]:{
                        ...state[key],   
                    [id]: reducerUtils.success(action.payload)}
                }
            case ERROR:
                return {
                    ...state,
                    [key]:{
                         ...state[key],   
                     [id]: reducerUtils.error(action.payload)}
                 }
            default:
                return state;
        }
    }
    return reducer;
}


export const reducerUtils = {
    initial : (data=null) => ({
        loading: false,
        data,
        error: null
    }),
    // prevState 를 옵션으로 준이유: 지금은 loading 하면 데이터를 null로 바꾸지만, 상황에 따라 loading값만 바꿀떄도 있기 떄문

    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: null,
    }),
    success: (data)=> ({
        data,
        loading: false,
        error:null
    }),
    error: (error) => ({
        data:null,
        loading:false,
        error
    })
}
