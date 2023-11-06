import React, { useState } from "react";
import axios from "axios";

const AddEmployee = ({employees, setEmployees}) => {

    const [employeeData, setEmployeeData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: 0
    });


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEmployeeData(prevState => ({
            ...prevState,
            [name]: value
        }))
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/server/employees', employeeData);
            if(response.status >= 200 && response.status < 300) {
                console.log("Employee was added successfully:", response.data);
                setEmployees((employees) => {
                    return [...employees, response.data]
                })

            } else {
                console.error('Error registering employee:', response.data);
            }
        } catch (error){
            console.error('There was error sending the request:', error);

        }
        setEmployeeData({
            firstName: '',
            lastName: '',
            email: '',
            age: 0
        })
    };


    return (
        <div className="event-list">
            <h1> Add new employee</h1>
            <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">firstName:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">lastName:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={employeeData.age}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit">Add Employee</button>
        </form>
        </div>
    )
};

export default AddEmployee;
