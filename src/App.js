import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';


function App() {
  return (
    <>
      <Header />

    <main className='main'>
      <Home />
      {/*<About />*/}
     <Skills />
       {/*<Services />
      <Qualifications />*/}
      <Work />
      <Contact />
    </main>
      <Footer />
      <ScrollUp />
    
    </>
  );
}

export default App;
