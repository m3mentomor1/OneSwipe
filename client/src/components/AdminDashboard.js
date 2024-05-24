import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

function AdminDashboard() {
  const history = useHistory(); // Initialize useHistory hook

  // Handler function for signing out
  const handleSignOut = () => {
    // Implement your sign out logic here
    console.log('Signing out...');
    
    // Redirect to the desired route after signing out
    history.push('/home/mementomori/dating_app/client/src/components/Home.js');
  };

  return (
    <div className="admin-dashboard">
      {/* Menu Bar */}
      <div className="menu-bar">
        <div className="menu-content">
          <span>User Manager</span>
        </div>
        <button onClick={handleSignOut} className="sign-out-button">Sign out</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
