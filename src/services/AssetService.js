import http from "../api/http-common";


const getAll = () => {
    return http.get("/assets");
};

const get = (id) => {
    return http.get(`/assets/${id}`);
};



const create = data => {
    return http.post("/add_Asset",data);
};

const update = (id,data) => {
    return http.put(`/update_AllAsset/${id}`,data);
};

const remove = id =>{
    return http.delete(`/deleteAsset/${id}`);

};

const AssetService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default AssetService;