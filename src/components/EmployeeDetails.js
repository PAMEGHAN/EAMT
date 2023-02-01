import React,{ useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateEmpAddressAndPhoneNo } from '../actions/Employee';
import { Link } from 'react-router-dom';


export default function EmployeeDetails(props){
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
    dispatch(updateEmpAddressAndPhoneNo(employeeId,employee));
}
const editHandler = (employee) => {
    props.setCurrentAsset(employee);
    }

return(<>
    <form  className="form" >
        
        <header><h1>Employee Details</h1></header>
     
        <label>Employee_Id</label>
        <input type='number'
        name='empId'
        value={props.employee.empId}
       /><br></br>

      <label>Employee_Name</label>
        <input type='text'
        name='empName'
        value={props.employee.empName}
       /><br></br>

        <label>Employee_Address</label>
        <input type='text'
        name='empAddress'
        value={props.employee.empAddress}
        /><br></br>


        <label>Phone_Number</label>
        <input type='number'
        name='contactNo'
        value={props.employee.contactNo}
        /><br></br>

        <label>Role</label>
        <input type='text'
        name='role'
        value={props.employee.role}
       /><br></br>
            <br></br>
            
    </form>
    <button onClick = {()=>editHandler(employee)}>
        <Link to = '/update_EmployeeAddressAndPhoneNo'>Edit</Link>
        </button>
    </>
)
}


