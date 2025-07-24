import React from 'react';
import PostList from './PostList';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div className="flex mx-[10%] mt-6 gap-8">
      <div className="w-full lg:w-[65%]">
        <PostList />
      </div>
      <div className="hidden lg:block w-[30%]">
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
