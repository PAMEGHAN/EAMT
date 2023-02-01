import http from "../api/http-common";


const getAll = () => {
    return http.get("/view_allEmployee");
};

const get = (empId) => {
    return http.get(`/employee/${empId}`);
};

const create = data => {
    return http.post("/add_Employee",data);
};

const update = (id,data) => {
    return http.put(`/updateEmpName/${id}`,data);
};

const updateAddress = (id,data) =>{
    return http.put(`/update_EmployeeAddressAndPhoneNo/${id}`,data);
};

const remove = (id) =>{
    return http.delete(`/delete-Employee/${id}`);

};

const viewEmployeeById = (id) => {
  return http.get(`/view_employeeById/${id}`);
}

const EmployeeService = {
    getAll,
    get,
    create,
    update,
    updateAddress,
    remove,
    viewEmployeeById,
};

export default EmployeeService;