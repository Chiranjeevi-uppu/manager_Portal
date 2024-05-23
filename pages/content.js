// Content.js

import React from 'react';
import EmpRegForm from './empRegForm';
import EmpSearch from './manDashboard/empSearch';

const Content = ({ selectedContent }) => {
  let content = null;

  switch (selectedContent) {
    case 1:
      content = <div> <EmpRegForm /> </div>;
      break;
    case 2:
      content = <div> <EmpSearch /> </div>;
      break;
    case 3:
      content = <div><h1>Content 3: Genie Rewards</h1></div>;
      break;
    default:
      content = <div><h1>Welcome! Please select an option from the sidebar.</h1></div>;
      break;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Content;

