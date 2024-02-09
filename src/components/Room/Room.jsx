import RoomItem from "./RoomItem"

function Room({rooms}) {
  return (
    <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-4 ">
        {
            rooms.map((room)=>(
              <RoomItem room={room} key={room.id}/>
            ))
        }
    </div>
  )
}

export default Room