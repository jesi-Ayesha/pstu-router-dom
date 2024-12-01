import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const HomePage = () => {
    return <h2>Home Page</h2>;
  };

  const AboutPage = () => {
    return <h2>About Page</h2>;
  };

  const ProfilePage = () => {
    const { id } = useParams();  
    
    return <h2>Profile Page for user {id}</h2>;
  };

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className='flex justify-between px-32 py-4 bg-red-600 text-white'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile/123">Profile 123</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
