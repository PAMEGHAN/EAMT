import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../actions/Employee';
import '../style/EmployeeList.css';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Button.css';

export default function EmployeeList(props){

   const dispatch = useDispatch();

   const navigate = useNavigate();
   
    const clickHandler=()=>{
       navigate('/adminController');
    }
   const editHandler = (employee) => {
     props.setCurrentEmployee(employee);
    }
     return(< div className="container">
      <h2>Employee List</h2>
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
             {props.employees?.length>0?(
             props.employees.map((employee)=>(
             <tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.empName}</td>
               <td>{employee.empAddress}</td>
               <td>{employee.contactNo}</td>
               <td>{employee.role}</td>
               <td>
                <button onClick = {()=>editHandler(employee)}>
                <Link to ='/adminController/editEmployees'>Edit</Link>
                </button></td>
                <td>
                  <button onClick={()=>dispatch(deleteEmployee(employee.empId))}>Delete</button>
                </td>
                 </tr>
                 ))):( 
                 <tr> 
                  <td colSpan={4}>No Employee</td>
                  </tr>
                  )}</tbody>
                 </table>
                 <form>
                  <h3 className="d-1" onClick={clickHandler}>Go Back</h3>
                
</form>
                 </div>
)}