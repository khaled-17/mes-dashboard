export default function ReportsView() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">التقارير</h1>
                    <p className="text-gray-600 mt-2">استعراض تقارير وإحصائيات النظام الشاملة.</p>
                </div>
                <button className="bg-secondary text-white px-6 py-2 rounded-lg shadow-sm hover:opacity-90 transition-opacity font-medium">
                    تصدير تقرير
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                    <h2 className="font-semibold text-gray-700">النشاط الأخير</h2>
                    <div className="h-64 border-2 border-dashed border-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        مساحة مخصصة للرسم البياني
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
                    <h2 className="font-semibold text-gray-700">توزيع الزيارات</h2>
                    <div className="h-64 border-2 border-dashed border-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        مساحة مخصصة للرسم البياني الدائري
                    </div>
                </div>
            </div>
        </div>
    );
}
