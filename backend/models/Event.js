/*eslint-disable no-undef*/

// create a schema (breakdown of what our data would look like)
const mongoose = require('mongoose')

// Schema
const eventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    organizer: {
        name: {type: String, required: true},
        role: {type: String, required: true}
    },
    
},
{
    timestamps: true
}


)



// create Model with that schema
// whatever we put as the collection name will be lowercased and pluralized like fruits
// Fruit > fruits
// User > users

const Event = mongoose.model("Event", eventSchema)


module.exports = Event;

