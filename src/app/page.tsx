import LeftSideBar from '@/components/leftsidebar/LeftSideBar';
import MiddleBar from '@/components/middlebar/MiddleBar';
import RightSideBar from '@/components/rightsidebar/RightSideBar';

export default function Home() {
  return (
    <div className="px-10">
      {/* user need to login in order to see this */}
      <div className="flex gap-2 flex-screen">
        <LeftSideBar />
        <MiddleBar />
        <RightSideBar />
      </div>
    </div>
  );
}
