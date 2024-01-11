const RoomReducer =(state,action)=>{
    switch(action.type){
        case 'SET_ROOM':
            return{
                ...state,
                rom:action.payload
            }
        default:
            return state
    }
}

export default RoomReducer