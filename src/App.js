
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Info } from './components/Info';
import { Testimonials } from './components/Testimonials';
// import {BrowserRouter,Routes,Route} from "react-router-dom"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { MainComponent } from './maincomponents/MainComponent';
import { Qute } from './maincomponents/Qute';
import { Foods } from './maincomponents/Foods';
import {Food} from './maincomponents/Food'



function App() {
  return (
    <div className="App">

<BrowserRouter>
<Header/>
<Routes>
  <Route path='/home' element={<MainComponent/>}/>
  <Route path='/qoute' element={<Qute/>}/>
  {/* <Route path='/fooddata' element={<Foods/>}/> */}
  <Route path='/restro' element={<Foods/>}/>
  <Route path='/foodata' element={<Food/>}/>
</Routes>
</BrowserRouter>

<Footer/>

{/* <HeroSection/>
    <Info/>
    <Testimonials/>
    <Footer/> */}
    </div>
  );
}

export default App;
