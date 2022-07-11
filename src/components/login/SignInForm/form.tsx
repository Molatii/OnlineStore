import SignInStyles from '../../UI_UseStyles/SignInUseStyle';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import SubmitButton from '../../SubmitButton/submitButton';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link,useNavigate } from 'react-router-dom';

function SignInForm() {
 //use import styles from function SignInUseStyles()
 let {SignInUseStyles} = SignInStyles();
 const classes = SignInUseStyles();

 //props button name
 const SignInButton = 'Sign In';

 //navigate user to dashboard/Home
 let navigate = useNavigate();

 //validate email and password fields
 const [email,SetEmail] = useState('');
 const [password,SetPassword] = useState('');
 const [emailErr,SetEmailErr] = useState(false);
 const [passwordErr,SetPasswordErr] = useState(false);

 //handle Submit, submit errors and Navigation
 const handleMySubmit = (e:any) =>{
   e.preventDefault();
   SetEmailErr(false);
   SetPasswordErr(false);

   if(email && password){
      //check from DB & navigate
      alert("email = "+ email+" password = "+password);
      navigate('/Home');
   }else{     
     if(email === ''){SetEmailErr(true);}
     if(password === ''){SetPasswordErr(true);}
   }
 } 

  return (
    <div>        
     <form className={classes.form} noValidate onSubmit={handleMySubmit}>
         <TextField variant="outlined" margin="normal" required  name="email" autoComplete="email" 
             onChange={(e) =>SetEmail(e.target.value)}
             fullWidth id="email" label="Email Address" autoFocus type="email" error={emailErr}/>
         <TextField variant="outlined" margin="normal" required  fullWidth error={passwordErr}
             onChange={(e) =>SetPassword(e.target.value) }
             name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
         <FormControlLabel name="remember_me" label="Remember me"
             control={<Checkbox value="remember" color="primary" defaultChecked/>}/>                
         <SubmitButton className={classes.submit}>
            {SignInButton}
        </SubmitButton>
        <Grid container>
             <Grid item xs>
                <Link to='/SignUp' className="linkstoNav">
                    {"Don't have an account? Sign Up"}
                </Link>
             </Grid>
             <Grid item >
                  <Link to='/Adminarea' className="linkstoNav">
                      {'Admin? Sign In Here'}
                    </Link>
            </Grid>
        </Grid>
     </form>
    </div>
  );
}
export default SignInForm;