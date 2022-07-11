import { Link } from 'react-router-dom';
import '../../components/WelcomePage/WelcomePage.css';
import CardsFormat from './cardsFormat';

function Categories() {
  //props data
  const titleone = 'Woman`s Ware';
  const imgOne = 'https://media.istockphoto.com/photos/catwalk-runway-show-event-picture-id940236760?k=20&m=940236760&s=612x612&w=0&h=zjH-xABXaEepsYLi0Gq8gekCLE6ZJ3rhi56MG84MbxI=';
  const titleTwo = 'Men`s Wear';
  const imgTwo = 'https://www.bloss.co.za/wp-content/uploads/2019/09/BA5D91C3-5086-4C21-98D7-A01390131F2C.jpeg';

  return (
    <div className="card-group" >
       <CardsFormat> 
          <Link to='/Woman' className="link">
           <h5 className="card_title">{titleone}</h5>  
           <img src={imgOne}  className='cardImg' alt="Womans-Wear"/>
          </Link>
         </CardsFormat>
         <CardsFormat>
          <Link to='/Man' className="link">
            <h5 className="card_title">{titleTwo}</h5>  
            <img src={imgTwo}  className='cardImg' alt="man"/>
          </Link>
        </CardsFormat>
    </div>
  );
}
export default Categories;
