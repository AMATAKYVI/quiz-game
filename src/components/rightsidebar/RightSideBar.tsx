import React, { FC } from 'react';

interface RightSideBarProps {}

const RightSideBar: FC<RightSideBarProps> = ({}) => {
  return (
    <div className="w-1/5 flex flex-col  h-[100vh]">
      {/* top */}
      <div className="">User logged in</div>
      <div className="">
        {/* box 1 */}
        <div className="">
          <div className="">Others user</div>
          <div className="">
            <div className="">friend</div>
            <div className="">friend</div>
            <div className="">friend</div>
            <div className="">friend</div>
            <div className="">friend</div>
          </div>
        </div>
        {/* box 2 */}
        <div className="">
          <div className="">Achievements</div>
          <div className="">
            <div className="">friend</div>
            <div className="">friend</div>
            <div className="">friend</div>
          </div>
        </div>
        {/* box 3 */}
        <div className="">
          <div className="">Reminders</div>
          <div className="">
            <div className="">Control Your Account</div>
            <div className="">Clear Desk Policy</div>
            <div className="">Use of Flash Drives</div>
            <div className="">Reporting an Incident</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
