export default function UsersView() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">إدارة المستخدمين</h1>
                    <p className="text-gray-600 mt-2">عرض وإدارة الحسابات الخاصة بالمستخدمين في النظام.</p>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-sm hover:opacity-90 transition-opacity font-medium">
                    إضافة مستخدم j
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-6">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="font-semibold text-gray-700">قائمة المستخدمين</h2>
                </div>
                <div className="p-12 text-center text-gray-500">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <span className="text-2xl">👥</span>
                    </div>
                    <p>لا يوجد مستخدمين مسجلين حالياً</p>
                </div>
            </div>
        </div>
    );
}
