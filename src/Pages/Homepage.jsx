// import { useNavigate } from "react-router-dom"

import Lodges from "../components/Lodge/Lodges"
function Homepage() {

  // const lodgename = 'Lodge A'
  // let navigate = useNavigate()
  // const handleclick=()=>{
  //   navigate("/about")
  // }
  return (
    <>
      <h1 className=" text-2xl md:text-3xl text-black font-medium capitalize my-8">
        Choose your desired Lodge
      </h1>
      <Lodges/>
    </>
  )
}

export default Homepage