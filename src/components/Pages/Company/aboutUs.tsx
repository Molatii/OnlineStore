
import '../../../App.css';
import AdsBanner from '../../AdsBanner/banner';
import CardsFormat from '../../Cards/cardsFormat';
import Footer from '../../footer/footer';
import Nav from '../../navigation/navTab/navigation';
import '../pages.css';


function AboutUs() {
  const imgOne = 'https://cdn1.careeraddict.com/uploads/article/58721/illustration-group-people-team-meeting.jpg';

    return (
      <div className="App_container">    
      <Nav/><br/>
        <div className='cardtext'>
             <div className="card-group" >
               <CardsFormat> 
                 <img src={imgOne}  className='userPic' alt="UserIcon"/>
               </CardsFormat>
               <CardsFormat> 
                 <h3>Who We are</h3>
                 <p className="userDetails">
                     Alister Clothing is a company with an aim of providing quality
                      clothes to all Basotho as most stores sell fake/low quality clothes in the country.
                      The comapny also support local brands as we believe by selling or providing a market for
                       local brands that plays a huge role by reducing unemployement in the country.
                     <br/>
                     Alister Clothing was fonded in 2020 by 
                      <a href='https://ls.linkedin.com/in/paballo-molati-075313220' className='ceo'> Eric Molati</a>.
                      Today we are proud that 
                     AC(Alister Clothing) is one of the biggest company in the country. we have more than
                    11 stores in Lesotho, we aspire to exel in service-to our customers and suppliers.  
                 </p>
               </CardsFormat>
             </div>      
         </div>
        <AdsBanner/>
      <Footer/>
     </div>
    );
  }
  export default AboutUs;