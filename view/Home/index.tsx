import StatCard from "./components/StatCard";

export default function HomeView() {
    const stats = [
        { title: "Active Users", value: "120", color: "bg-primary" },
        { title: "New Reports", value: "15", color: "bg-secondary" },
        { title: "Pending Requests", value: "8", color: "bg-tertiary" },
        { title: "Total Visits", value: "3,450", color: "bg-green-500" },
    ];

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-800">Home</h1>
            <p className="text-gray-600">
                Welcome to the MES Dashboard. You can navigate between pages using the sidebar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
    );
}
