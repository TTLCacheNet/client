import { Home, BarChart3, Table, Settings } from 'lucide-react';

const SidePannel = ({ isOpen, currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'home', icon: Home, label: '홈' },
    { id: 'dashboard', icon: BarChart3, label: '대시보드' },
    { id: 'data', icon: Table, label: '데이터 테이블' },
    { id: 'settings', icon: Settings, label: '설정' },
  ];

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } bg-gray-900 text-white transition-all duration-300 overflow-hidden flex-shrink-0`}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            TTLCacheNet
          </h2>
          <p className="text-xs text-gray-400 mt-1">Analytics demo page</p>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onPageChange(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      currentPage === item.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </aside>
  );
};

export default SidePannel;