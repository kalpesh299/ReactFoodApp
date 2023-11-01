
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Info } from './components/Info';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="App">
    <Header/>
    <HeroSection/>
    <Info/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;
