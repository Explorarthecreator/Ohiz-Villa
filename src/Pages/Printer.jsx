import React, { useContext } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
// import RoomContext from '../context/room/RoomContext'
import LodgeContext from '../context/lodge/LodgeContext'

export const Printer = React.forwardRef((props,ref)=>{
    // const {rom} = useContext(RoomContext)
    const {receipt} = useContext(LodgeContext)
    return (
        
        <div ref={ref} className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <FaCheckCircle color='#65B741' size={'5em'}/>    
                </figure>
                <div className="card-body">
                    {/* <h2 className="card-title">
                        Successfull
                    </h2> */}
                    

                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    Lodge Name
                                </th>
                                <td>
                                    {receipt.lodgeName}
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                    Room Number
                                </th>
                                <td>
                                    {receipt.number}
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>
                                    Price
                                </th>
                                <td>
                                    {receipt.price}
                                </td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>
                                    Status
                                </th>
                                <td>
                                    Paid
                                </td>
                            </tr>
                            </tbody>
                        </table>
</div>
                </div>
            </div>
        </div>        
      )
})