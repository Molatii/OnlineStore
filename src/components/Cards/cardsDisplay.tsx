import '../../components/WelcomePage/WelcomePage.css';
import Categories from "./categories";
import { Card } from "react-bootstrap";
import CardsContainer from "./cardsContainer";
import ItemsParent from "./ItemsData/ItemsParent";

function CardBody() {
    //props data
    const itemsTitle = 'All Items!';
    const categoriesTitle = 'Categories';
    return (
      <div> 
        <CardsContainer>
          <Card.Header><h3 className="card_title">{itemsTitle}</h3></Card.Header>
            <ItemsParent/>
        </CardsContainer>
        <CardsContainer>
          <Card.Header><h3 className="card_title">{categoriesTitle}</h3></Card.Header>
            <Categories/><br/>
        </CardsContainer> 
      </div>
    );
  }
  export default CardBody;