import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/WelcomePage/welcomePage';
import SignIn from './components/login/signIn';
import SignUp from './components/registration/signUp';
import Profile from './components/Pages/UserProfile/profile';
import AboutUs from './components/Pages/Company/aboutUs';
import Orders from './components/Pages/Orders/orders';
import ContantUs from './components/Pages/Company/contantUs';
import MansWear from './components/Pages/Clothing/mansClothing';
import WomansWear from './components/Pages/Clothing/womanClothing';
import Clothing from './components/Pages/Clothing/clothing';
import Company from './components/Pages/Company/company';
import AdminArea from './components/AdminDashBoard/dashboard';
import InsertItem from './components/AdminDashBoard/AdminInsert/insertItem';
import UpdateItem from './components/AdminDashBoard/AdminUpdate/updateItem';
import SeletedItem from './components/Config Items/selectedItem';

function App() {
  return (
    <div className="App_container">        
        <Routes>  
          <Route path='/' element={<SignIn/>}/>
          <Route path='/Home' element={<Welcome/>}/>   
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/UserProfile' element={<Profile/>}/>
          <Route path='/Orders' element={<Orders/>}/>   
          <Route path='/AboutUs' element={<AboutUs/>}/> 
          <Route path='/ContantUs' element={<ContantUs/>}/>
          <Route path='/Man' element={<MansWear/>}/>   
          <Route path='/Woman' element={<WomansWear/>}/> 
          <Route path='/Company' element={<Company/>}/>   
          <Route path='/Clothing' element={<Clothing/>}/> 
          <Route path='/AdminArea' element={<AdminArea/>}/> 
          <Route path='/InsertData' element={<InsertItem/>}/> 
          <Route path='/UpdateData' element={<UpdateItem/>}/> 
          <Route path='/SeletedItem' element={<SeletedItem/>}/>   

        </Routes>
    </div>
  );
}
export default App;
