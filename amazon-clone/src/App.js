import './App.css';
import Navbar from './Navbar';
import User_Profile from './User_Profile';
import Post from './post/Post';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Post /> */}
      <User_Profile/>
    </div>
  );
}

export default App;
