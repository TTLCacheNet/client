import { BarChart3, Table, Settings } from 'lucide-react';

const HomePage = ({ onPageChange }) => {
  const cards = [
    {
      id: 'dashboard',
      icon: BarChart3,
      title: '대시보드',
      description: '실시간 데이터 시각화 및 분석',
      gradient: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      textColor: 'text-blue-100'
    },
    {
      id: 'data',
      icon: Table,
      title: '데이터 테이블',
      description: '표 형식으로 데이터 관리',
      gradient: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      textColor: 'text-green-100'
    },
    {
      id: 'settings',
      icon: Settings,
      title: '설정',
      description: '시스템 환경 설정',
      gradient: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      textColor: 'text-purple-100'
    }
  ];

  const activities = [
    { action: '새로운 데이터셋 업로드', time: '5분 전' },
    { action: '대시보드 차트 업데이트', time: '1시간 전' },
    { action: '보고서 생성 완료', time: '3시간 전' },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          객체 데이터 시각화 및 분석
        </h1>
        <p className="text-lg text-gray-600">
          객체별 분석과 시각화 대시보드 제공
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onPageChange(card.id)}
              className={`bg-gradient-to-br ${card.gradient} ${card.hoverColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1`}
            >
              <Icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className={`${card.textColor} text-sm`}>
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">최근 활동</h2>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <span className="text-gray-700">{activity.action}</span>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;