import NavButton from "../navigation/navButton/navButton";

function AdsBanner() {
  //props value
  const ButtonName = 'Redeem Customer points';
  //Alert is shown when button is clicked
   const ShowAlert = ()=>{ 
     alert('Feature still under Development');
   } 
  
  return (
    <section> 
        <div className="div_container">
            <img className="Poster_img" 
             src="https://media.istockphoto.com/photos/catwalk-runway-show-event-picture-id940236760?k=20&m=940236760&s=612x612&w=0&h=zjH-xABXaEepsYLi0Gq8gekCLE6ZJ3rhi56MG84MbxI=" alt="Poster"/>
             <div className="centered_text" >
              <h1 className="banner_title">Get 50 points everytime when you buy from us</h1><br/><br/>
              <NavButton className="button"><h4  onClick={ShowAlert}>{ButtonName}</h4></NavButton>
             </div>      
           </div>   
    </section>
  );
}
export default AdsBanner;
