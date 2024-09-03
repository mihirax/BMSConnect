import React, { useState } from 'react';
import Header from './Header';

function Parent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const redirectTo = (path) => {
    // Redirect logic here
    window.location.href = '/login';
  };

  return (
    <div>
      <Header handleLogout={handleLogout} isLoggedIn={isLoggedIn} redirectTo={redirectTo} />
      {/* Other content */}
    </div>
  );
}

export default Parent;
