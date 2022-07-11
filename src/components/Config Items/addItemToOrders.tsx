import db from "../Config Db/configFile";

function AddhItem(itemName:any,itemPrice:any,itemCategory:any) {  
  //add item data to orders collectioon in db
    db.collection("Orders").add({
      itemName:itemName,
      itemPrice: itemPrice,
      itemCategory: itemCategory
    }).then((docRef) => {
      //show infor on console
      console.log('Item stored : '+itemName,itemPrice,itemCategory)
    })
    .catch((error:any) => {
      //if there are errs show them on console
      console.error("Error adding document: ", error);
    });
  }
  export default  AddhItem;