import React from 'react';
import Sidebar from './_components/Sidebar';

const DashBoardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="bg-gray-50 h-screen">
      <div className="md:w-64 hidden md:block fixed">
        <Sidebar />
      </div>
      <div className="md:ml-64 bg-gray-50 h-fit pb-5">{children}</div>
    </main>
  );
};

export default DashBoardLayout;
