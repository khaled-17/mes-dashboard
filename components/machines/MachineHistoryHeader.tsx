import { Calendar, Download, Filter } from "lucide-react";

export default function MachineHistoryHeader() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Machine History</h2>
          <p className="text-gray-600 mt-1">
            View and analyze machine performance and operational history
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Date Range */}
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">Last 30 days</span>
          </div>
          
          {/* Export Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export</span>
          </button>
          
          {/* Filter Toggle */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">24</div>
          <div className="text-sm text-gray-600">Total Machines</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">18</div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600">4</div>
          <div className="text-sm text-gray-600">Maintenance</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">2</div>
          <div className="text-sm text-gray-600">Error</div>
        </div>
      </div>
    </div>
  );
}
