// "use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "24 Jan", EOO: 74, Avalability: 78, Preformance: 87, Quality: 48 },
  { name: "24 Jan", EOO: 73.5, Avalability: 81, Preformance: 87, Quality: 61 },
  { name: "24 Jan", EOO: 72.5, Avalability: 80.5, Preformance: 86, Quality: 67 },
  { name: "24 Jan", EOO: 71.5, Avalability: 76, Preformance: 82, Quality: 61 },
  { name: "24 Jan", EOO: 70, Avalability: 69, Preformance: 75, Quality: 50 },
  { name: "24 Jan", EOO: 69.5, Avalability: 63, Preformance: 64, Quality: 50 },
  { name: "24 Jan", EOO: 69.5, Avalability: 60, Preformance: 54, Quality: 63 },
  { name: "24 Jan", EOO: 71, Avalability: 65, Preformance: 60, Quality: 75 },
  { name: "24 Jan", EOO: 73, Avalability: 73, Preformance: 68, Quality: 67 },
  { name: "24 Jan", EOO: 74, Avalability: 78, Preformance: 73, Quality: 58 },
  { name: "24 Jan", EOO: 74.5, Avalability: 77.5, Preformance: 75, Quality: 66 },
  { name: "24 Jan", EOO: 74, Avalability: 73, Preformance: 74, Quality: 76 },
  { name: "24 Jan", EOO: 72, Avalability: 67, Preformance: 72, Quality: 79 },
  { name: "24 Jan", EOO: 69, Avalability: 61, Preformance: 67, Quality: 76 },
  { name: "24 Jan", EOO: 71, Avalability: 63, Preformance: 60, Quality: 65 },
  { name: "24 Jan", EOO: 77, Avalability: 75, Preformance: 66, Quality: 65 },
  { name: "24 Jan", EOO: 87, Avalability: 90, Preformance: 87, Quality: 60 },
];

function OverTimeTab() {
  return (
    <div className="flex flex-col w-full bg-white h-[280px] sm:h-[350px] lg:h-[400px]">
      {/* 1. Container الرسمة الأساسية (بدون تواريخ) */}
      <div className="h-[300px] sm:h-[370px] lg:h-[425px] w-full overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="2 4" stroke="#e2e8f0" />
            <YAxis 
              domain={[0, 100]} 
              ticks={[50, 60, 70, 80, 90]} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#cbd5e1', fontSize: 13, fontWeight: 500 }}
              tickFormatter={(val) => `${val}%`}
            />
            {/* جعلنا الـ XAxis شفاف تماماً وبدون ارتفاع عشان نلغي الفجوة */}
            <XAxis dataKey="name" hide />
            <Tooltip />
            <Line type="monotone" dataKey="EOO" stroke="#1e293b" strokeWidth={5} dot={false} />
            <Line type="monotone" dataKey="Avalability" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 4, fill: '#f59e0b' }} />
            <Line type="monotone" dataKey="Preformance" stroke="#ec4899" strokeWidth={2.5} dot={{ r: 4, fill: '#ec4899' }} />
            <Line type="monotone" dataKey="Quality" stroke="#06b6d4" strokeWidth={2.5} dot={{ r: 4, fill: '#06b6d4' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 2. خط التواريخ منفصل تماماً (لتحكم أدق) */}
      {/* الـ mt-[-8px] هنا بيتحكم في قرب التواريخ من الرسمة */}
      <div className="h-[30px] w-full mt-[-148px] sm:mt-[-148px] border-t border-[#00000085]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false} 
              tick={{ fill: '#cbd5e1', fontSize: 11, fontWeight: 600 }}
              interval={0} // إظهار كل التواريخ
              dy={-2} // رفع التواريخ لفوق داخل الـ Container بتاعها
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 3. الـ Legend (تسميات الألوان) */}
      <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 mt-4 sm:mt-8 pr-2 sm:pr-6">
        {[
          { label: "EOO", color: "#1e293b" },
          { label: "Avalability", color: "#f59e0b" },
          { label: "Preformance", color: "#ec4899" },
          { label: "Quality", color: "#06b6d4" }
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="w-6 h-[4px] rounded-sm" style={{ background: item.color }} />
            <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-bold text-[#475569]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverTimeTab;