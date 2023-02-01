import '../style/AdminController.css';
import { Link } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import { useEffect } from 'react';
import { useState } from 'react';
import EmployeeDetails from '../components/EmployeeDetails';
import { useDispatch } from 'react-redux';
import { retrieveEmployeeById } from '../actions/Employee';
import apiClient from '../api/http-common';


function AdminController(props) {
     
    const adminLogin = localStorage.getItem('adminLogin');
    const[admin,setAdmin]=useState(false);

    useEffect(()=>{
        if(adminLogin === 'admin'){
            setAdmin(true);
        }
    },[]);

    const  dispatch = useDispatch();

    const employeeId = localStorage.getItem('employeeId');
    console.log(employeeId);

    const [employee,setEmployee] = useState('');
    
    useEffect(()=>{apiClient.get(`/view_employeeById/${employeeId}`).then((response)=>{
         setEmployee(response.data);
         props.setEmployeeDetails(response.data);
         })},[]);
    

    return(
        
        <div className='style'>
        <EmployeeDetails employee ={employee}/>
            
             <HeaderComponent>Employee Asset Management</HeaderComponent>

    {admin && 
         <div>
       
        <Link to ="/adminController/addEmployee">
            <h2>Add Employee</h2></Link>
        <Link to = "/adminController/addAsset">
            <h2>Add Asset</h2></Link>
        <Link to ="/adminController/allEmployees">
            <h2>Employee List</h2></Link> 
         <Link to="/adminController/allAssets">
            <h2>Asset List</h2></Link>
                </div>
    }
    
    </div>
  )
    }

    


export default AdminController;