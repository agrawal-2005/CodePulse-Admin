import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import "./App.css";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error('Failed to fetch current user:', error);
        dispatch(logout()); // Optionally handle logout on error
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return loading ? (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <p className="text-lg text-gray-600">Loading...</p> {/* Replace this with a spinner if needed */}
    </div>
  ) : (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet /> {/* Render nested routes */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
