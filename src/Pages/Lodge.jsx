import { useParams } from "react-router-dom"
import { useContext,useEffect, useState } from "react"
import LodgeContext from "../context/lodge/LodgeContext"
import Room from "../components/Room/Room"
import Loading from "../components/layout/Loading"
import { collection, getDoc, getDocs, query, where, doc } from "firebase/firestore";
import {db} from '../firebase.config'


function Lodge() {
    const params = useParams()

    const {setLodgee} = useContext(LodgeContext)

    const [loading,setLoading] = useState(true)
    const [lodge,setLodge] = useState({})
    const [rooms, setRooms] = useState(null)
    const[totalRooms,setTotalRooms] = useState(0)
    const[occupiedRooms,setOccupiedRooms] = useState(0)
    const[availableRooms,setAvailableRooms] = useState(0)

    // const {lodge,fetchLodge,loading} = useContext(LodgeContext)

    useEffect(()=>{
        // fetchLodge(params.lodgename)
        const fetchItems = async ()=>{
            const lodgeRef = doc(db,'lodges',params.lodgename)
            const lodgeSnap = await getDoc(lodgeRef)

            const roomRef = collection(db,'rooms')
            const roomQuery = query(roomRef,where('lodgeRef','==',lodgeSnap.id))
            const roomSnap = await getDocs(roomQuery)
            
            setTotalRooms(roomSnap.size)
            let availableRooms = 0
            let rooms = []
            roomSnap.forEach((doc)=>{
                rooms.push({
                    id:doc.id,
                    price:doc.data().price,
                    available:doc.data().available,
                    number:doc.data().number
                })
                if(doc.data().available){
                    availableRooms+=1
                }
            })
            console.log(rooms);
            setAvailableRooms(availableRooms)
            setOccupiedRooms(roomSnap.size - availableRooms)
            if(lodgeSnap.exists()){
                setLodge(lodgeSnap.data())
                // console.log(object);
                setRooms(rooms)
                setLodgee(lodgeSnap.data())
                setLoading(false)
                console.log(lodgeSnap.data());
            }
        }

        fetchItems()
    },[params.lodgename])

    

    if(loading){
        return(
            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            <Loading/>
            <div className=" hidden md:block">
            <Loading />

            </div>
            <div className=" hidden lg:block">
            <Loading />

            </div>
            </div>
        )
    }
  return (
    <div>
        <div className="stats shadow-xl mb-6 stats-vertical lg:stats-horizontal">
  
            <div className="stat">
                <div className="stat-title">
                    Total Rooms
                </div>
                <div className="stat-value text-primary text-center text-xl lg:text-5xl">
                    {
                        totalRooms
                    }
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">
                    Available Rooms
                </div>
                <div className="stat-value text-secondary text-center text-xl lg:text-5xl">
                    {
                        availableRooms
                    }
                </div>
            </div>
        
            <div className="stat">
                <div className="stat-title">
                    Occupied Rooms
                </div>
                <div className="stat-value text-secondary text-center text-xl lg:text-5xl">
                    {
                        occupiedRooms
                    }
                </div>
            </div>
        
        </div>

        <h1 className="text-6xl font-bold mb-7 text-black">
            Rooms
        </h1>
        <Room rooms={rooms} />
    </div>
  )
}

export default Lodge