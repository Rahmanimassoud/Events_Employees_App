
import { useState } from 'react';
import './App.css'
import EventForm from './components/EventForm/EventForm'
import EventList from './components/EventList/EventList'
import AddEmployee from './components/AddEmployee/AddEmployee';
import ViewEmployee from './components/ViewEmployee/ViewEmployee';

function App() {
  const [events, setEvents] = useState([]);
  const [employees, setEmployees] = useState([]);

  

  return (
    <>
      <EventForm setEvents={setEvents} events={setEvents}/>
      <EventList events={events} setEvents={setEvents}/>
      <AddEmployee employees={employees} setEmployees={setEmployees} />
      <ViewEmployee employees={employees} setEmployees={setEmployees} />
    </>
  )
}

export default App
