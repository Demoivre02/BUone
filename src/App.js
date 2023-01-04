import './App.css';
import Hero from './components/header/hreo';
import Features from './components/features/features';
import Reasaon from './components/whyy/why';
import Merch from './components/merchant/merch';
import Service from './components/services/service';
import Testimonials from './components/tesimonial/testimonials';
import Faq from './components/Faq/faq';
import ScreenShot from './components/screenShots/screenShot';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
   
      <Hero/>
      <Features/>
      <Reasaon/>
      <Merch/>
      <Service/>
      <Testimonials/>
      <Faq/>
      <ScreenShot/>
      <Footer/>
    
    </div>
  );
}

export default App;
