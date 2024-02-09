// import { useContext } from "react"
import { useContext } from "react"
import LodgeContext from "../../context/lodge/LodgeContext"
import { Link } from "react-router-dom"
function LodgeItem({lodge}) {
    const {setLoading} = useContext(LodgeContext)
  return (
        <div className="card card-compact w-11/12 md:w-80 xl:w-96 bg-base-100 shadow-xl m-auto">
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
                                lodge.totalNumber
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
                                lodge.Occupied
                            }
                        </div>
                    </div>

                    
  
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/lodge/${lodge.id}`} className={`btn btn-primary ${lodge.availableRooms >0? 'btn-primary':'btn-disabled'} `}  >
                    Secure a room
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default LodgeItem