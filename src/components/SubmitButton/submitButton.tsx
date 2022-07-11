import Button from '@material-ui/core/Button';

function SubmitButton(props:any) {

    return (
      <div>
            <Button  type="submit" fullWidth  variant="contained"
              style={{ backgroundColor: '#1976d2', color: 'white'}}>
              {props.children}
            </Button>          
      </div>
    ); 
  }
  export default SubmitButton;