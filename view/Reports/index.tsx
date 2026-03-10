export default function ReportsView() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Reports</h1>
                    <p className="text-gray-600 mt-2">View comprehensive system reports and statistics.</p>
                </div>
                <button className="bg-secondary text-white px-6 py-2 rounded-lg shadow-sm hover:opacity-90 transition-opacity font-medium">
                    Export Report
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                    <h2 className="font-semibold text-gray-700">Recent Activity</h2>
                    <div className="h-64 border-2 border-dashed border-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        Chart Area Placeholder
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                    <h2 className="font-semibold text-gray-700">Traffic Distribution</h2>
                    <div className="h-64 border-2 border-dashed border-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        Pie Chart Placeholder
                    </div>
                </div>
            </div>
        </div>
    );
}
