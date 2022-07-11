import Items from "./items";
import { useState } from 'react';
import SeletedItem from "../../Config Items/selectedItem";
import {ItemUseContext} from '../../AppUseContext/itemUse_Context';

function ItemsParent() {
  //data to be passed Around siblings
  const [itemName, setItemName] = useState(null);
  const [itemPrice, setItemPrice] = useState(null);
  const [itemCategory, setItemCategory] = useState(null);
  //which sibling should be loaded first
  const [orderState, SetOrderState] = useState("Items"); 
  return (
    <>
       <ItemUseContext.Provider value={{itemName, setItemName,itemPrice,orderState,
          SetOrderState,setItemPrice,itemCategory, setItemCategory}}>
            {orderState === "ConfirmItems" && <SeletedItem/>}
            {orderState === "Items" && <Items/>}
       </ItemUseContext.Provider>
    </>);
}
export default ItemsParent;
  