export const createPromiseThunk = (type,promomisCreator) => {
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    const thunkCreator = param => async dispatch => {
        dispatch({type})
        try{
            const payload = await promomisCreator(param);
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

export const handleAsyncActions = (type,key) => {
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    const reducer = (state, action) => {
        switch (action.type){
            case type:
                return{
                    ...state,
                    [key]: reducerUtils.loading()
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