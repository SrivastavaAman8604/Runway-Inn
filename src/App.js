import './App.css';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Form from './Component/Form';
import About from './Component/About';
import Room from './Component/Room';
import Restaurant from './Component/Resturant';
import Contact from './Component/Contact';
import Tariff from './Component/Tariff';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tariff' element={<Tariff/>}/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/restaurant' element={<Restaurant/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      {/* <Form/> */}
      <Footer/>
    </Router>
  );
}

export default App;
