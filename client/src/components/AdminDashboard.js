import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import UserManagement from './UserManagement';
import ContentManagement from './ContentManagement';
import Analytics from './Analytics';
import Settings from './Settings';
import Reports from './Reports';
import Notifications from './Notifications';

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
          <span>Admin Dashboard</span>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      </div>

      {/* Main Content */}
      <h1>Welcome to Admin Dashboard</h1>
      <UserManagement />
      <ContentManagement />
      <Analytics />
      <Settings />
      <Reports />
      <Notifications />
    </div>
  );
}

export default AdminDashboard;
