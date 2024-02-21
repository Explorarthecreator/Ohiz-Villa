
import { useContext } from "react"
import LodgeContext from "../../context/lodge/LodgeContext"
import { Link } from "react-router-dom"
function LodgeItem({lodge}) {
    const {setLoading} = useContext(LodgeContext)
  return (
        <div className="card card-compact w-11/12 md:w-80 xl:w-96 bg-base-100 shadow-xl m-auto">
            <figure><img src="https://images.unsplash.com/photo-1633115365874-3e8f3faddb54?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
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