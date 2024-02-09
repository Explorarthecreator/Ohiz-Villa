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
      <Loading/>
      <Loading/>
    </div>
      )
    }

    if(lodges.length <=0){
      return(
          <Reload/>
      )
    }
  return (
    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {
            lodges.map((lodge)=>(
                <LodgeItem lodge={lodge} key={lodge.id}/>
            ))
        }
    </div>
  )
}

export default Lodges