import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const isTabletOrMobile = useMediaQuery({ 
    query: '(max-width: 1224px)' 
  });

  return (
    <div>
      {isDesktopOrLaptop && (
        <p>You are a desktop or laptop</p>
      )}
      {isTabletOrMobile && (
        <p>You are a tablet or mobile phone</p>
      )}
    </div>
  );
};

export default Example;