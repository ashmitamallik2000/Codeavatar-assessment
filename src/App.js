import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';
import { Form } from './Components/Form/Form';

function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <Routes> {/* Define routes for the different components */}
        <Route path="/" element={<Login />} /> {/* Login route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
        <Route path="/form" element={<Form />} /> {/* Form route */}
      </Routes>
    </Router>
  );
}

export default App;
