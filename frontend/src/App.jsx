import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import AdidasHome from './components/AdidasHome';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App" >
      <Navbar/>
     <Routes>
      <Route path='/' element={<AdidasHome/>} />
     </Routes>
    </div>
  );
}

export default App;
