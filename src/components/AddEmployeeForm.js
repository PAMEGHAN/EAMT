import React,{useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../actions/Employee";
import '../style/AddEmployeeForm.css';
import '../style/EmployeeDetails.css';
import '../style/login.css';

export default function AddEmployeeForm(){

    const[error,setError]=useState(false);
    const dispatch = useDispatch();

    const initialEmployeeFormState = {
        empId:0,
        empName:'',
        empAddress:'',
        contactNo:0,
        role:'',
        asset:{
            itemNum:0
        }
    }


    
    const [employee,setEmployee]= useState(initialEmployeeFormState);
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
       // props.addEmployee(employee);
        setEmployee(initialEmployeeFormState)
        console.log({employee});
        alert("Employee Added Successfully")
        }

        return(<div className="login-box">
        <form className="form" onSubmit={submitHandler}>
            {error && <p>Please Enter Employee Details</p>}
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

                

                <a href="#" onClick={submitHandler}><span></span>
                <span></span>
                <span></span>Add New Employee</a>
            </form>
            </div>)


}