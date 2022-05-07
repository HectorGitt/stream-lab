import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import Loginpage from "./pages/Loginpage";

//import styles
import "./styles/app.scss";
import Signuppage from "./pages/Signuppage";
import AuthProvider  from "./context/AuthContext";
function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Moviepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
