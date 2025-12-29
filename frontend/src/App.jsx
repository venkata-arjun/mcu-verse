import ImageSlider from "./components/ImageSlider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AvengersGallery from "./pages/AvengersGallery";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutMCU from "./pages/AboutMCU";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/gallery"
            element={
              <ProtectedRoute>
                <AvengersGallery />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<AboutMCU />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
