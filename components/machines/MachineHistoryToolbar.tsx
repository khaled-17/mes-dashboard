import { List, BarChart3, RefreshCw, Settings } from "lucide-react";

interface MachineHistoryToolbarProps {
  viewMode: 'list' | 'chart';
  onViewModeChange: (mode: 'list' | 'chart') => void;
}

export default function MachineHistoryToolbar({
  viewMode,
  onViewModeChange,
}: MachineHistoryToolbarProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => onViewModeChange('list')}
              className={`flex items-center gap-2 px-3 py-2 transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="text-sm font-medium">List View</span>
            </button>
            <button
              onClick={() => onViewModeChange('chart')}
              className={`flex items-center gap-2 px-3 py-2 transition-colors ${
                viewMode === 'chart'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">Chart View</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Refresh Button */}
          <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm font-medium">Refresh</span>
          </button>
          
          {/* Settings Button */}
          <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
