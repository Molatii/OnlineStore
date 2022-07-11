import { Card } from 'react-bootstrap';
import '../../components/WelcomePage/WelcomePage.css';

function CardsContainer(props:any) {  
  return (
     <div>
        <Card className="text-center border-0">
         <Card.Header><h3 className="card_title">{props.header}</h3></Card.Header>
             <Card.Body>
                 {props.children}
             </Card.Body>
        </Card>
     </div>
  );
}
export default CardsContainer; 