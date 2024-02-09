import { useContext, useState } from "react"
import RoomContext from "../context/room/RoomContext"
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3"
import { PaystackButton } from "react-paystack"
import {toast} from 'react-toastify'
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { useNavigate } from "react-router-dom"
import LodgeContext from "../context/lodge/LodgeContext"
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
    const {lodge, setReceipt} = useContext(LodgeContext)
    const [disableInput, setDisableInput] = useState(false)
    const [paymentGateway, setPaymentGateway] = useState(true)

    const {
        name,
        phoneNumber,
        email
    } = formData

    // const customerData = formData
    const{
        id,
        price,
        number
    } = rom

    const lodgeName = lodge.name


    const details = {lodgeName,number,price,name,id}

    const updateRoom = async(data)=>{
        const roomRef = doc(db,'rooms',data.id)

        await updateDoc(roomRef,{
            available:false
        })
    }
    
    const handleName =(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id] : e.target.value
        }))

        // console.log(formData);
        console.log(process.env.REACT_APP_FLUTTER_DICK);
        console.log(process.env.REACT_APP_TEST_KEY)
    }
    // useEffect(()=>{
    //     console.log(rom);
    // },[rom])

    const flutterWaveConfig = {
        public_key: process.env.REACT_APP_FLUTTER_TEST_KEY,
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
            if(response.status === 'successful'){
                console.log(response);
                setReceipt(details)
                updateRoom(details)
                toast.success('Payment successful')
                navigate('/red')
            }
            
           
          closePaymentModal() // this will close the modal programmatically

        },
        onClose: () => {},
      };

    const paystackConfig = {
        reference: (new Date()).getTime().toString(),
        email: email,
        firstname:name,
        phone:phoneNumber,
        amount: price*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      };
      const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        if(reference.status === 'success'){
            console.log(reference);
            toast.success('Payment successful')
            setReceipt(details)
            updateRoom(details)
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
          text: 'Pay with Paystack!',
          onSuccess: (reference) => handlePaystackSuccessAction(reference),
          onClose: handlePaystackCloseAction,
      };
      const handlesubmit = (e)=>{

        e.preventDefault()
        if(name === ''){
            toast.error('Please enter your name')
            return
        }
        else if(typeof price === 'undefined'){
            toast.error('Please go back and select a room')
        }
        else{
            setDisableInput(true)
        }
        // window.print()
        
    }

    
     const handleSelect=(e)=>{
        setPaymentGateway(!paymentGateway)
     }

  return (
    <div className=" font-medium">
        <div className="flex gap-3 mb-6 text-black justify-center">
            <div>
                <p>
                    Lodge Details
                </p>
                <input type="text"  className="input input-bordered w-full max-w-xs" disabled value={lodge.name} /> 
            </div>
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
                <input type="text" placeholder="You can't touch this" className="input input-bordered w-full max-w-xs" disabled value={price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')} />
            </div>
        </div>

        

        <form onSubmit={handlesubmit} className=" py-7 my-7 text-base-content border-success w-4/5 lg:w-1/2 m-auto shadow-2xl rounded-lg bg-base-100 text-center">
            <h1 className=" text-3xl uppercase">
                Personal Details
            </h1>
            <span>
                (Please enter your correct details)
            </span>
            <div className="form-control mt-7">
                <div className="">
                    {/* <input 
                        type="text" 
                        className="w-full pr-40 bg-gray-200 input input-md text-black" 
                        placeholder='Search'
                        value={''}
                        // onChange={handleChange}
                        /> */}
                    <input type="text" placeholder="Enter Full name" className="input input-bordered w-full max-w-xs" id="name" value={name} onChange={handleName} required disabled={disableInput} /> <br />
                    <input type="tel" placeholder="Enter Phone Number" className="input input-bordered w-full max-w-xs my-4" id="phoneNumber" value={phoneNumber}  onChange={handleName} required disabled={disableInput} /> <br />
                    <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" id="email" value={email} onChange={handleName} required disabled={disableInput} /> <br />
                    
                    {/* <input type="radio" name="paymnt" id="fkuer" onSelect={()=>{console.log(" FLutter");}} /> Flutter <br /> */}


                    {
                        disableInput?<div>
                        <p className="my-5">
                            Choose A payment option
                        </p>
                        
                        <div className="flex gap-3 justify-center">
                            <input type="radio" name="payment" id="paystack" onChange={(e)=>handleSelect(e)} checked={paymentGateway} className="radio radio-lg"/> Paystack <br />
                            <input type="radio" name="payment" id="flutter" onChange={(e)=>handleSelect(e)} checked={!paymentGateway} className="radio radio-lg" /> Flutter <br />
                        </div>
                        <div className="mt-6 md:flex md:justify-between w-4/5 m-auto ">
                            <PaystackButton {...componentProps}  className={`btn btn-lg btn-success ${paymentGateway?'btn-success':'btn-disabled'} text-black`}/> 
                            <FlutterWaveButton {...fwConfig} disabled={paymentGateway} className="btn btn-lg btn-success text-black"/>
                            {/* <button className="btn btn-lg ml-3 btn-success" disabled={paymentGateway}>
                                Fluterwave
                            </button> */}
                        </div>
                        </div>:
                        <button type='submit' className='rounded-l-none w-36 btn btn-lg mt-5 lg:hover:shadow-xl btn-outline' >
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