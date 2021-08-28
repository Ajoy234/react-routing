
import './App.css';
import Skills from './pages/skills/Skills';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Topbar from './topbar/Topbar';
import { BrowserRouter,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Route path="/" exact component={Home}><Home /></Route>
        <Route path="/about" component={About}><About /></Route>
        <Route path="/skill" component={Skills}><Skills /></Route>
        
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
