import '../../App.css';
import '../login/signIn.css';
import Footer from '../footer/footer';
import Nav from '../navigation/navTab/navigation'; 
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SignInStyles from '../UI_UseStyles/SignInUseStyle';
import SignInForm from './SignInForm/form';


function SignIn() {
  
 //use import styles from function SignInUseStyles()
 let {SignInUseStyles} = SignInStyles();
 const classes = SignInUseStyles();

  return (
  <div className="App_container">
      <Nav/>         
         <div className="signIn_cotainer">
         <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar} />
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
               <SignInForm/>
            </div>
          </Grid>
        </Grid>          
      </div>
    <Footer/>
  </div>
  );
}
export default SignIn;