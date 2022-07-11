import '../../../App.css';
import '../pages.css';
import AdsBanner from '../../AdsBanner/banner';
import CardsFormat from '../../Cards/cardsFormat';
import Footer from '../../footer/footer';
import Nav from '../../navigation/navTab/navigation';
import { MdReadMore } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Company() {
     //props data
     const titleone = 'About Us ';
     const imgOne = 'https://cdn1.careeraddict.com/uploads/article/58721/illustration-group-people-team-meeting.jpg';
     const titleTwo = 'Contant Us ';
    const imgTwo = 'https://3l52hj2z36sopy9iv2ypcl2i-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/contact-page-man.png';
    return (
      <div className="App_container">        
         <Nav/><br/>  
          <div className='cardtext'>
            <div className="card-group" >
              <CardsFormat> 
                  <Link to='/AboutUs' className="link">
                    <h5 className="card_title">{titleone}<MdReadMore className='icon'/></h5>  
                    <img src={imgOne}  className='cardImg' alt="Womans-Wear"/>
                  </Link>
                </CardsFormat>
                <CardsFormat>
                  <Link to='/ContantUs' className="link">
                    <h5 className="card_title">{titleTwo}<MdReadMore className='icon'/></h5>  
                    <img src={imgTwo}  className='cardImg' alt="Womans-Wear"/>
                  </Link>
               </CardsFormat>
             </div> 
            </div>
           <AdsBanner/>
         <Footer/>
      </div>
    );
  }
  export default Company;