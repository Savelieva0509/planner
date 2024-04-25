import React from 'react';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <Link to="/archive">Go to Archive</Link>
    </div>
  );
};

export default MainPage;
