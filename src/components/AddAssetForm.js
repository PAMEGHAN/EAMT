import e from "cors";
import React,{useState,} from "react";
import { useDispatch } from "react-redux";
import { addAsset } from "../actions/Asset";
import '../style/AddAssetForm.css';
import { useNavigate } from "react-router-dom";


export default function AddAssetForm(){
    const[error,setError]=useState(false);
    const dispatch = useDispatch();

    const initialFormState = {
        itemName:'',
        itemNum:0,
        serialNum:0,
        status:''
    }

    const [asset, setAsset] = useState(initialFormState);

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
       dispatch(addAsset(asset));
        console.log(asset+'from addassetform');
        alert("Asset Added Successfully");
        }

        return(<>

            <form className="form" onSubmit={submitHandler}>
                {error && alert("Please Enter Asset Details")}
              <header><h1>Add Asset Form</h1></header>
                <label>Item-Name</label>
                <input type='text'
                name='itemName'
                value={asset.itemName}
                onChange={handleInputChange}/><br></br>
            
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
            
            
                <button onClick={submitHandler}>Add New Asset</button>
            </form>
            
            </>
            
            )
            
            
            
}
