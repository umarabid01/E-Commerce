import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Home from './screens/User/Home';
import Order from './screens/User/Order';
import Cart from './screens/User/Cart';
import Detail from './screens/User/Detail';
import Header from './components/User/Header'
import Footer from './components/User/Footer'
import Login from './screens/User/Login';
import Signup from './screens/User/Signup';
import Profile from './screens/User/Profile';
import Alogin from './screens/Admin/Alogin';
import Ahome from './screens/Admin/Ahome';
import Asales from './screens/Admin/Asales';
import Aproduct from './screens/Admin/Aproduct';
import Auser from './screens/Admin/Auser';
import Aallproduct from './screens/Admin/Aallproduct';
import Aorder from './screens/Admin/Aorder';
import Billing from './screens/User/Billing';

function App() {
   const location=useLocation();
   const hideheaderfooter=location.pathname.startsWith('/a')
  return (
   

    <div className="d-flex flex-column min-vh-100 bg-dark">
      {!hideheaderfooter && <Header/>}
  
      <main className='flex-grow-1'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/detail" element={<Detail/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/alogin" element={<Alogin/>} />
      <Route path="/ahome" element={<Ahome/>} />
      <Route path="/asales" element={<Asales/>} />
      <Route path="/aproduct" element={<Aproduct/>} />
      <Route path="/auser" element={<Auser/>} />
      <Route path="/aorder" element={<Aorder/>} />
      <Route path="/aallproduct" element={<Aallproduct/>} />
      <Route path="/billing" element={<Billing/>} />
      
    </Routes>
    </main>
    {!hideheaderfooter && <Footer/>}
    
    </div>
  );
}

export default App;