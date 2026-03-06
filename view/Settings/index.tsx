export default function SettingsView() {
    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
            <div className="mb-4 text-center md:text-right">
                <h1 className="text-3xl font-bold text-gray-800">إعدادات النظام</h1>
                <p className="text-gray-600 mt-2">قم بضبط الإعدادات العامة والتفضيلات للوحة التحكم.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="font-semibold text-gray-700">المعلومات الأساسية</h2>
                </div>

                <div className="p-6 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">اسم النظام</label>
                            <input
                                type="text"
                                defaultValue="MES Dashboard"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">البريد الإلكتروني للتواصل</label>
                            <input
                                type="email"
                                defaultValue="admin@mes.com"
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end gap-3 mt-4">
                        <button className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                            إلغاء التغييرات
                        </button>
                        <button className="px-8 py-2 bg-tertiary text-white rounded-lg shadow-sm hover:opacity-90 font-medium transition-opacity">
                            حفظ الإعدادات
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
