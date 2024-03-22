import './App.css';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
// import Form from './Component/Form';
// import About from './Component/About';
import Room from './Component/Room';
import Restaurant from './Component/Resturant';
import Contact from './Component/Contact';
import Tariff from './Component/Tariff';
import Gallery from './Component/Gallery';
import Map from './Component/Map';
import Award from './Component/Award';
import Banquet from './Component/Banquet';
import Aqua from './Component/Aqua';
import Baneras from './Component/Baneras';
import Button from './Component/Button';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tariff' element={<Tariff/>}/>
        {/* <Route path='/room' element={<Room/>}/> */}
        <Route path='/room/*' element={<Room/>}/>
        <Route path='/restaurant' element={<Restaurant/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/awards-and-achievements' element={<Award/>}/>
        <Route path='/banquet' element={<Banquet/>}/>
        <Route path='/aqua-lounge' element={<Aqua/>}/>
        <Route path='/simply-benaras' element={<Baneras/>}/>
      </Routes>
      {/* <Form/> */}
      <Map/>
      <Footer/>
      <Button/>
    </Router>
  );
}

export default App;
