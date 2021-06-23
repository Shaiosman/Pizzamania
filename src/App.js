import logo from './logo.svg';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Carousel from "./Components/Carousel/Carousel";
import AboutPizza from './Components/AboutPizza/AboutPizza';
import PizzaTypes from'./Components/PizzaTypes/PizzaTypes';
import Footer from './Components/Footer/Footer';


function App() {
  return (
   <>
    <Navbar />,
    <Carousel/>,
    <AboutPizza/>,
    <PizzaTypes/>
    <Footer/>;
  </>
  );
  
}

export default App;
