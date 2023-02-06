import React,{ useState} from 'react';
import { useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import { updateEmpAddressAndPhoneNo } from '../actions/Employee';
import { Link } from 'react-router-dom';
import '../style/EmployeeDetails.css';
import '../style/login.css';


export default function EmployeeDetails(props){

    const employee = props.employee;
   
const editHandler = (employee) => {
    props.setCurrentEmployee(employee);
    }

 return(
    <div>
    <fieldset>
    <header><h2>Employee Details</h2></header>
    <table border='2'>
        <thead>
            <tr>
                
                <th>Employee_Id</th>
                <th>Employee_Name</th>
                <th>Employee_Address</th>
                <th>Contact_Number</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
             <tr>
                   <td>{employee.empId}</td>
                   <td>{employee.empName}</td>
                   <td>{employee.empAddress}</td>
                   <td>{employee.contactNo}</td>
                   <td>{employee.role}</td>
                   <td>
                   <button onClick = {()=>editHandler(employee)}>
                <Link to ='/adminController/update_EmployeeAddressAndPhoneNo'>Edit</Link>
                 </button>
                   </td>
                   </tr>
                    </tbody>
                     </table>
                     </fieldset>
                     
    </div>
 )
 }



