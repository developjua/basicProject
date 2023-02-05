
import Home from './Component/usercomponets/Home';
import { Route,Routes, useLocation} from 'react-router-dom';
import Login from './Component/usercomponets/Login';
import Signup from './Component/usercomponets/Signup';
import User from './Component/usercomponets/User';
import UserList from './Component/admincomponents/Listofallusers';
import Loginadmin from './Component/admincomponents/Loginadmin';
import Adminauth from './auth/Adminauth';
import Userauth from './auth/Userauth';





function App() {
  const location = useLocation();
  return (
     <div>
      
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/user' element={<Userauth><User/></Userauth>}/>
        <Route path='/admin/login' element={<Loginadmin/>}/>
        <Route path='/adminuser' element={<Adminauth><UserList/></Adminauth>}/>
    </Routes>
      </div>
     
 
  );
}

export default App;
