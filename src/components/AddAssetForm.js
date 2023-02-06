import e from "cors";
import React,{useState,} from "react";
import { useDispatch } from "react-redux";
import { addAsset } from "../actions/Asset";
import '../style/AddAssetForm.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import '../style/EmployeeDetails.css';
import '../style/login.css';


export default function AddAssetForm(){
    const[error,setError]=useState(false);
    const dispatch = useDispatch();

    const initialFormState = {
        itemName:'',
        itemNum:0,
        serialNum:0,
        status:'',
        employee:{
            empId:0
        }
    }

    const initialEmployeeFormState={
        empId:0
    }

    const [employee,setEmployee]= useState(initialEmployeeFormState);

    const handleEmpIdChange=(event)=>{
    const {name,value} = event.target;
    setEmployee({...employee,[name]:value});
    setAsset({...asset,...employee});
    }
   console.log(employee);
    const [asset, setAsset] = useState(initialFormState);

    useEffect(()=>{
        setAsset({...asset,employee})
     },[employee])

    const handleInputChange = (event) => {
        const{name,value}= event.target
        setAsset({...asset,[name]:value});
    }
    const navigate= useNavigate();
    

    const submitHandler=(event)=>{event.preventDefault();
     if(asset.itemName.trim() === '' || asset.serialNum == 0 || asset.serialNum < 0 || asset.status === ''){
        setError(true);
        return;
     }
     else{
        navigate("/adminController");
     }
       //props.addAsset(asset);
       console.log(JSON.stringify(asset)+'from addassetform');
       dispatch(addAsset(asset));
        console.log(asset+'from addassetform');
        alert("Asset Added Successfully");
        }

        return(<div className="login-box">

            <form className="form" onSubmit={submitHandler}>
                {error && <p>Please Enter Asset Details</p>}
               
              <header><h1>Add Asset Form</h1></header>
               
              <label>Employee_Id</label>
                <input type='number'
                name='empId'
                value={asset.employee.empId}
                onChange={handleEmpIdChange}/><br></br>

                <label>Item-Name</label>
                <select name="itemName" id="itemName" onChange={handleInputChange}>
                    <option value=" "></option>
                    <option value="Mouse">Mouse</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Charger">Charger</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Bag">Bag</option>
                    </select><br></br>
            
                <label>Serial-Num</label>
                <input type='number'
                name='serialNum'
                value={asset.serialNum}
                onChange={handleInputChange}/><br></br>
            
                <label>Status</label>
                <select name="status" id="status" onChange={handleInputChange}>
                    <option value=" "></option>
                    <option value="Allocated">Allocated</option>
                    <option value="Returned">Returned</option>
                    <option value="Damaged">Damanged</option>
                    </select>
                    <br></br>
            
            
                <a href="#" onClick={submitHandler}><span></span>
                <span></span>
                <span></span>Add New Asset</a>
    
            </form>
            
            </div>
            
            )
            
            
            
}
