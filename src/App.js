import './App.css';
import { ToggleProvider } from './components/ToggleContext';
import Nav2 from './components/Nav2';
import Footer from './components/Footer';
import EventOwners from './pages/EventOwners';

function App() {

  return (
    <ToggleProvider>
      <div>
        <Nav2 home='Token Holders' about='Event Owners' />
        <EventOwners />
        <Footer />
      </div>
    </ToggleProvider>
  );
}

export default App;
