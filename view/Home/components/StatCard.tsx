export default function StatCard({ title, value, color }: { title: string, value: string, color: string }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2 transition-transform hover:-translate-y-1">
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <p className="text-3xl font-bold flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${color}`}></span>
                {value}
            </p>
        </div>
    );
}
