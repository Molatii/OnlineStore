import AdsBanner from '../../AdsBanner/banner';
import Footer from '../../footer/footer';
import Nav from '../../navigation/navTab/navigation';
import '../../../App.css';
import '../pages.css';
import ItemsParent from '../../Cards/ItemsData/ItemsParent';

function MansWear() {

    return (
      <div className="App_container">        
        <Nav/><br/>  
          <div className='cardtext'>            
              <ItemsParent/>
             </div>           
           <AdsBanner/>
         <Footer/>
      </div>
    );
  }
  export default  MansWear;