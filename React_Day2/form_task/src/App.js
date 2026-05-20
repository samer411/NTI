import './App.css';
import Form from "./Form.js"
import Home from "./Home.js"
import {BrowserRouter,Route,Routes,Link, Router} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myForm">My Form</Link></li>
      </ul>
    </nav>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/myForm' element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
