// import { useContext } from "react"
import { useContext } from "react"
import LodgeContext from "../../context/lodge/LodgeContext"
import { Link } from "react-router-dom"
function LodgeItem({lodge}) {
    const {setLoading} = useContext(LodgeContext)
  return (
        <div className="card card-compact w-96 md:w-80 xl:w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {
                        lodge.name
                    }
                </h2>
                <p>
                    This facility boosts of constant electricity, security and water. It is very affordable and the best in the area for students
                </p>
                <div className="stats shadow">
  
                    <div className="stat">
                        <div className="stat-title">Total</div>
                        <div className=" text-xl text-primary font-extrabold">
                            {
                                lodge.totalNum
                            }
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">
                            Available
                        </div>
                        <div className=" text-xl text-primary font-extrabold">
                            {
                                lodge.availableRooms
                            }
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">
                            Occupied
                        </div>
                        <div className=" text-xl text-primary font-extrabold">
                            {
                                lodge.occupiedRooms
                            }
                        </div>
                    </div>

                    
  
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/lodge/${lodge.webname}`} className="btn btn-primary" onClick={setLoading}>
                    Secure a room
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default LodgeItem