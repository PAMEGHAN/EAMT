
import './Header.css';
import { useNavigate } from 'react-router-dom';
import '../style/logout.css';



function HeaderComponent() {

    const navigate= useNavigate();
  const clickHandler=async()=>{
    localStorage.removeItem('adminLogin');
    localStorage.removeItem('employeeId');
    navigate('/');
  }
  
 
  

     return (<div className="body" >
         <header  className="header">
         <ul>
          <li>
          <h1>  </h1>
          </li>
           <li>
              <input type="button" value="Home" className="logout" onClick={clickHandler}/>
              </li>
              <li>
              <input type="button" value="Logout" className="logout" onClick={clickHandler}/>
              </li>
              
          </ul>
         
           </header>
           </div>
 );}
 export default HeaderComponent;