
import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis 
} from 'recharts';
import { SUMMARY, DEMOGRAPHICS, DISABILITIES, WATER_TREATMENT, WASTE_DESTINATION, ELECTRICITY, COLORS } from './constants';

const KpiCard: React.FC<{ title: string; value: string | number; subtitle?: string; colorClass?: string; icon: React.ReactNode }> = ({ title, value, subtitle, colorClass = "text-blue-600 bg-blue-50", icon }) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-5 transition-all hover:shadow-lg hover:-translate-y-1">
    <div className={`p-4 rounded-2xl ${colorClass}`}>
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</p>
      <h3 className="text-3xl font-black text-slate-900 leading-none mt-1">{value}</h3>
      {subtitle && <p className="text-[10px] text-slate-400 font-medium mt-1">{subtitle}</p>}
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'geral' | 'demografia' | 'infraestrutura'>('geral');

  const totalGender = {
    masc: 3775,
    fem: 3908,
  };

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 antialiased pb-12">
      {/* Sidebar-style Header for a modern app feel */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-slate-900">Ariranha • Painel Territorial</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Relatório Consolidado SUS • Dez/2025</p>
            </div>
          </div>
          
          <nav className="flex p-1 bg-slate-100/50 rounded-2xl border border-slate-100">
            {(['geral', 'demografia', 'infraestrutura'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-xs font-black rounded-xl transition-all uppercase tracking-widest ${
                  activeTab === tab 
                    ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-100' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        
        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard title="Usuários" value={SUMMARY.users.toLocaleString('pt-BR')} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>}/>
          <KpiCard title="Domicílios" value={SUMMARY.households.toLocaleString('pt-BR')} colorClass="text-emerald-600 bg-emerald-50" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>}/>
          <KpiCard title="Famílias" value={SUMMARY.families.toLocaleString('pt-BR')} colorClass="text-indigo-600 bg-indigo-50" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>}/>
          <KpiCard title="Situação de Rua" value={SUMMARY.homeless} colorClass="text-rose-600 bg-rose-50" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}/>
        </div>

        {activeTab === 'geral' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-[40px] shadow-sm border border-slate-50">
              <div className="mb-8">
                <h2 className="text-xl font-black text-slate-900">Perfil Etário por Gênero</h2>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase">Distribuição populacional do território</p>
              </div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={DEMOGRAPHICS} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="range" fontSize={10} axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontWeight: 'bold'}} />
                    <YAxis fontSize={10} axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontWeight: 'bold'}} />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }} />
                    <Legend verticalAlign="top" align="right" iconType="circle" />
                    <Bar dataKey="masc" name="Masc" fill={COLORS.masc} radius={[6, 6, 0, 0]} barSize={20} />
                    <Bar dataKey="fem" name="Fem" fill={COLORS.fem} radius={[6, 6, 0, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-50 flex flex-col">
              <div className="mb-8 text-center">
                <h2 className="text-xl font-black text-slate-900">Necessidades Especiais</h2>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase">Pessoas com deficiência (PCD)</p>
              </div>
              <div className="h-[300px] flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={DISABILITIES}>
                    <PolarGrid stroke="#f1f5f9" />
                    <PolarAngleAxis dataKey="type" tick={{ fontSize: 10, fill: '#64748b', fontWeight: 'bold' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 50]} hide />
                    <Radar
                      name="Qtd"
                      dataKey="count"
                      stroke={COLORS.primary}
                      fill={COLORS.primary}
                      fillOpacity={0.1}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {DISABILITIES.map((d) => (
                   <div key={d.type} className="p-3 bg-slate-50 rounded-2xl flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{d.type}</span>
                      <span className="text-sm font-black text-slate-900">{d.count}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'demografia' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-50">
               <h2 className="text-xl font-black mb-6">Equilíbrio de Gênero</h2>
               <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Masculino', value: totalGender.masc },
                          { name: 'Feminino', value: totalGender.fem }
                        ]}
                        innerRadius={80}
                        outerRadius={110}
                        paddingAngle={10}
                        dataKey="value"
                      >
                        <Cell key="masc" fill={COLORS.masc} />
                        <Cell key="fem" fill={COLORS.fem} />
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
               </div>
               <div className="mt-8 flex justify-around">
                  <div className="text-center">
                    <div className="text-4xl font-black text-blue-600">{totalGender.masc}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Homens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-pink-500">{totalGender.fem}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Mulheres</div>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-50">
               <h2 className="text-xl font-black mb-6">Piramíde Etária (Inversa)</h2>
               <div className="space-y-3">
                  {DEMOGRAPHICS.slice(0).reverse().map(d => (
                    <div key={d.range} className="flex items-center space-x-4">
                      <span className="w-20 text-[10px] font-bold text-slate-400 text-right uppercase">{d.range}</span>
                      <div className="flex-grow h-6 bg-slate-50 rounded-full overflow-hidden flex">
                        <div 
                          className="bg-blue-500 h-full transition-all duration-1000" 
                          style={{ width: `${(d.masc / SUMMARY.users) * 200}%` }}
                        ></div>
                        <div 
                          className="bg-pink-400 h-full border-l border-white/20 transition-all duration-1000" 
                          style={{ width: `${(d.fem / SUMMARY.users) * 200}%` }}
                        ></div>
                      </div>
                      <span className="w-12 text-[10px] font-black text-slate-900">{d.total}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'infraestrutura' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-50">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-black text-slate-900">Qualidade da Água</h2>
                  <p className="text-xs font-bold text-rose-500 uppercase mt-1">Alerta: {WATER_TREATMENT[0].value} Domicílios sem tratamento</p>
                </div>
              </div>
              <div className="h-72">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={WATER_TREATMENT}>
                       <XAxis dataKey="label" fontSize={9} axisLine={false} tickLine={false} tick={{fontWeight: 'bold'}} />
                       <Tooltip />
                       <Bar dataKey="value" name="Domicílios" radius={[10, 10, 10, 10]}>
                         {WATER_TREATMENT.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={index === 0 ? COLORS.danger : COLORS.success} />
                         ))}
                       </Bar>
                    </BarChart>
                 </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
               <div className="bg-slate-900 p-8 rounded-[40px] text-white shadow-2xl shadow-slate-200">
                  <h3 className="text-lg font-black mb-6 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                    Matriz Energética
                  </h3>
                  <div className="space-y-6">
                    {ELECTRICITY.map((e, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
                          <span className="text-slate-400">{e.label}</span>
                          <span className="text-white">{e.value} Unidades</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${idx === 0 ? 'bg-yellow-400' : 'bg-slate-700'}`} 
                            style={{ width: `${(e.value / 3640) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="bg-emerald-600 p-8 rounded-[40px] text-white flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-black">Coleta de Lixo</h3>
                    <p className="text-xs font-bold text-emerald-100 uppercase mt-1">Eficiência da Zeladoria</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-black">99.4%</div>
                    <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest">Atendimento</p>
                  </div>
               </div>
            </div>
          </div>
        )}

      </main>

      <footer className="max-w-7xl mx-auto px-6 pt-12 text-center">
        <div className="inline-block p-4 bg-white border border-slate-100 rounded-3xl">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
             Dados oficiais Ariranha/SP • Extraídos em 18/01/2026 • Analista: João Batista Appendino
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
