import React, { FC } from 'react';

interface LeftSideBarProps {}

const LeftSideBar: FC<LeftSideBarProps> = ({}) => {
  return (
    <div className="w-1/5 flex flex-col h-[100vh]">
      {/* top of left side */}
      <div className=""></div>
      <div className="">
        <p className="">logo</p>
        <p className="">Cyberverdict</p>
      </div>
      <div className="">Dashboard</div>
      <div className="">Notification</div>
      <div className="">Achievements</div>
      <div className="">Quiz History</div>

      {/* bottom of left side */}
      <div className="">
        {' '}
        {/* support component */}
        <div className="">support 24/7</div>
        {/* logout */}
        <div className="">Log out</div>
      </div>
    </div>
  );
};

export default LeftSideBar;
