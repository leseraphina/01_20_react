import { Link } from 'react-router-dom';
import './Header.css';
function Header(){
  return (
   <header>
     <div>
       <h1>
         <Link to="/">LOGO</Link>
       </h1>
       <nav>
         <ul>
           <li>
             <Link to="/sample01">sample01</Link>
             <ul>
               <li><Link to="sample01/sub01">sub1</Link></li>
               <li><Link to="sample01/sub02">sub2</Link></li>
             </ul>
           </li>
           <li>
             <Link to="/sample02">sample02</Link></li>
           <li>
            <Link to="/sample03">sample03</Link>
             </li>
         </ul>
       </nav>
     </div>
   </header>
  );
}
export default Header;