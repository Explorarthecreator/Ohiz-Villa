import { useContext, useState } from "react"
import RoomContext from "../context/room/RoomContext"
function Checkout() {


    const [name,setName]= useState('')
    const [phoneNumber,setPhonenumber] = useState()
    const [email,setEmail] = useState('')
    const {rom} = useContext(RoomContext)

    const{
        price,
        number
    } = rom

    const handlesubmit = (e)=>{
        e.preventDefault()
        
    }
    const handleName =(e)=>{
        setName(e.target.value)
        // console.log(name);
    }
    // useEffect(()=>{
    //     console.log(rom);
    // },[rom])
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
                    <input type="text" placeholder="Enter Full name" className="input input-bordered w-full max-w-xs" value={name} onChange={handleName}/> <br />
                    <input type="tel" placeholder="Enter Full name" className="input input-bordered w-full max-w-xs"  value={phoneNumber}  onChange={(e)=>{setPhonenumber(e.target.value)}} /> <br />
                    <input type="email" placeholder="Enter Full name" className="input input-bordered w-full max-w-xs input-error" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
                    <button type='submit' className='rounded-l-none w-36 btn btn-lg'>
                        Go
                    </button>
                </div>
            </div>
        </form>
        
    </div>
  )
}

export default Checkout