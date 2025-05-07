import React from 'react';

const Sidebar = ({ description }: { description: string }) => {
  return (
    <p className="sliderSidebarDescription">
      {description}
    </p>
  );
};

export default Sidebar;
