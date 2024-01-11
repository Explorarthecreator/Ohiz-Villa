const LodgeReducer = (state,action)=>{
    switch(action.type){
        case 'GET_LODGES':
            return{
                ...state,
                lodges: action.payload,
                loading:false
            }
        case 'GET_LODGE':
            return{
                ...state,
                lodge:action.payload,
                loading:false
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading:true
            }
        case 'SET_R':
            return {
                ...state,
                rom:action.payload
            }
        default:
            return state
    }
}

export default LodgeReducer