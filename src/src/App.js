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
import SatvikBhoj from './Component/SatvikBhoj';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <Router>
      <Header/>
      <Helmet>
            <meta charSet="utf-8" />
            <title>Hotel Runway Inn - Best Hotel in Varanasi Near Babatpur Airport</title>
            <meta name="description" content="Prepare for a runway-worthy stay at Hotel Runway Inn, your cozy oasis just a skip away from Varanasi's Lal Bahadur Shastri International Airport. Come on in and let us pamper you with warmth and comfort for a truly delightful Varanasi adventure." />
            <link rel="canonical" href="https://www.hotelrunwayinn.com" />
            <meta name='keywords' content="Varanasi Airport Hotel, Varanasi Business Hotel, Hotels near Airport, Varanasi Airport Road, Hotel Runway Inn, hotel runway inn varanasi, runway hotel, hotels near varanasi airport, runway restaurant, hotels near airport varanasi, the runway hotel, varanasi hotel near airport, hotels near babatpur airport, modern hotel varanasi, banaras airport name, varanasi stay options, hotel garden inn varanasi, hotels in varanasi near airport, varanasi hotel contact number, hotel runway suites, hotels in varanasi with swimming pool, restaurants in varanasi india, runway cafe, restaurant for couples in varanasi, hotel varanasi inn, rooftop restaurants varanasi, varanasi airport lounge, banaras airport code, lounge in varanasi airport, hotel modern varanasi, hotel varanasi contact number, varanasi nearest airport, hotel varanasi inn varanasi uttar pradesh, restaurant close to airport, lbs airport, varanasi babatpur airport, babatpur hotel, hotels in babatpur varanasi, lounge at varanasi airport, varanasi to airport, hotel in babatpur varanasi, rooftop restaurant varanasi, hotel runway inn ahmedabad, swimming pool hotel in varanasi, restaurant at varanasi, international hotel varanasi" />

        </Helmet>
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
        <Route path='/SatvikBhoj' element={<SatvikBhoj/>}/>
      </Routes>
      {/* <Form/> */}
      <Map/>
      <Footer/>
      <Button/>
    </Router>
  );
}

export default App;
