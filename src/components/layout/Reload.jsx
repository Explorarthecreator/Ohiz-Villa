
function Reload() {
    const reloadPage= ()=>{
        window.location.reload()
    }
  return (
    <div className="hero">
      <div className="text-center hero-content text-black">
        <div className=" max-w-4xl">
          <h1 className="text-8xl font-bold mb-8">
            oops!
          </h1>
          <p className="text-2xl mb-8">
            Please check your network and click on the reload button
          </p>
          <button className="btn btn-primary btn-lg" onClick={reloadPage}>
            {/* <FaHome className="mr-2"/> */}
            Reload Page
          </button>
        
          
        </div>
      </div>
    </div>
  )
}

export default Reload