import '../../../App.css';
import '../../Pages/pages.css';
import UserIcon from '../../../icons/user.png';
import AdsBanner from '../../AdsBanner/banner';
import CardsFormat from '../../Cards/cardsFormat';
import Footer from '../../footer/footer';
import Nav from '../../navigation/navTab/navigation';

function Profile() {
  
  return (
    <div className="App_container">    
     <Nav/><br/>
       <div className='cardtext'>
            <div className="card-group" >
              <CardsFormat> 
                <img src={UserIcon}  className='userPic' alt="UserIcon"/>
              </CardsFormat>
              <CardsFormat> 
                <p className="userDetails">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to show
                    that equal height action.
                </p>
              </CardsFormat>
            </div>      
        </div>
       <AdsBanner/>
     <Footer/>
    </div>
  );
}
export default Profile;
