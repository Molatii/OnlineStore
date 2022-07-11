
import '../../../App.css';
import AdsBanner from '../../AdsBanner/banner';
import CardsFormat from '../../Cards/cardsFormat';
import Footer from '../../footer/footer';
import Nav from '../../navigation/navTab/navigation';
import '../pages.css';
//import ContactUsForm from './contantUsForm';


function ContantUs() {
  const imgTwo = 'https://3l52hj2z36sopy9iv2ypcl2i-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/contact-page-man.png';

    return (
      <div className="App_container">    
      <Nav/><br/>
        <div className='cardtext'>
             <div className="card-group" >
               <CardsFormat> 
                 <h3>Contact Us</h3>
                 <h6 className='details'>Email address</h6>
                 <p className='details'>molatipaballo@gmail.com</p> 
                 <h6 className='details' >Phone Number</h6>
                 <p className='details'>+266 59911982</p> 
                 <h6 className='details'>Address</h6>
                 <p className='details'>P.o.Box 1111,Maseru 100</p> 
               </CardsFormat>
               <CardsFormat> 
                 <img src={imgTwo}  className='userPic' alt="UserIcon"/>
               </CardsFormat>
             </div>      
         </div>
        <AdsBanner/>
      <Footer/>
     </div>
    );
  }
  export default ContantUs;