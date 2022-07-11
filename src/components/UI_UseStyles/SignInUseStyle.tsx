import { makeStyles } from "@material-ui/core";

export default function SignInStyles () {

        //Style for form classes layout
        const SignInUseStyles = makeStyles((theme) => ({
        root: {
          height: '100vh',
        },
        image: {
          backgroundImage: 'url(https://www.bloss.co.za/wp-content/uploads/2019/09/BA5D91C3-5086-4C21-98D7-A01390131F2C.jpeg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: '100%',
          backgroundPosition: 'left',
        },
        paper: {
          margin: theme.spacing(8, 4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        }));
        
        return {SignInUseStyles};

}