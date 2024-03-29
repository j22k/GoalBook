// App.js
import React, { useState } from 'react';
import Nav from "./nav.js";
import AddNewAdmin from './addadmin.js';
import ViewAdmin from './viewadmin.jsx';

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('add-new-admin');

  const handleSelect = (component) => {
    setSelectedComponent(component);
  };

  // Render the appropriate content based on the selected component
  const renderContent = () => {
    switch (selectedComponent) {
      case 'add-new-admin':
        return <AddNewAdmin />;
      case 'view-admin':
        return <ViewAdmin />  // Provide the appropriate component or content for 'view-admin'
      default:
        return null;
    }
  };

  return (
    <div>
      <Nav onSelect={handleSelect} />
      {renderContent()}
    </div>
  );
};

export default Home;
