import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.js"
import RegisterUser from "./pages/RegisterUser.js"
import SigninUser from "./pages/SigninUser"
import UserForm from "./pages/UserForm"
import Admin from "./pages/Admin"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} exact />
          <Route path="/signup" element={<RegisterUser/>} />
          <Route path="/signin" element={<SigninUser/>} />
          <Route path="/form" element={<UserForm/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;





