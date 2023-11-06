import React, { useState, useEffect } from 'react';
import './index.css'
import axios from 'axios';
import Event from '../Event/Event';


const EventList = ({events, setEvents}) => {
  // compnent lifecycle
  // 1. mounts (state runs, code runs, JSX gets put on screen)
  // 2. useEffects run
  // 3. setState
  // 4. rerender (recalculate state, code runs, NEW JSX)
  // 5. dismounts ?




  

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/server/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete =  async (eventID) => {
    // 1. go to db and delete from db
    // it's still in state! Still on Screen
    // 3. so remove from state
    let response = await axios({
      method: "DELETE",
      url: `server/events/${eventID}`
    })
    if(response.status === 200) {
      setEvents(events.filter(event => event._id !== eventID))
    }
  }

  return (
    <div className="event-list">
        <h1>List of events</h1>
      {events.map(event => (
        <Event key={event._id} event={event} setEvents={setEvents} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};

export default EventList;