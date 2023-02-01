import './App.css';import LoginForm from './components/LoginForm';
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import AdminController from './controller/AdminController';
import AddEmployeeForm from './components/AddEmployeeForm';
import AddAssetForm from './components/AddAssetForm';
import EmployeeList from './components/EmployeeList';
import AssetList from './components/AssetList';
import { useState,useEffect } from 'react';
import apiClient from './api/http-common';
import EditEmployeeForm from './components/EditEmployeeForm';
import EditAssetForm from './components/EditAssetForm';
import EditAddAndPh from './components/EditAddAndPh';
function App(){
 const [employees,setEmployees] = useState([]);
  useEffect(()=>{apiClient.get('/view-allemployees').then((response)=>{
    setEmployees(response.data);})},[]);
    const [assets,setAssets]=useState([]);
     useEffect(()=>{apiClient.get('/retrive_AllAssets').then((response)=>{
      setAssets(response.data);
     })},[]);
      const [currentEmployee,setCurrentEmployee]=useState('');
      const [currentAsset,setCurrentAsset]=useState('');

    const [employeeDetails,setEmployeeDetails] = useState('');

      const routes = createRoutesFromElements(
         <Route>
            <Route path ='/'element={<LoginForm/>}/>
             <Route path = '/adminController'element={<AdminController setEmployeeDetails= {setEmployeeDetails}/>}/>
              <Route path='/adminController/addEmployee'element={<AddEmployeeForm/>}/>
               <Route path = '/adminController/addAsset'element={<AddAssetForm/>}/>
               <Route path = '/adminController/allEmployees'element={<EmployeeList employees = {employees} setCurrentEmployee={setCurrentEmployee}/>}/>
               <Route path = '/adminController/editEmployees'element={<EditEmployeeForm currentEmployee= {currentEmployee}/>}/>
                <Route path = '/adminController/allAssets'element={<AssetList assets = {assets} setCurrentAsset={setCurrentAsset}/>}/>
                 <Route path = '/adminController/editAssets'element={<EditAssetForm currentAsset= {currentAsset}/>}/>
                 <Route path='/update_EmployeeAddressAndPhoneNo' element={<EditAddAndPh employeeDetails = {employeeDetails}/>}/>
                 </Route>
                  )
                   const router = createBrowserRouter(routes);
                   return(
                   <div>
                    <RouterProvider router={router}/></div>
                    
                     );
}
export default App;