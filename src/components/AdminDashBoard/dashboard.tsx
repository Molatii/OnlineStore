import { Link } from 'react-router-dom';
import CardsFormat from '../Cards/cardsFormat';
import Footer from '../footer/footer';
import '../../App.css';
import Nav from '../navigation/navTab/navigation';
import ItemsParent from '../Cards/ItemsData/ItemsParent';

function AdminArea() {
   //props data
   const titleone = 'Insert Items';
   const imgOne = 'https://www.bloss.co.za/wp-content/uploads/2019/09/BA5D91C3-5086-4C21-98D7-A01390131F2C.jpeg';
   const titleTwo = 'Update Items';
   const imgTwo = 'https://media.istockphoto.com/photos/catwalk-runway-show-event-picture-id940236760?k=20&m=940236760&s=612x612&w=0&h=zjH-xABXaEepsYLi0Gq8gekCLE6ZJ3rhi56MG84MbxI=';

  return (
    <div className="App_container">        
      <Nav/><br/>  
        <div className='cardtext'>
            <div className="card-group" >
               <CardsFormat> 
                  <Link to='/InsertData' className="link">
                    <h5 className="card_title">{titleone}</h5>  
                    <img src={imgOne}  className='cardImg' alt="Womans-Wear"/>
                  </Link>
                </CardsFormat>
                <CardsFormat>
                  <Link to='/UpdateData' className="link">
                    <h5 className="card_title">{titleTwo}</h5>  
                    <img src={imgTwo}  className='cardImg' alt="Womans-Wear"/>
                  </Link>
                </CardsFormat>
            </div> 
          <ItemsParent/> 
        </div>      
      <Footer/>
    </div>
  );
}
export default AdminArea;
