// App.js
import React, { useState } from 'react';
import Navi from './nav.js'
import AddNewEmployee from './addemployee.js';
import ViewEmployee from './viewemployee.jsx'

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('add-new-employee');

  const handleSelect = (component) => {
    setSelectedComponent(component);
  };

  // Render the appropriate content based on the selected component
  const renderContent = () => {
    switch (selectedComponent) {
      case 'add-new-employee':
        return <AddNewEmployee />;
      case 'view-employee':
        return <ViewEmployee />  // Provide the appropriate component or content for 'view-admin'
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
