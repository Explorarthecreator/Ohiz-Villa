// import { Link } from "react-router-dom"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LodgeContext from "../../context/lodge/LodgeContext";
import RoomContext from "../../context/room/RoomContext";
function RoomItem({room}) {

    const {setRa} = useContext(RoomContext)
    let navigate = useNavigate()
    const handleclick = (id)=>{
        // const {
        //     number,
        //     price,
        //     available
        // } = id
        // console.log(id);
        // console.log('Clicked ' + id.price);
        // printsta();

        setRa(id)
        // setTimeout(() => {
        //     navigate("/checkout") 
        // }, 5000);
        navigate("/checkout") 

        // console.log(id);
        // printsta()
        // console.log(rom);
        // console.log(rom.number);
    }
    // const printsta = ()=>{
    //     console.log(rom);
    // }
    // useEffect(()=>{
    //     console.log(rom);
    // },[])
    // setTimeout(() => {
    //     console.log('d');
    // }, 5000);
  return (
        <div className="card card-compact w-48 md:w-60 xl:w-64 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    {
                        `Room ${room.number}`
                    }
                </h2>
                <p className="text-2xl">
                    {
                        room.price
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