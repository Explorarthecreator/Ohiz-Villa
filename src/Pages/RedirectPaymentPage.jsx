import { useParams } from "react-router-dom"
function RedirectPaymentPage() {
    const params = useParams()
    // const params = new Url
  return (
    <div>
        {
            params.status
        }
    </div>
  )
}

export default RedirectPaymentPage