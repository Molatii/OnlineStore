import { Container, Navbar} from 'react-bootstrap';
import NavButton from '../navButton/navButton';
import Mylogo from '../../../icons/logo.png';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiShirtLine } from "react-icons/ri";
import {RiLogoutBoxRFill } from "react-icons/ri";
import {AiOutlineShoppingCart } from "react-icons/ai";
import {AiOutlineMenuFold } from "react-icons/ai";
import '../../../../src/App.css';
import { Link } from 'react-router-dom';
import './navTab.css';

function Nav() {
  //props name for Nav button
  const NavButtonName = 'Log out ';

  return (
  <div className="App_container"> 
       <Navbar  className='nav-container' variant="light">
        <Container>
        <Navbar.Brand className="LogoAndText">   <h3><img src={Mylogo} alt='logo'/>Alister Clothing</h3></Navbar.Brand>
          <div className="Nav-text">
              <h5  className="h-text">
                <Link to='/Home' className="link">
                  <AiOutlineHome/>Home
                </Link>  
              </h5>
              <h5 className="h-text">
                <Link to='/Orders' className="link">
                    <AiOutlineShoppingCart/>Orders
                </Link>
              </h5> 
              <h5 className="h-text">
                <Link to='/Clothing' className="link">
                  <RiShirtLine/>Clothing
                </Link>
              </h5>
              <h5 className="h-text">
                <Link to='/UserProfile' className="link">
                  <BsPerson/>Profile
                </Link>
              </h5>      
              <h5 className="h-text">              
                <Link to='/' className="link">
                  <NavButton><h5 className='logout'>{NavButtonName}<RiLogoutBoxRFill/></h5></NavButton>
                </Link>              
              </h5>                      
          </div>
      </Container>
    </Navbar>
  </div>
  );
}
export default Nav;