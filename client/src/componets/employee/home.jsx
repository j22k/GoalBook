// App.js
import React, { useState } from 'react';
import Navi from './nav.js'
import ViewBookings from './viewbookings.jsx'

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('view-bookings');

  const handleSelect = (component) => {
    setSelectedComponent(component);
  };

  // Render the appropriate content based on the selected component
  const renderContent = () => {
    switch (selectedComponent) {
      case 'add-new-employee':
      case 'view-bookings':
        return <ViewBookings /> // Provide the appropriate component or content for 'view-admin'
      default:
        return null;
    }
  };

  return (
    <div>
      <Navi onSelect={handleSelect} />
      {renderContent()}
    </div>
  );
};

export default Home;
