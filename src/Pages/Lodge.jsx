import { useParams } from "react-router-dom"
import { useContext,useEffect } from "react"
import LodgeContext from "../context/lodge/LodgeContext"
import Room from "../components/Room/Room"
import Loading from "../components/layout/Loading"

function Lodge() {
    const params = useParams()

    const {lodge,fetchLodge,loading} = useContext(LodgeContext)

    useEffect(()=>{
        fetchLodge(params.lodgename)
    },[])

    

    if(loading){
        return(
            <Loading/>
        )
    }
  return (
    <div>
        <div className="stats shadow mb-6 stats-vertical lg:stats-horizontal">
  
            <div className="stat">
                <div className="stat-title">
                    Total Rooms
                </div>
                <div className="stat-value text-primary text-center text-xl lg:text-5xl">
                    {
                        lodge.totalNum
                    }
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">
                    Available Rooms
                </div>
                <div className="stat-value text-secondary text-center text-xl lg:text-5xl">
                    {
                        lodge.availableRooms
                    }
                </div>
            </div>
        
            <div className="stat">
                <div className="stat-title">
                    Occupied Rooms
                </div>
                <div className="stat-value text-secondary text-center text-xl lg:text-5xl">
                    {
                        lodge.occupiedRooms
                    }
                </div>
            </div>
        
        </div>

        <h1 className="text-6xl font-bold text-gray-300 mb-7">
            Rooms
        </h1>
        <Room rooms={lodge.rooms} />
    </div>
  )
}

export default Lodge