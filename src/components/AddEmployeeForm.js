import React,{useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../actions/Employee";
import '../style/AddEmployeeForm.css';

export default function AddEmployeeForm(){

    const[error,setError]=useState(false);
    const dispatch = useDispatch();

    const initialFormState = {
        empId:0,
        empName:'',
        empAddress:'',
        contactNo:0,
        role:'',
    }

    const [employee,setEmployee]= useState(initialFormState);
    const handleInputChange=(event)=>{
    const {name,value} = event.target;
    setEmployee({...employee,[name]:value});
    }
    
 const navigate=useNavigate();

    const submitHandler=(event)=>{
        event.preventDefault();
        if(employee.empName.trim() === '' || 
        employee.empAddress.trim() ===''|| 
        employee.contactNo == 0 || employee.contactNo < 0 ||
        employee.role.trim() === '' ){
            setError(true);
            return;
        }
        else{
            navigate("/adminController");
        }
        //props.addEmployee(employee);
        dispatch(addEmployee(employee));
        console.log({employee});
        alert("Employee Added Successfully")
        }

        return(<>
        <form className="form" onSubmit={submitHandler}>
            {error && alert("Please Enter Employee Details")}
            <header><h1>Add Employee Form</h1></header>

              <label>Employee-Name</label>
                <input type='text'
                name='empName'
                value={employee.empName}
                onChange={handleInputChange}/><br></br>

               <label>Employee-Address</label>
                <input type='text'
                name='empAddress'
                value={employee.empAddress}
                onChange={handleInputChange}/><br></br>

               <label>Contact-Number</label>
                <input type='number'
                name='contactNo'
                value={employee.contactNo}
                onChange={handleInputChange}/><br></br>

               <label>Role</label>
                <input type='text'
                name='role'
                value={employee.role}
                onChange={handleInputChange}/><br></br>

                <button onClick={submitHandler}>Add New Employee</button>

            </form>
            </>)


}