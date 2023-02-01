import{
  ADD_EMPLOYEE,
  RETRIEVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  UPDATE_EMPLOYEEADDRESSANDPHONENO,
  DELETE_EMPLOYEE,
  RETRIEVE_EMPLOYEE_BY_ID,
} from './types';

import EmployeeService from '../services/EmployeeService';

export const addEmployee = ({empId,empName,empAddress,contactNo,role}) => 
async (dispatch) => {

  try{
      const res = await EmployeeService.create({ empId,empName,empAddress,contactNo,role});
  dispatch({
    type: ADD_EMPLOYEE,
    payload: res.data,
  });
  return Promise.resolve(res.data);
} catch (err) {
  return Promise.reject(err);
}
};
export const retrieveEmployees = () => async (dispatch) => {
try {
  const res = await EmployeeService.getAll();
  dispatch({
    type: RETRIEVE_EMPLOYEE,
    payload:res.data,
  });
 

}
catch(err){return Promise.reject(err);}};



export const updateEmployee = (empId,data) => async (dispatch) => {
try {
  const res = await EmployeeService.update(empId,data);
  dispatch({
    type: UPDATE_EMPLOYEE,
    payload: res.data,
  });
  return Promise.resolve(res.data);
} catch (err) {
  return Promise.reject(err);
}
};

export const updateEmpAddressAndPhoneNo = (empId,data) => async (dispatch) => {
  try {
    const res = await EmployeeService.updateAddress(empId,data);
    dispatch({
      type: UPDATE_EMPLOYEEADDRESSANDPHONENO,
      payload: res.data
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
  };

export const  deleteEmployee = (empId) => async (dispatch) => {
try {
  await EmployeeService.remove(empId);
  dispatch({
    type: DELETE_EMPLOYEE,
    payload: { empId },
  });
} catch (err) {
  console.log(err);
}
};
export const  retrieveEmployeeById = (empId) => async (dispatch) => {
try {
  const response = await EmployeeService.viewEmployeeById(empId);
  dispatch({
    type: RETRIEVE_EMPLOYEE_BY_ID,
    payload: response.data,
  });
} catch (err) {
  console.log(err);
}
};

