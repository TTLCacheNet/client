import { useState } from 'react';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState('5');

  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">설정</h1>
        <p className="text-gray-600">애플리케이션 설정을 관리하세요</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">일반 설정</h3>
          <div className="space-y-4">
            
            {/* <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">자동 저장</p>
                <p className="text-sm text-gray-500">변경사항 자동 저장</p>
              </div>
              <button
                onClick={() => setAutoSave(!autoSave)}
                className={`w-12 h-6 rounded-full relative transition-colors ${
                  autoSave ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                    autoSave ? 'right-1' : 'left-1'
                  }`}
                ></span>
              </button>
            </div> */}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">데이터 설정</h3>
          <div className="space-y-3">
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                데이터 새로고침 간격
              </label>
              <select
                value={refreshInterval}
                onChange={(e) => setRefreshInterval(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="5">5분</option>
                <option value="10">10분</option>
                <option value="30">30분</option>
                <option value="60">1시간</option>
              </select>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;