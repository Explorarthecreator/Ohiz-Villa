import { useRef } from "react"
import {useReactToPrint} from "react-to-print"
import { Printer } from "./Printer"
import { useNavigate } from "react-router-dom"
function RedirectPaymentPage() {

  const navigate = useNavigate()
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
      content: ()=> componentRef.current
    })
  return (
    <div>
      
      <div className=" w-11/12 md:w-2/5 m-auto flex justify-end mb-3">
        <button onClick={()=>{
          handlePrint()
          navigate('/')
        }} className="btn btn-primary">
            Print Receipt
        </button>
      </div>
      <div className="overflow-x-auto">
        <Printer ref={componentRef}/>
      </div>
    </div>
  )
}

export default RedirectPaymentPage