import '../../App.css';
import '../../components/WelcomePage/WelcomePage.css';
import { useContext } from 'react';
import { ItemUseContext } from '../AppUseContext/itemUse_Context';
import AddItem from './addItemToOrders';
import Container from '@material-ui/core/Container';
import RegisterUseStyle from '../UI_UseStyles/RegisterUseStyle';

function SeletedItem () {
  //access usecontext data    
  const {itemName} = useContext(ItemUseContext);
  const {itemPrice} = useContext(ItemUseContext);
  const {itemCategory} = useContext(ItemUseContext);
  const {SetOrderState} = useContext(ItemUseContext);
  //button prop data
  const buttonName = 'Confirm Order';
  const buttonName2 = 'Chancel Order'
  //use import styles from function ResUseStyles()
  let {ResUseStyles} = RegisterUseStyle();
  const classes = ResUseStyles();
  //chancel order on button click
  const chancel = ()=>{
  SetOrderState('Items');
  }
  //called store function calls addItem fuction
  //functions take three arguments
  const store = ()=>{
    AddItem(itemName,itemPrice,itemCategory);
    alert("Item Added To Orders");
    SetOrderState('Items');
  }

  return(
    <div className="App_container">     
       <div className="signIn_cotainer">  
        <Container component="main" maxWidth="xs">
          <div className='orderCon'> 
            <div className={classes.paper}>
                <h3>Order Confirmation</h3>
                <h6>Item Name: {itemName}</h6>
                <h6>Item Price: {itemPrice}</h6>
                <h6>Item Category: {itemCategory}</h6>             
            </div> 
              <div className='btns'>      
                <button className='mybtn2' onClick={chancel}>{buttonName2}</button>
                <button className='mybtn' onClick={store}>{buttonName}</button><br/>
              </div>  
            </div>
          </Container> 
         </div>  
     </div>  
   );
}
export default  SeletedItem
