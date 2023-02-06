import '../style/EmployeeDetails.css';

function AssetDetails(props){

    const asset = props.asset;
    


    return(<div>
    <fieldset>
    <header><h2>Asset Details</h2></header>
    <table border='2'>
        <thead>
            <tr>
                
                <th>Item_Name</th>
                <th>Item_Number</th>
                <th>Serial_Number</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        {props.asset?.length>0?(
            props.asset.map((asset)=>(
                <tr key={asset.itemNum}>
                     <td>{asset.itemName}</td>
                      <td>{asset.itemNum}</td>
                       <td>{asset.serialNum}</td> 
                       <td>{asset.status}</td>
                </tr>
                ))):(
                    <tr> 
                    <td colSpan={4}>No Asset</td>
                    </tr>
                    )}
                    </tbody>
                     </table>
                     </fieldset>
    </div>
    )
}
export default AssetDetails;