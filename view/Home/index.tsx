import StatCard from "./components/StatCard";

export default function HomeView() {
    const stats = [
        { title: "المستخدمين النشطين", value: "120", color: "bg-primary" },
        { title: "التقارير الجديدة", value: "15", color: "bg-secondary" },
        { title: "الطلبات المعلقة", value: "8", color: "bg-tertiary" },
        { title: "إجمالي الزيارات", value: "3,450", color: "bg-green-500" },
    ];

    return (
        <>
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-800">الرئيسية</h1>
            <p className="text-gray-600">
                مرحباً بك في لوحة التحكم الخاصة بنظام MES الداشبورد. يمكنك التنقل بين الصفحات من خلال القائمة الجانبية.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
        <h1 className="text-center text-5xl mt-40">Karim - Dashboard</h1>
        </>
    );
}
