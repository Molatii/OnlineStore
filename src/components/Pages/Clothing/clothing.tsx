import AdsBanner from '../../AdsBanner/banner';
import CardsFormat from '../../Cards/cardsFormat';
import Footer from '../../footer/footer';
import Nav from '../../navigation/navTab/navigation';
import { MdReadMore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../../../App.css';
import '../pages.css';

function Clothing() {
   //props data
   const titleone = 'Man clothes ';
   const imgOne = 'https://www.bloss.co.za/wp-content/uploads/2019/09/BA5D91C3-5086-4C21-98D7-A01390131F2C.jpeg';
   const titleTwo = 'Woman clothes ';
  const imgTwo = 'https://media.istockphoto.com/photos/catwalk-runway-show-event-picture-id940236760?k=20&m=940236760&s=612x612&w=0&h=zjH-xABXaEepsYLi0Gq8gekCLE6ZJ3rhi56MG84MbxI=';

    return (
      <div className="App_container">        
                <Nav/><br/>  
          <div className='cardtext'>
            <div className="card-group">
              <CardsFormat> 
                  <Link to='/Man' className="link">
                    <h5 className="card_title">{titleone}<MdReadMore className='icon'/></h5>  
                    <img src={imgOne}  className='cardImg' alt="Womans-Wear"/>
                  </Link>
                </CardsFormat>
                <CardsFormat>
                  <Link to='/Woman' className="link">
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
  export default Clothing;