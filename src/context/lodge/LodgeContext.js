import { createContext, useReducer,useEffect } from "react";
import LodgeReducer from './LodgeReducer'
import {db} from '../../firebase.config'
import { collection, getDoc, getDocs, query, where, doc } from "firebase/firestore";

const LodgeContext = createContext()

// const LOCAL_URL = process.env.LOCAL_HOST_LINK
export const LodgeProvider=({children})=>{

    const initialState = {
        lodges:[],
        loading:true,
        lodge:{},
        receipt:{},
    }
    useEffect(()=>{
        fetchLodges()
    },[])

    const [state,dispatch] = useReducer(LodgeReducer,initialState)


    const fetchLodges = async ()=>{
        // const response = await fetch("http://localhost:5000/lodge")
        
        // const data = await response.json()

        
        try {
            const lodgeRef = collection(db,'lodges')

            const roomRef = collection(db,'rooms')

            

            const querySnap = await getDocs(lodgeRef)
            //  /
            // console.log(querySnap);
            // const geee= 'My name'
            const lodges = []
            // const rooe = {
            //     geee,
            //     room
            // }

            
            
            // console.log(querySnap.size);
            querySnap.forEach(async (doc)=>{
                const roomQuery = query(roomRef,where('lodgeRef','==',doc.id))
                const roomSnap = await getDocs(roomQuery)
                const totalNumber = roomSnap.size
                let availableRooms = 0
                roomSnap.forEach((doc)=>{

                    if(doc.data().available){
                        availableRooms+=1
                    }
                })
               let Occupied = totalNumber - availableRooms
                
                return lodges.push({
                    id:doc.id,
                    name:doc.data().name,
                    webName:doc.data().webname,
                    totalNumber,
                    Occupied,
                    availableRooms
                })
            })
            console.log(lodges);
            // console.log('total rooms '+totalNumber)
            // console.log('occupied rooms '+Occupied);

            
            setTimeout(()=>{
                dispatch({
                    type:'GET_LODGES',
                    payload:lodges,
                })
            },1000)


        } catch (error) {
            console.log(error);
        }
    }

    const fetchLodge = async (webname)=>{
        setLoading()
        // const response = await fetch(`http://localhost:5001/${webname}`)

        // dispatch({
        //     type: 'GET_LODGE',
        //     payload:data
        // })
        const lodgeRef = doc(db,'lodges',webname)
        const lodgeSnap = await getDoc(lodgeRef)

        if(lodgeSnap.exists()){
            console.log(lodgeSnap.data());
        }
    }
    const setLoading = ()=>{
        dispatch({
            type:'SET_LOADING'
        })
    }

    const setReceipt =  (details)=>{
        dispatch({
            type: 'SET_RECEIPT',
            payload: details
        })
    }
    const setLodgee = (ra)=>{
        // console.log('Currently working on that room thing');
        dispatch({
            type: 'SET_LODGE',
            payload: ra
        })
        // console.log(ra);
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
        receipt: state.receipt,
        // rom: state.lodge,
        fetchLodge,
        setLoading,
        setReceipt,
        setLodgee,
        // setRa
    }}>
        {children}
    </LodgeContext.Provider>
}


export default LodgeContext