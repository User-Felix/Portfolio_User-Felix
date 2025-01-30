import './App.css';

import Toolbar from './components/toollbar/toolbar';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';

function App() {

  return (
    <main id='container'>
      <Toolbar/>
      <Hero/>
      <Footer/>
    </main>
  );
};

export default App;
