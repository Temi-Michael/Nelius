import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import EventOwners from './pages/EventOwners';

function App() {
  return (
    <div>
      <Nav home='Token Holders' about='Event Owners' />
      <EventOwners />
      <Footer />
    </div>
  );
}

export default App;
