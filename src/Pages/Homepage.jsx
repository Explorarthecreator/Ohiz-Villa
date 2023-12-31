import { useNavigate } from "react-router-dom"

function Homepage() {

  let navigate = useNavigate()
  const handleclick=()=>{
    navigate("/about")
  }
  return (
    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="card card-compact w-96 md:w-80 xl:w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Lodge C
          </h2>
          <p>
            This facility boosts of constant electricity, security and water. It is very affordable and the best in the area for students
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary" onClick={handleclick}>
              Secure a room
            </button>
          </div>
        </div>
      </div>

      <div className="card card-compact w-96 md:w-80 xl:w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Lodge C
          </h2>
          <p>
            This facility boosts of constant electricity, security and water. It is very affordable and the best in the area for students
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">
              Secure a room
            </button>
          </div>
        </div>
      </div>

      <div className="card card-compact w-96 md:w-80 xl:w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Lodge C
          </h2>
          <p>
            This facility boosts of constant electricity, security and water. It is very affordable and the best in the area for students
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">
              Secure a room
            </button>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Homepage