import React, { useContext } from 'react'
import RoomContext from '../context/room/RoomContext'
import LodgeContext from '../context/lodge/LodgeContext'

export const Printer = React.forwardRef((props,ref)=>{
    const {rom} = useContext(RoomContext)
    const {lodge} = useContext(LodgeContext)
    return (
        
        <div ref={ref} className=' text-center'>
            
        

            <p>
                Welcome to this beatiful Building i love al; wed
            </p>
            <p>
                Payment for room {rom.number}
            </p>
            <p>
                {
                    lodge.name
                }
            </p>
            <p>
                Payment Status: Successful
            </p>
        </div>        
      )
})