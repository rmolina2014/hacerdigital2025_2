import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const data = [
  { month: 'Ene', sales: 4000, traffic: 2400 },
  { month: 'Feb', sales: 3000, traffic: 1398 },
  { month: 'Mar', sales: 2000, traffic: 9800 },
  { month: 'Abr', sales: 2780, traffic: 3908 },
  { month: 'May', sales: 1890, traffic: 4800 },
  { month: 'Jun', sales: 2390, traffic: 3800 },
  { month: 'Jul', sales: 3490, traffic: 4300 },
];

const DataVizDemo: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'area' | 'bar'>('area');

  return (
    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 h-[500px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Tablero de Control (KPIs)</h3>
          <p className="text-sm text-slate-400">Ejemplo: Ventas vs Tráfico Web</p>
        </div>
        <div className="flex bg-slate-700 rounded-lg p-1">
          <button
            onClick={() => setActiveChart('area')}
            className={`px-4 py-1 rounded-md text-sm font-medium transition-all ${
              activeChart === 'area' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Tendencia
          </button>
          <button
            onClick={() => setActiveChart('bar')}
            className={`px-4 py-1 rounded-md text-sm font-medium transition-all ${
              activeChart === 'bar' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Comparativo
          </button>
        </div>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          {activeChart === 'area' ? (
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f8fafc' }}
                itemStyle={{ color: '#e2e8f0' }}
              />
              <Area type="monotone" dataKey="sales" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSales)" name="Ventas" />
              <Area type="monotone" dataKey="traffic" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorTraffic)" name="Tráfico" />
            </AreaChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f8fafc' }}
                cursor={{fill: '#334155', opacity: 0.4}}
              />
              <Legend />
              <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Ventas" />
              <Bar dataKey="traffic" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Tráfico" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataVizDemo;