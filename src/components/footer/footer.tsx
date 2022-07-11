import '../footer/footer.css'
import '../../../src/App.css';
import Mylogo from '../../../src/icons/logo.png';
import fb from '../../icons/fb.png';
import inster from '../../icons/instar.png';
import twitter from '../../icons/twitter.png';
import linkedIn from '../../icons/in.png';
import { MdReadMore } from "react-icons/md";
import { Link } from 'react-router-dom';

function Footer() {
  //year on the footer is updated uptomatically
  const myDate =new Date();
  const currentYear = myDate.getFullYear();
  const company = 'Alister Clothing';

  return (
  <div className="App_container">
   <div className="footer">
    <div className='top-div' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
     <div className='div1'>
       <h6>
         <Link to='/Company' className="link_company">
            <img className='img1' src={Mylogo} alt='logo'/>
             {company }<MdReadMore className='icon'/>
           </Link>
       </h6>
    </div>      
     <div className='div2'>
        <img className='img2' src={fb} alt='logo_fb'/>
          <img className='img3' src={twitter} alt='logo_twitter'/> 
          <img className='img5' src={inster} alt='logo_instarGram'/>
        <img className='img4' src={linkedIn} alt='logo_linkedIn'/>
     </div>
    </div>
    <div className='text-center p-4' style={{ backgroundColor: '#e3f2fd' }}>
        Copyright&copy;Alister~Clothing {currentYear} | Designed by  
       
    </div>
   </div>
  </div>
  );
}
export default Footer;