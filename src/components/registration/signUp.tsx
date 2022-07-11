import '../../App.css';
import '../registration/signUp.css';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import RegisterForm from './RegistrationForm/registerForm';
import RegisterUseStyle from '../../components/UI_UseStyles/RegisterUseStyle';
import Nav from '../navigation/navTab/navigation';
import Footer from '../footer/footer';

function SignUp() {
//use import styles from function ResUseStyles()
let {ResUseStyles} = RegisterUseStyle();
const classes = ResUseStyles();

  return (
    <div className="App_container">   
     <Nav/>      
     <div className="signIn_cotainer"> 
        <Container component="main" maxWidth="xs">
          <CssBaseline />
           <div className={classes.paper}>
             <Avatar className={classes.avatar}/>            
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <RegisterForm/>
           </div>
        </Container>  
       </div>    
      <Footer/>     
    </div>
  );
}
export default SignUp;
