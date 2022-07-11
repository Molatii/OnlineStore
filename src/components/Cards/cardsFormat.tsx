import '../../components/WelcomePage/WelcomePage.css';

function CardsFormat(props:any) {
  return (
        <div className="card border-0">  
         <div className="card-body">
            {props.children}
         </div>
        </div>  
  );
}
export default CardsFormat; 