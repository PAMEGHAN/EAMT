import React,{ useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateEmpAddressAndPhoneNo } from '../actions/Employee';
import '../style/EmployeeDetails.css';
import '../style/login.css';

export default function EditAddAndPh(props){
    const dispatch=useDispatch();

    const[employee,setEmployee] =useState(props.employeeDetails)
    
    const employeeId = localStorage.getItem(`employeeId`);
    const handleInputChange =(event)=>{
        const {name,value}=event.target;

        setEmployee({...employee,[name]:value});

    }
   const navigate = useNavigate();
    const [error,setError] = useState(false);

    const submitHandler=(event)=>{
        event.preventDefault();
         if(employee.empAddress.trim() === '' ||
             employee.contactNo == 0 ||
             employee.contactNo < 0 ){
                 setError(true);
                 return;
            }
             else{
                 navigate("/adminController")
             }
    dispatch(updateEmpAddressAndPhoneNo(employeeId,employee));
    alert("Address and PhoneNumber updated");
}

return(<div className="login-box">
    <form  className="form" onSubmit={submitHandler}>
        {error && <p>Please enter details</p>}
        <header><h1>Edit Employee Address And Phone_Number</h1></header>
        <label>Employee_Id</label>
        <input type='number'
        name='empId'
        value={employee.empId}
       /><br></br>

      <label>Employee_Name</label>
        <input type='text'
        name='empName'
        value={employee.empName}
       /><br></br>

        <label>Employee_Address</label>
        <input type='text'
        name='empAddress'
        value={employee.empAddress}
        onChange={handleInputChange}/><br></br>


        <label>Phone_Number</label>
        <input type='number'
        name='contactNo'
        value={employee.contactNo}
        onChange={handleInputChange}/><br></br>

        <label>Role</label>
        <input type='text'
        name='role'
        value={employee.role}
       /><br></br>
        <br></br>
        
           <a href="#" onClick={submitHandler}><span></span>
           <span></span>
           <span></span>Update Employee</a>
           
            
            
    </form>
    </div>
)
}