import { Button } from 'react-bootstrap';
import '../../../App.css';

function NavButton(props:any) {

  return (
  <div className="App_container">
     <Button variant="primary">{props.children}</Button>
  </div>
  );
}
export default NavButton;