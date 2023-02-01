import AssetReducer from './AssetReducer';
import EmployeeReducer from './EmployeeReducers';

const employeeReducer = () => {
    return EmployeeReducer;
}
const assetReducer = () => {
    return AssetReducer;
}
function Reducers () {
     return(
        employeeReducer,
         assetReducer
         )
        }export default Reducers;