
import './App.css';
import Counts from './components/Counts';
import Donate from './components/Donate';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="">
      <SocialLinks />
      <Navbar />
      <Main />
      <Programs />
      <Counts />
      <Donate />
    </div>
  );
}

export default App;
