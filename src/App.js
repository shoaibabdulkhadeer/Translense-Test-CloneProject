
import './App.css';
import Befactors from './components/Befactors';
import Cards from './components/Cards';
import Case from './components/Case';
import Comp from './components/Comp';
import Counts from './components/Counts';
import Donate from './components/Donate';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import Signup from './components/Signup';
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
      <Befactors />
      <Case />
       <Cards />
       <Comp />
       <Signup />
       <Footer />
    </div>
  
  );
}

export default App;
