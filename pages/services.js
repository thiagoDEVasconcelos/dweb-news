import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignupPage from "./pages/Signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignupPage/>}/>
        <Route path="/*" element={<LandingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;


app.js