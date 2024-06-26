import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav home='Token Holders' about='Event Owners' />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
