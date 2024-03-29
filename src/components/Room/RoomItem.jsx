// import { Link } from "react-router-dom"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LodgeContext from "../../context/lodge/LodgeContext";
import RoomContext from "../../context/room/RoomContext";
function RoomItem({room}) {

    const {setRa} = useContext(RoomContext)
    let navigate = useNavigate()
    const handleclick = (id)=>{
        

        setRa(id)
        navigate("/checkout") 
    }
  return (
        <div className="card card-compact w-48 md:w-60 xl:w-64 shadow-xl bg-base-100">
            <div className="card-body">
                <h2 className="card-title">
                    {
                        `Room ${room.number}`
                    }
                </h2>
                <p className="text-2xl">
                    {
                        room.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
                    }
                </p>
                <div className="card-actions justify-start">
                    {
                        room.available? 
                        <button  className="btn btn-primary" onClick={()=>handleclick(room)}>
                            Pay now
                        </button>:
                        <button disabled className="btn btn-primary" >
                            Pay now
                        </button>
                    }
                </div>
            </div>
        </div>
  )
}

export default RoomItem