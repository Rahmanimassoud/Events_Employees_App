

/*eslint-disable no-undef*/

// create a schema (breakdown of what our data would look like)
const mongoose = require('mongoose')

// Schema
const employeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    
},
{
    timestamps: true
}

)



// create Model with that schema
// whatever we put as the collection name will be lowercased and pluralized like fruits
// Fruit > fruits
// User > users

const Employee = mongoose.model("Employee", employeeSchema)


module.exports = Employee;