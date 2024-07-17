import React from 'react';
import ReactGA from 'react-ga4';

const MyComponent = () => {
  const handleButtonClick = (buttonType) => {
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked Button',
      label: buttonType, // Pass the button type as the label
    });

    // Call the appropriate function based on the button type
    if (buttonType === 'romantic') {
      // Call the romantic button function
    } else if (buttonType === 'anotherType') {
      // Call the anotherType button function
    }
    // Add more conditions for other button types
  };

  return (
    <div>
      <button
        className="analytics-button-type1"
        onClick={() => handleButtonClick('romantic')}
      >
        Romantic Button
      </button>
      <button
        className="analytics-button-type2"
        onClick={() => handleButtonClick('anotherType')}
      >
        Another Type Button
      </button>
      {/* Add more buttons with different types */}
    </div>
  );
};

export default MyComponent;