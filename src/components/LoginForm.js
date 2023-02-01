import { Card } from "react-bootstrap";
import '../style/login.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import apiClient from '../api/http-common';

export default function LoginForm(props) {
     const [employeeName,setEmployeeName] = useState('');
    const [employeeId,setEmployeeId]=useState('');
     const [error,setError] = useState(false);

     const [success,setSuccess] = useState(false);
      
     const employeeNameChangeHandler = (event) => {
         setEmployeeName(event.target.value);
         }
          const employeeIdChangeHandler = (event) => {
             setEmployeeId(event.target.value);
             } 
             const navigate = useNavigate();

            const submitHandler = async (event) => {
            event.preventDefault();
              if(employeeName.trim() === '' || employeeId == 0 || employeeId < 0){
                  setError(true);
                return;
                     }
                      else{
                         const response = await apiClient.get(`/employee_login/${employeeId}/${employeeName}`);
                         localStorage.setItem('adminLogin',response.data);
                         localStorage.setItem('employeeId',employeeId);
                         navigate("/adminController");
                         }
                         
                        }
    return(<>
                            

                  <form className="form">
                   {error && <p>Please enter valid details</p>}
                        <div> <h1>Employee Asset Management Tool</h1></div>
                              <label>UserId</label>
                                <input type='number' 
                                value = {employeeId} 
                               onChange={employeeIdChangeHandler}/><br></br>
                                 
                                              
                                <label>Password</label>
                                 <input type='password' 
                                  id='empName'               
                                 value={employeeName} 
                                 onChange={employeeNameChangeHandler}/><br></br>
                                                 
                                                  
                              <button onClick={submitHandler}>SignIn</button>   <button>Cancel</button>
                                                    </form></>
                        
                        )
}
