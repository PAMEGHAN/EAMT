import React,{ useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateEmployee } from '../actions/Employee';


export default function EditEmployeeForm(props){
    const dispatch=useDispatch();

    const[employee,setEmployee] =useState(props.currentEmployee)

    const handleInputChange =(event)=>{
        const {name,value}=event.target;

        setEmployee({...employee,[name]:value});

    }
    const navigate = useNavigate();
    const [error,setError] = useState(false);

    const submitHandler=(event)=>{
        event.preventDefault();
        if(employee.empId == 0 ||
            employee.empId < 0 || 
            employee.empName.trim() === ''){
                setError(true);
                return;
            }
            else{
                navigate("/adminController/allEmployees")
            }
    dispatch(updateEmployee(employee.empId,employee));
    alert("Employee Name updated");
}

return(
    <form  className="form" onSubmit={submitHandler}>
        {error && <p>Please enter empoyee details</p>}
        <header><h1>Edit Employee Form</h1></header>
         
        <label>Employee-Id</label>
        <input type='number'
        name='empId'
        value={employee.empId}
        onChange={handleInputChange}/><br></br>


        <label>Employee-Name</label>
        <input type='text'
        name='empName'
        value={employee.empName}
        onChange={handleInputChange}/><br></br>

        
           <button onClick={submitHandler}>Update Employee</button>
            <button className="button muted-button">Cancel</button>
            <br></br>

            
    </form>
)
}