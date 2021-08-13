import './App.css';
import './main.css';
import Myheader from './header';
import Mysection from './section';
import Myabout from './about';
import Myskills from './skills';
import Myservices from './services';
import Portfolio from './portfolio';
import Team from './team';
import Testimonials from './testimonials';
import Pricing from './price';
import Process from './process';
import Blog from './blog';
import Suscribe from './subscribe';
import Contact from './contact';
import Map from './map';

function App() {
  return (
    <div className="App">
      <Myheader />
      <Mysection />
      <Myabout />
      <Myskills />
      <Myservices />
      <Portfolio />
      <Team />
      <Testimonials />
      <Pricing />
      <Process />
      <Blog />
      <Suscribe />
      <Contact />
      <Map />
    </div>
  );
}

export default App;
