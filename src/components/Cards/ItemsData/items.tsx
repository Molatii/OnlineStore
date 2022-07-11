import '../../../components/WelcomePage/WelcomePage.css';
import NavButton from '../../navigation/navButton/navButton';
import CardFormat from '../cardsFormat';
import db from '../../Config Db/configFile';
import {useContext, useEffect, useState } from 'react';
import { ItemUseContext } from '../../AppUseContext/itemUse_Context';

function Items() {
  //props data
  const buttonName='view More';
  const imgTwo = 'https://www.bloss.co.za/wp-content/uploads/2019/09/BA5D91C3-5086-4C21-98D7-A01390131F2C.jpeg';
  const [loading, setLoading] = useState(true);
  const [myitems, setMyItems] = useState<any>([]);

  //access usecontext data  
  const {setItemName} = useContext(ItemUseContext);
  const {setItemPrice }= useContext(ItemUseContext);
  const {setItemCategory} =useContext(ItemUseContext);
  const {SetOrderState} = useContext(ItemUseContext);

  //use effect gets data from db/firebase
  useEffect(() => {  
    const getPostsFromFirebase : any[] = [];
    const subscriber = db.collection('Clothens').onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        getPostsFromFirebase.push({
          ...doc.data(),
          key:doc.id,
        });
      });
      //copy getPostsFromFirebase arr data to posts
      setMyItems(getPostsFromFirebase);
      //we have data,now we set loading to false
      setLoading(false);
    });
    return()=> subscriber();  
  },[loading]);

  //Alert is shown when button is clicked
  const ShowAlert = ()=>{ 
    alert('Feature still under Development');
  } 
 
  //inform user about system status
  if(loading===true){
     return <h3>Loading Items Plaese Wait...</h3>
  }
  //expect 3 arguments which are set to given usecontext 
  //usecontext then switches to selectedItem sibling
  const PassIData = (value1:any,value2:any,value3:any) => () => {
    setItemName(value1);
    setItemPrice(value2);
    setItemCategory(value3);
    SetOrderState('ConfirmItems');
  };
   
  return (
    <div>
      <div className="card-group">
          {
             myitems.map((item:any)=>
             <div className='itemsDiv' key={item.key}
               onClick={PassIData(item.itemName,item.itemPrice,item.itemCategory)}>
                 <CardFormat>            
                      <h6 className="card_title">{item.itemName} <p>{item.itemPrice}</p></h6>
                      <img src={imgTwo}  className='cardImg' alt="Womans-Wear"/>                      
                </CardFormat>    
             </div> 
             )
          }
        <br/>
       <NavButton ><h6 onClick={ShowAlert}>{buttonName}</h6></NavButton><br/> 
      </div> 
     </div>
  );
}
export default Items;
