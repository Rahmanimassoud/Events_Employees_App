import axios from "axios";
import React, { useEffect } from "react";

const ViewEmployee = ({employees, setEmployees}) => {




    useEffect(() => {
        const fetchEmployess = async () => {
            try {
                const response = await axios.get('/server/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees', error);
                
            }
        }
        fetchEmployess()
    }, []);


    return (
        <>
            <div className="event-list">
                <h1>List Of All Employees</h1>
                {employees.map(employee => (
                    <div key={employee.id}>
                        <p>Employee Name: {employee.firstName}</p>
                        <p>Employee Email: {employee.email}</p>
                        <p>Employee Age: {employee.age}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ViewEmployee;
