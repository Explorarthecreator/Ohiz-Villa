import { createContext, useReducer,useEffect } from "react";
import LodgeReducer from './LodgeReducer'

const LodgeContext = createContext()

// const LOCAL_URL = process.env.LOCAL_HOST_LINK
export const LodgeProvider=({children})=>{

    const initialState = {
        lodges:[],
        loading:true,
        lodge:{}
    }
    useEffect(()=>{
        fetchLodges()
    },[])

    const [state,dispatch] = useReducer(LodgeReducer,initialState)


    const fetchLodges = async ()=>{
        const response = await fetch("http://localhost:5000/lodge")
        
        const data = await response.json()

        dispatch({
            type:'GET_LODGES',
            payload:data,
        })
    }

    const fetchLodge = async (webname)=>{
        setLoading()
        const response = await fetch(`http://localhost:5001/${webname}`)

        const data = await response.json()

        // console.log(data);

        dispatch({
            type: 'GET_LODGE',
            payload:data
        })
    }
    const setLoading = ()=>{
        dispatch({
            type:'SET_LOADING'
        })
    }
    // const setRa = (ra)=>{
    //     console.log('Currently working on that room thing');
    //     dispatch({
    //         type: 'SET_R',
    //         payload:ra
    //     })
    //     console.log(ra);
    // }

    return <LodgeContext.Provider value={{
        lodges : state.lodges,
        loading:state.loading,
        lodge:state.lodge,
        // rom: state.lodge,
        fetchLodge,
        // setRa
    }}>
        {children}
    </LodgeContext.Provider>
}


export default LodgeContext