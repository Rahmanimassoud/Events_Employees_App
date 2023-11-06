import axios from 'axios'
import React, { useState } from 'react'

const Event = ({event, handleDelete, setEvents}) => {
    // we will have many of this component

    // EACH ONE WILL HAVE A SHOWFORM STATE
    const [show, setShow] = useState(false)
    const [newDescription, setNewDescription] = useState(event.description)


    const handleClick = (eventId) => {
        // axios call
        // send the information, id and new information
        // and make a route for it, a put route 
        axios({
            url: `/server/events/${eventId}`,
            method: "PUT",
            data: {description: newDescription} //FIND IT IN THE REQ.BODY
        }).then((response)=> {
            setEvents((events)=> {

                let stateCopy = events.map((eventObj)=> {
                    if(eventObj._id === response.data._id) {
                        return response.data
                    }else {
                        return eventObj
                    }
                })
                return stateCopy;

            })
        })
    }
    
  return (
    <div>
        <div key={event._id} className="event-item">
          <button onClick={()=> handleDelete(event._id)}>Delete</button>
          <button onClick={()=> setShow(!show)}>Edit</button>
          <h2>{event.title}</h2>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
          <div className="organizer">
            <strong>Organizer:</strong>
            <p>Name: {event.organizer.name}</p>
            <p>Role: {event.organizer.role}</p>
          </div>
        </div>
        {
            show ? <form onSubmit={(e)=> e.preventDefault()}>
                <input value={newDescription} onChange={(e)=> setNewDescription(e.target.value)} />
                <button onClick={()=> handleClick(event._id)}>Update this Event</button>
            </form>: <></>
        }
    </div>
  )
}

export default Event
