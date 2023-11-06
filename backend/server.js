// back end installation
// cors, helmet, dotenv, morgan, express,
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const helmet = require('helmet');   //adds standard security to server
const Event = require('./models/Event');
const Employee = require('./models/Employee');
require('dotenv').config();
require('./config/db')
const PORT = 3000

const app = express();


// START MIDDLEWARE====================
app.use(express.json());

app.use(cors({
    origin: '*'
}));

app.use(morgan('dev'))
app.use(helmet());
// END MIDDLEWARE ===================

// ROUTES=====

// get all the events
app.get("/events",  async (req, res)=> {
    let arrayOfEvents = await Event.find();
    res.status(201).send(arrayOfEvents)
})

// POST
app.post("/events", async (req, res)=> {
    //1. get the data from front end

    // 2. Model.create(eventData)
    try {
        let response = await Event.create(req.body)
        res.status(201).send(response)

    } catch (err) {
        console.log("Error", err);
    }
})

app.put("/events/:idOfEvent",  async (req, res)=> {
    let id = req.params.idOfEvent;
    let response = await Event.findByIdAndUpdate(id, req.body, {new: true});
    console.log(response);
    res.send(response)
})



// DELETE
app.delete("/events/:idOfEvent",  async (req, res)=> {

    let id = req.params.idOfEvent;
    let response = await Event.findByIdAndDelete(id);
    console.log(response);
    res.send("Deleted event")
})

// ======================Employee Routes=================

// Add employee
app.post("/employees", async (req, res)=> {
    //1. get the data from front end
    try {
        let response = await Employee.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log("Error", err);
    }
})

// get all the Employees
app.get("/employees",  async (req, res)=> {
    let arrayOfEmployees = await Employee.find();
    res.status(201).send(arrayOfEmployees)
})





app.listen(PORT, ()=> {
    console.log(`Server is up and running on port ${PORT}`);
});