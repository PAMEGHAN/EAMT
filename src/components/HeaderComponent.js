import { Button } from 'react-bootstrap';
import  { Link } from 'react-router-dom';
import './Header.css';
import { useNavigate } from 'react-router-dom';


function HeaderComponent() {

    const navigate= useNavigate();
  const clickHandler=async()=>{
    localStorage.removeItem('adminLogin');
    localStorage.removeItem('employeeId');
    navigate('/');
  }

     return (<>
         <header className='header'>
         <h1>
         </h1>
         <nav>
          <ul>
            <li>
              <input type="button" value="Home" onClick={clickHandler}/>
            </li>
            <li>
              <input type="button" value="Logout" onClick={clickHandler}/>
            </li>
          </ul>
         </nav>
           </header>
           </>
 );}
 export default HeaderComponent;