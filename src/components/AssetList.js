import { useDispatch } from 'react-redux';
import { deleteAsset } from '../actions/Asset';
import '../style/AssetList.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AssetList(props){

     const dispatch = useDispatch();
     const navigate= useNavigate();

     const clickHandler=()=>{
        navigate('/adminController');
     }

     const editHandler = (asset) => {
         props.setCurrentAsset(asset);
         }
        
          return(<>
          <table border='2'>
            <thead><tr>
                 <th>Item-Name</th>
                 <th>Item-Number</th>
                  <th>Serial-Number</th>
                   <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {props.assets?.length>0?(
            props.assets.map((asset)=>(
                <tr key={asset.itemNum}>
                     <td>{asset.itemName}</td>
                      <td>{asset.itemNum}</td>
                       <td>{asset.serialNum}</td> 
                       <td>{asset.status}</td>
                       <td><button onClick = {()=>editHandler(asset)}>
                        <Link to = '/adminController/editAssets'>Edit</Link>
                        </button></td>
                <td><button onClick={()=>dispatch(deleteAsset(asset.itemNum))}>Delete</button>
                </td>
                </tr>
                ))):(
                    <tr> 
                    <td colSpan={4}>No Asset</td>
                    </tr>
                    )}
                    </tbody>
                     </table>
        <form>
        <input type="button" value="Go back!" onClick={clickHandler} />
       </form>
       </>
)}