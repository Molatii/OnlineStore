import '../../App.css';
import '../AdsBanner/ads.css';
import '../WelcomePage/WelcomePage.css';
import AdsBanner from '../AdsBanner/banner';
import Nav from '../navigation/navTab/navigation';
import Footer from '../footer/footer';
import CardsDisplay from '../Cards/cardsDisplay';

function Welcome() {
  return (
      <div className="App_container"> 
        <Nav/>
          <div className='banner/Poster_container'>
            <AdsBanner/>
          </div> 
          <CardsDisplay/>     
        <Footer/>
      </div>
  );
}
export default Welcome;
