import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAsset } from '../actions/Asset';
import '../style/EmployeeDetails.css';
import '../style/login.css';

export default function EditAssetForm(props){

    const dispatch= useDispatch();

    const[asset,setAsset] =useState(props.currentAsset)

    const handleInputChange =(event)=>{
        const {name,value}=event.target;

        setAsset({...asset,[name]:value});


    }
    const navigate = useNavigate();
    const [error,setError] = useState(false);
    
    const submitHandler=(event)=>{
        event.preventDefault();
        if(asset.itemName.trim() === '' ||
        asset.serialNum == 0 ||
        asset.serialNum < 0 || asset.status.trim === ''){
            setError(true);
            return;
        }else{
            navigate("/adminController/allAssets")
        }
    
    dispatch(updateAsset(asset.itemNum,asset));
    console.log(asset);
    alert("Asset updated");
    }
    

return(<div class="login-box">
    <form  className="form" onSubmit={submitHandler}>
        {error && <p>Please enter asset details</p>}
        <header><h1>Edit Asset Form</h1></header>


        <label>Item-Name</label>
        <input type='text'
        name='itemName'
        value={asset.itemName}
        onChange={handleInputChange}/><br></br>

        <label>Serial-Number</label>
        <input type='number'
        name='serialNum'
        value={asset.serialNum}
        onChange={handleInputChange}/><br></br>

        <label>Status</label>
        <select name="status"
        id="status"
        value={asset.status}
        onChange={handleInputChange}>
        <option value=" "></option>
         <option value="Allocated">Allocated</option>
        <option value="Returned">Returned</option>
        <option value="Damaged">Damanged</option>
        </select>
        <br></br>

<br></br>
           <a href="#" onClick={submitHandler}><span></span>
           <span></span>
           <span></span>Update Asset</a>
            
            
    </form>
    </div>
)
}