import { createContext, useReducer,useEffect } from "react";
import LodgeReducer from './LodgeReducer'
import {db} from '../../firebase.config'
import { collection, getDoc, getDocs, query, where, doc } from "firebase/firestore";

const LodgeContext = createContext()

export const LodgeProvider=({children})=>{

    const initialState = {
        lodges:[],
        loading:true,
        lodge:{},
        receipt:{},
    }
    const [state,dispatch] = useReducer(LodgeReducer,initialState)

    useEffect(()=>{
        fetchLodges()
    },[])



    const fetchLodges = async ()=>{
            
        try {
            const lodgeRef = collection(db,'lodges')

            const roomRef = collection(db,'rooms')

            

            const querySnap = await getDocs(lodgeRef)
            
            const lodges = []
            
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
        dispatch({
            type: 'SET_LODGE',
            payload: ra
        })
    }

    return <LodgeContext.Provider value={{
        lodges : state.lodges,
        loading:state.loading,
        lodge:state.lodge,
        receipt: state.receipt,
        fetchLodge,
        setLoading,
        setReceipt,
        setLodgee,
    }}>
        {children}
    </LodgeContext.Provider>
}


export default LodgeContext