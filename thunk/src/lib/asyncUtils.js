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