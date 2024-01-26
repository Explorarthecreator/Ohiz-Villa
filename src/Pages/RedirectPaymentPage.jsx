// import { useParams } from "react-router-dom"
import { useRef } from "react"
import {useReactToPrint} from "react-to-print"
import { Printer } from "./Printer"
function RedirectPaymentPage() {

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
      content: ()=> componentRef.current
    })
    // const params = useParams()
    // const params = new Url
  return (
    <div>
      <p>
        Payment was successful
      </p>
      <div className="overflow-x-auto">
        {/* <ReactToPrint trigger={()=>{
          return <button> Print Receipt</button>
        }} content={()=> componentRef}/> */}

        <Printer ref={componentRef}/>
        <button onClick={handlePrint}>
          Print Receipt
        </button>
        
      </div>
    </div>
  )
}

export default RedirectPaymentPage