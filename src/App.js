import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/UI/Navbar/Navbar";
import { Auth } from "./Pages/Auth/Auth";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
