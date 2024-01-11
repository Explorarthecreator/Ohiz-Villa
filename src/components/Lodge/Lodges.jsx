import { useContext } from "react"
import LodgeContext from "../../context/lodge/LodgeContext"
import LodgeItem from "./LodgeItem"
import Loading from "../layout/Loading"
function Lodges() {
    const {loading,lodges} = useContext(LodgeContext)
  return (
    loading? <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
        {
            lodges.map((lodge)=>(<Loading/>))
        }
    </div>:
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