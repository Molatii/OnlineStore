import '../../../App.css';
import '../pages.css';
import AdsBanner from '../../AdsBanner/banner';
import CardsFormat from '../../Cards/cardsFormat';
import Footer from '../../footer/footer';
import Nav from '../../navigation/navTab/navigation';
import { Link } from 'react-router-dom';
import orderPic from '../../../icons/order2.png';
import db from '../../Config Db/configFile';
import {useEffect, useState } from 'react';

function Orders() {
  //count for list
  let count = 1;
  //props data
   const titleTwo = 'Your orders';
   const [loading, setLoading] = useState(true);
   const [orders, setOrders] = useState<any>([]);

   //use effect gets data from db/firebase
  useEffect(() => {  
    const getPostsFromFirebase : any[] = [];
    const subscriber = db.collection('Orders').onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        getPostsFromFirebase.push({
          ...doc.data(),
          key:doc.id,
        });
      });
      //copy getPostsFromFirebase arr data to posts
      setOrders(getPostsFromFirebase);
      //we have data,now we set loading to false
      setLoading(false);
    });
    return()=> subscriber();  
  },[loading]);

  //inform user about system status
  if(loading===true){
     return <h6>Loading Items Plaese Wait...</h6>
  }
 
  return (
    <div className="App_container">        
               <Nav/><br/>  
          <div className='cardtext'>
            <div className="card-group" >
              <CardsFormat> 
                  <Link to='/AboutUs' className="link">
                    <img src={orderPic}  className='cardImg' alt="Womans-Wear"/>
                  </Link>
                </CardsFormat>              
                 <CardsFormat>   
                   <h2>{titleTwo}</h2>         
                    {
                     orders.map((order:any)=>
                      <div className='itemsDiv' key={order.key}>
                        <p>{count++} {order.itemName} {order.itemPrice} {order.itemCategory}</p>
                      </div> 
                    )}
                 </CardsFormat>               
             </div> 
            </div>
           <AdsBanner/>
         <Footer/>
    </div>
  );
}
export default Orders;
