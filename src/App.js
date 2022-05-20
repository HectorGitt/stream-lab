import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Homepage from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";
import Loginpage from "./pages/Loginpage";
import ForgotPassword from "./pages/ForgotPassword";

//import styles
import "./styles/app.scss";
import Signuppage from "./pages/Signuppage";
import AuthProvider  from "./context/AuthContext";
import { MoviesProvider } from "./context/MoviesContext";
function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <MoviesProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies" element={
              <PrivateRoute>
                <Moviepage />
              </PrivateRoute>
            } />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<Signuppage/>} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            
          </Routes>
        </MoviesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
