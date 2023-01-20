import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Work from './components/work/Work';


function App() {
  return (
    <>
      <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualifications />
      <Work />
    </main>
    </>
  );
}

export default App;
