import { useContext, useState } from "react"
import RoomContext from "../context/room/RoomContext"
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3"
import { PaystackButton } from "react-paystack"
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom"
// import Flutter from '../components/Flutter'
function Checkout() {


    const navigate = useNavigate()
    const [formData,setFormData]= useState({
        name:'',
        phoneNumber:'',
        email:''
    })
    // const [phoneNumber,setPhonenumber] = useState()
    // const [email,setEmail] = useState('')
    const {rom} = useContext(RoomContext)
    const [disableInput, setDisableInput] = useState(false)
    const [paymentGateway, setPaymentGateway] = useState(true)

    const {
        name,
        phoneNumber,
        email
    } = formData

    const{
        price,
        number
    } = rom

    
    const handleName =(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id] : e.target.value
        }))

        console.log(formData);
    }
    // useEffect(()=>{
    //     console.log(rom);
    // },[rom])

    const flutterWaveConfig = {
        public_key: process.env.REACT_APP_TEST_KEY,
        tx_ref: Date.now(),
        amount: price,
        currency: 'NGN',
        // redirect_url : 'http://localhost:3000/red',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: email,
            phone_number: phoneNumber,
          name: name,
        },
        customizations: {
          title: 'Ohiz Villa',
        //   description: `Payment for room ${number}`,
          description:'Payment for Explorar',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
      const fwConfig = {
        ...flutterWaveConfig,
        text: 'Pay with Flutterwave!',
        callback: (response) => {
           console.log(response);
           navigate('/red')
          closePaymentModal() // this will close the modal programmatically
          toast.success('Payment successful')

        },
        onClose: () => {},
      };

    const paystackConfig = {
        reference: (new Date()).getTime().toString(),
        email: email,
        firstname:name,
        phone:phoneNumber,
        amount: price*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_0d2221fbbb608ceee7f64ef5285414ce4717c1ae',
      };
      const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        if(reference.status === 'success'){
            console.log(reference);
            toast.success('Payment successful')
            navigate('/red')

        }
        console.log(rom);
        
      };
  
      // you can call this function anything
      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
      }
  
      const componentProps = {
          ...paystackConfig,
          text: 'Paystack Button',
          onSuccess: (reference) => handlePaystackSuccessAction(reference),
          onClose: handlePaystackCloseAction,
      };
      const handlesubmit = (e)=>{

        e.preventDefault()
        setDisableInput(true)
        // window.print()
        
    }

    
     const handleSelect=(e)=>{
        setPaymentGateway(!paymentGateway)
     }

  return (
    <div>

        <div>
            <p>
                Room Details
            </p>
            <input type="text" placeholder="You can't touch this" className="input input-bordered w-full max-w-xs" disabled value={`Room ${number}`} /> 
        </div>
        <div>
            <p>
                Price
            </p>
            <input type="text" placeholder="You can't touch this" className="input input-bordered w-full max-w-xs" disabled value={price} />
        </div>

        <h1>
            Personal Details
        </h1>
        <span>
            (Please enter your correct details)
        </span>

        <form onSubmit={handlesubmit}>
            <div className="form-control">
                <div className="">
                    {/* <input 
                        type="text" 
                        className="w-full pr-40 bg-gray-200 input input-md text-black" 
                        placeholder='Search'
                        value={''}
                        // onChange={handleChange}
                        /> */}
                    <input type="text" placeholder="Enter Full name" className="input input-bordered w-full max-w-xs" id="name" value={name} onChange={handleName} required disabled={disableInput} /> <br />
                    <input type="tel" placeholder="Enter Phone Number" className="input input-bordered w-full max-w-xs" id="phoneNumber" value={phoneNumber}  onChange={handleName} required disabled={disableInput} /> <br />
                    <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs input-error" id="email" value={email} onChange={handleName} required disabled={disableInput} /> <br />
                    
                    {/* <input type="radio" name="paymnt" id="fkuer" onSelect={()=>{console.log(" FLutter");}} /> Flutter <br /> */}


                    {
                        disableInput?<div>
                        <p>
                            Choose A payment option
                        </p>
                            <input type="radio" name="payment" id="paystack" onChange={(e)=>handleSelect(e)} checked={paymentGateway}/> Paystack <br />
                            <input type="radio" name="payment" id="flutter" onChange={(e)=>handleSelect(e)} checked={!paymentGateway} /> Flutter <br />
                        <div>
                            <PaystackButton {...componentProps}  className={`btn btn-lg btn-success ${paymentGateway?'btn-success':'btn-disabled'}`}/> 
                            <FlutterWaveButton {...fwConfig} disabled={paymentGateway} className="btn btn-lg ml-3 btn-success"/>
                            {/* <button className="btn btn-lg ml-3 btn-success" disabled={paymentGateway}>
                                Fluterwave
                            </button> */}
                        </div>
                        </div>:
                        <button type='submit' className='rounded-l-none w-36 btn btn-lg'>
                            Pay Now
                        </button>
                    }
                    

                    
                    {/* <button type='submit' className='rounded-l-none w-36 btn btn-lg' disabled={!dis}> */}
                        {/* <Paystack className="btn btn-outline" email={email} price={price} name={name} phoneNumber={phoneNumber}/> */}
                    {/* </button> */}
                    {/* <Flutter price={price} user={formData} num={number}/> */}

                </div>
            </div>
        </form>
        
    </div>
  )
}

export default Checkout