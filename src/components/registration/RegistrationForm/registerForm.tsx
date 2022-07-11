import { useState } from 'react';
import SubmitButton from '../../SubmitButton/submitButton';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import RegisterUseStyle from '../../UI_UseStyles/RegisterUseStyle';

function RegisterForm() {

    //use import styles from function ResUseStyles()
    let {ResUseStyles} = RegisterUseStyle();
    const classes = ResUseStyles();

    //props name for button
    const RegisterButtonName = 'Sign Up';

    //navigate user to dashboard
    let navigate = useNavigate();

    //check if check box is checked
    const [ischecked,SetIsChecked] = useState(false);
    //validate FirstName,secondName,email and password fields
    const [email,SetEmail] = useState('');
    const [password,SetPassword] = useState('');
    const [firstName,SetFirstName] = useState('');
    const [lastName,SetLastName] = useState('');
    
    const [emailErr,SetEmailErr] = useState(false);
    const [passwordErr,SetPasswordErr] = useState(false);
    const [firstNameErr,SetFirstNameErr] = useState(false);
    const [lastNameErr,SetLastNameErr] = useState(false);

    //handle Submit, submit errors and Navigation
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        SetPasswordErr(false);SetEmailErr(false); 
        SetLastNameErr(false);SetFirstNameErr(false);
        
        if(email && password && firstName && lastName){
            if(ischecked === false){
            alert('Agree First To The Teams And Conditions');
            }
            else{
            //register from DB & navigate
            alert("email = "+ email+" password = "+password+ "name ="+firstName+"laft name ="+lastName);
            navigate('/Home');
            }
        }
        else{
            if(email === ''){SetEmailErr(true);} if(password === ''){SetPasswordErr(true);}
            if(firstName === ''){SetFirstNameErr(true);} if(lastName === ''){SetLastNameErr(true);}
        }
    }

  return (
    <div>  
         <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField  onChange={(e) =>SetFirstName(e.target.value)}
                    autoComplete="fname" name="firstName" variant="outlined" required fullWidth
                    id="firstName" label="First Name" autoFocus error={firstNameErr}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField  onChange={(e) =>SetLastName(e.target.value)}
                    variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName"
                    autoComplete="lname" error={lastNameErr}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={(e) =>SetEmail(e.target.value)}
                    variant="outlined"required fullWidth id="email" label="Email Address"
                    name="email" autoComplete="email" error={emailErr}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField  onChange={(e) =>SetPassword(e.target.value) }
                    variant="outlined" required fullWidth name="password" label="Password"
                    type="password" id="password" autoComplete="current-password" error={passwordErr}/>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" required
                     onChange={(e) =>SetIsChecked(true)}/>} 
                    label="Agree to the terms and conditions"/>
                </Grid>
              </Grid>
              <SubmitButton className={classes.submit}>
                {RegisterButtonName}
              </SubmitButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to='/' className="linkstoNav">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
    </div>
  );
}
export default RegisterForm;
