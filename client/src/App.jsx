import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

function App() {
  return (
      <Routes>

        <Route element={<MainLayout/>}>
          
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          } />

        </Route>
        
        <Route element={<AuthLayout/>}>
          
          <Route path="/register" element={
            <PublicRoute>
              <Register/>
            </PublicRoute>
          } />
          
          <Route path="/login" element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
          } />

        </Route>

      </Routes>
  );
}

export default App;