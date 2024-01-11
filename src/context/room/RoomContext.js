import { createContext, useReducer } from "react";
import RoomReducer from "./RoomReducer";

const RoomContext = createContext()


export const RoomProvider=({children})=>{

    const initialState = {
        rom:{}
    }

    const [state,dispatch] = useReducer(RoomReducer,initialState)

    const setRa = (ra)=>{
        // console.log('Currently working on that room thing');
        dispatch({
            type: 'SET_ROOM',
            payload: ra
        })
        // console.log(ra);
    }

    return <RoomContext.Provider value={{
        rom: state.rom,
        setRa
    }}>
        {children}
    </RoomContext.Provider>
}
export default RoomContext