import { useState } from 'react';
import Header from './Header';
import SidePannel from './SidePannel';

const Layout = ({ children, currentPage, onPageChange }) => {
  const [sidepannelOpen, setSidePannelOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <SidePannel 
        isOpen={sidepannelOpen} 
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header 
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;