import {
  ADD_EMPLOYEE,
RETRIEVE_EMPLOYEE,
UPDATE_EMPLOYEE,
UPDATE_EMPLOYEEADDRESSANDPHONENO,
DELETE_EMPLOYEE,
RETRIEVE_EMPLOYEE_BY_ID,
} from "../actions/types";
const initialState = [];
function EmployeeReducer(employees = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_EMPLOYEE:
      return [...employees, payload];
    case RETRIEVE_EMPLOYEE:
      return payload;
    case UPDATE_EMPLOYEE:
      return employees.map((employee) => {
        if (employee.empId === payload.empId) {
          return {
            ...employee,
            ...payload,
          };
        } else {
          return employee;
        }
      });

      case UPDATE_EMPLOYEEADDRESSANDPHONENO:
      return employees.map((employee) => {
        if (employee.empId === payload.empId) {
          return {
            ...employee,
            ...payload,
          };
        } else {
          return employee;
        }
      });

      case RETRIEVE_EMPLOYEE_BY_ID:
      return employees.map((employee) => {
        if (employee.empId === payload.empId) {
          return {
            ...employee,
            ...payload,
          };
        } else {
          return employee;
        }
      });

    case DELETE_EMPLOYEE:
      return employees.filter((id ) => id !== payload.empId);
    
    default:
      return employees;

      
  }
};


export default EmployeeReducer;