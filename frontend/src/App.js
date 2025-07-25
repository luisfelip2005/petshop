import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from './contexts/DataContext';

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
