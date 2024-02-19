import { useContext } from "react"
import LodgeContext from "../../context/lodge/LodgeContext"
import LodgeItem from "./LodgeItem"
import Loading from "../layout/Loading"
import Reload from "../layout/Reload"
function Lodges() {
    const {loading,lodges} = useContext(LodgeContext)
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

    if(lodges.length <=0){
      return(
          <Reload/>
      )
    }
  return (
    <>
      <h1 className=" text-2xl md:text-5xl text-black text-center font-semibold capitalize my-8">
        Choose your desired Lodge
      </h1>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {
            lodges.map((lodge)=>(
                <LodgeItem lodge={lodge} key={lodge.id}/>
            ))
        }
      </div>
    </>
    
  )
}

export default Lodges