const DashboardPage = () => {
  const stats = [
    // 임시 데이터 하드 코딩
    { label: '전체 객체', value: '1,234', change: '+12%', color: 'blue' },
    { label: 'Cache Hit', value: '856', change: '+8%', color: 'green' },
    { label: 'Cache Miss', value: '2.5GB', change: '-3%', color: 'purple' },
    { label: '필요시 추가', value: '2.5GB', change: '-3%', color: 'purple' },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">대시보드</h1>
        <p className="text-gray-600">객체 요청 관련 대시보드</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <span 
              className={`text-sm font-semibold ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">차트 영역</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">컴포넌트 추가 예정</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">데이터 분석</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">컴포넌트 추가 예정</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;