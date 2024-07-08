import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SectionOne from './components/sections/SectionOne';

function App() {
  return (
    <div>
      <Nav home='Token Holders' about='Event Owners' />
      <SectionOne />
      <Footer />
    </div>
  );
}

export default App;
