import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import LoginForm from './LoginForm';
import CreateAccountForm from './CreateAccountForm';
import Header from './Header';
import Profile from './profile';
import Preloader from './preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/create-account" element={<CreateAccountForm />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
