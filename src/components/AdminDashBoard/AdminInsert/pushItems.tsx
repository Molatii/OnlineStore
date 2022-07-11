import db from "../../Config Db/configFile";

export function PushItems(itemName:any,price:any,category:any) { 
  //add item data to db
  db.collection("Clothens").add({
    itemName:itemName,
    itemPrice:price,
    itemCategory: category
  }).then((docRef) => {
    //show alert then refresh page
    alert("Item Added!");  
    window.location.reload();
  })
  .catch((error:any) => {
    //if there are errs show them on console
    console.error("Error adding document: ", error);
  });
}