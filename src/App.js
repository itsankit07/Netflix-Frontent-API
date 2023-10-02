import './App.scss';
import Header from './Components/Header';
import {Routes , Route , BrowserRouter as Router} from "react-router-dom"
import Home from './Components/Home';

function App() {
  return (
   
    <Router>
    <div className="App">
     <Header/>
     <Home/>
    </div>
    </Router>
  );
}

export default App;
