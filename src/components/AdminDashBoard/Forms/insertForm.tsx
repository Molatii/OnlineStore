import '../../../App.css';
import { useState } from 'react';
import SubmitButton from '../../SubmitButton/submitButton';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import RegisterUseStyle from '../../UI_UseStyles/RegisterUseStyle';
import { PushItems } from '../AdminInsert/pushItems';

function InsertForm() {
     //use import styles from function ResUseStyles()
     let {ResUseStyles} = RegisterUseStyle();
     const classes = ResUseStyles();
  
    //props name for button
    const insertButtonName = 'Insert Item';

    //validate textfields
    const [itemName,SetItemName] = useState('');
    const [price,SetPrice] = useState('');
    const [category,SetCategory] = useState('');

    const [itemNameErr,SetItemNameErr] = useState(false);
    const [priceErr,SetPriceErr] = useState(false);
    const [categoryErr,SetCategoryErr] = useState(false);

    //handle Submit
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        SetPriceErr(false);
        SetCategoryErr(false); 
        SetItemNameErr(false);
        
        if(itemName && price && category){                        
           //call function to insert item firebase to db collection
           PushItems(itemName,price,category);
        }            
        else{
            //check fields errors
            if(itemName === ''){SetItemNameErr(true);}
            if( price  === ''){SetPriceErr(true);}
            if(category === ''){SetCategoryErr(true);}
        }
    }  
  return (
     <div>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>               
           <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField onChange={(e) =>SetItemName(e.target.value)}
                    variant="outlined"required fullWidth id="email" label="Item Name"
                    name="text" error={itemNameErr}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField  onChange={(e) =>SetPrice(e.target.value) }
                    variant="outlined" required fullWidth name="price" label="Item Price"
                    type="numeric" id="price"  error={priceErr}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField  onChange={(e) =>SetCategory(e.target.value) }
                    variant="outlined" required fullWidth name="category" label="Item Category"
                    type="text" id="category" error={categoryErr}/>
                </Grid>
            </Grid>
             <br/>
             <SubmitButton className={classes.submit}>
                  {insertButtonName}
             </SubmitButton>            
            </form>
        </div>
  );
}
export default InsertForm;     