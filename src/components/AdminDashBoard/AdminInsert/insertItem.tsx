import '../admin.css'
import '../../../App.css';
import InsertForm from '../Forms/insertForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Nav from '../../navigation/navTab/navigation';
import RegisterUseStyle from '../../UI_UseStyles/RegisterUseStyle';
import Footer from '../../footer/footer';
import ItemsParent from '../../Cards/ItemsData/ItemsParent';

function InsertItem() {   
  //use import styles from function ResUseStyles()
  let {ResUseStyles} = RegisterUseStyle();
  const classes = ResUseStyles();
    
  return (
    <div className="App_container">        
      <Nav/><br/>  
        <div className="signIn_cotainer"> 
          <Container component="main" maxWidth="xs">
          <CssBaseline />
           <div className={classes.paper}>
              <InsertForm/>
           </div>
          </Container>  
        </div>   
        <div className='cardtext'>            
            <ItemsParent/>
        </div>   
      <Footer/> 
    </div>
  );
}
export default InsertItem;
