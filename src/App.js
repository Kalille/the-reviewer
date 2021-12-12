import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
       Hello
       <Router>
      <Routes>

        <Route
        index
         path="Home"
         element={<Home/>} />
        {/* <Route 
        index
         path="Signup" 
         element={<Signup/>} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
