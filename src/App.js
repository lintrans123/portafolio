import './App.css';
import  { NavBarr }  from './componentes/NavBarr';
import { Baner } from './componentes/Baner';
import {Skills} from './componentes/Skills';
import {Projects} from './componentes/Projects';
import { Footer } from './componentes/Footer';
import "bootstrap/dist/css/bootstrap.min.css" ; 

function App() {

  return (

    <div className="App">
        <NavBarr />
        <Baner />
        <Skills />
        <Projects />
        <Footer />
        {/* You can add more components here as needed */}
    </div>
  );
}

export default App;
