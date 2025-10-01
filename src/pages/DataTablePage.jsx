const DataTablePage = () => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">데이터 테이블</h1>
        <p className="text-gray-600">표 형식으로 데이터를 확인하고 관리하세요</p>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="데이터 검색..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              데이터 추가
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">데이터 테이블 컴포넌트 추가 예정</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTablePage;