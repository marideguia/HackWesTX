import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import User_Profile from './User_Profile';
import Post from './post/Post';
import Login from './Login';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path="/" element={<><Navbar /><User_Profile /></>} />
          <Route path="/post" element={<><Navbar /><Post /></>} />
          <Route path="/login" element={<><Navbar /><Login /></>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
