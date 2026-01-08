import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Default initial state matching the UI design for skeleton/loading or fallback
    const initialBudgetCategories = [
        { name: 'Housing', desc: 'Monthly rent & utilities', icon: 'cottage', spent: 0, budget: 15000000, percent: 0, backendKey: 'Bills & Utilities' },
        { name: 'Groceries', desc: 'Food & Supplies', icon: 'restaurant', spent: 0, budget: 6000000, percent: 0, backendKey: 'Food & Dining' },
        { name: 'Transport', desc: 'Fuel & Public Transit', icon: 'directions_car', spent: 0, budget: 3000000, percent: 0, backendKey: 'Transportation' },
        { name: 'Entertainment', desc: 'Movies & Streaming', icon: 'movie', spent: 0, budget: 2000000, percent: 0, backendKey: 'Entertainment' },
        { name: 'Shopping', desc: 'Clothing & Gadgets', icon: 'shopping_bag', spent: 0, budget: 5000000, percent: 0, backendKey: 'Shopping' },
    ];

    const [budgetCategories, setBudgetCategories] = useState(initialBudgetCategories);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Try to get user from local storage to check if logged in (optional for this demo as we use dummy data)
                const user = JSON.parse(localStorage.getItem('user'));
                const userId = user?.id || '';

                const response = await fetch(`http://localhost:8080/api/dashboard/summary${userId ? `?userId=${userId}` : ''}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch dashboard data');
                }

                const data = await response.json();
                setDashboardData(data);

                // Map backend data to budget categories
                if (data.expensesByCategory) {
                    const updatedCategories = initialBudgetCategories.map(cat => {
                        const spent = data.expensesByCategory[cat.backendKey] || 0;
                        const percent = Math.round((spent / cat.budget) * 100);
                        return {
                            ...cat,
                            spent: spent,
                            percent: percent,
                            isOver: percent > 100
                        };
                    });
                    setBudgetCategories(updatedCategories);
                }
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-[#0f1e23] text-white h-screen flex overflow-hidden selection:bg-[#06bcf9] selection:text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0 bg-[#0f1e23]">
                <Navbar />

                <main className="flex-1 overflow-y-auto p-8 relative">
                    {/* Background gradient */}
                    <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#06bcf9]/5 to-transparent pointer-events-none z-0"></div>

                    <div className="relative z-0 max-w-7xl mx-auto flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <h2 className="text-4xl font-black text-white tracking-tight mb-2">Monthly Budget</h2>
                                <p className="text-[#9bb3bb]">Track expenses and manage your savings goals.</p>
                            </div>
                            <div className="flex items-center gap-4 bg-[#1e293b] p-1.5 rounded-xl border border-[#27353a] shadow-lg">
                                <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#27353a] text-white transition-colors">
                                    <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
                                </button>
                                <div className="flex items-center gap-2 px-2 cursor-pointer group">
                                    <span className="material-symbols-outlined text-[#06bcf9]">calendar_month</span>
                                    <span className="text-sm font-bold w-28 text-center group-hover:text-[#06bcf9] transition-colors">January 2026</span>
                                </div>
                                <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#27353a] text-white transition-colors">
                                    <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                                </button>
                            </div>
                        </div>

                        {/* Top Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Budget Status Card */}
                            <div className="lg:col-span-2 bg-[#18282d] rounded-2xl p-6 border border-[#27353a] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#06bcf9]/5 rounded-full blur-3xl group-hover:bg-[#06bcf9]/10 transition-colors duration-500"></div>

                                <div className="flex flex-col gap-6 z-10 w-full">
                                    <div>
                                        <h3 className="text-[#9bb3bb] font-medium text-sm uppercase tracking-wider mb-1">Total Budget Status</h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold text-white">
                                                Rp {dashboardData ? dashboardData.totalExpenses.toLocaleString() : '0'}
                                            </span>
                                            <span className="text-[#9bb3bb] text-lg">/ Rp 35.000.000</span>
                                        </div>
                                        <p className="text-[#06bcf9] text-sm font-medium mt-2 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">trending_down</span>
                                            12% less than last month
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#111618] p-4 rounded-xl border border-[#27353a]">
                                            <p className="text-[#9bb3bb] text-xs mb-1">Remaining</p>
                                            <p className="text-white font-bold text-xl">
                                                Rp {dashboardData ? (35000000 - dashboardData.totalExpenses).toLocaleString() : '0'}
                                            </p>
                                        </div>
                                        <div className="bg-[#111618] p-4 rounded-xl border border-[#27353a]">
                                            <p className="text-[#9bb3bb] text-xs mb-1">Daily Avg</p>
                                            <p className="text-white font-bold text-xl">
                                                Rp {dashboardData ? Math.round(dashboardData.totalExpenses / 30).toLocaleString() : '0'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Circular Progress */}
                                <div className="relative w-40 h-40 flex-shrink-0 z-10">
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                        <path
                                            className="text-[#27353a]"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                        />
                                        <path
                                            className="text-[#06bcf9] drop-shadow-[0_0_4px_rgba(6,188,249,0.8)]"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeDasharray={`${dashboardData ? Math.min((dashboardData.totalExpenses / 35000000) * 100, 100) : 0}, 100`}
                                            strokeLinecap="round"
                                            strokeWidth="3"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl font-bold text-white">
                                            {dashboardData ? Math.round((dashboardData.totalExpenses / 35000000) * 100) : 0}%
                                        </span>
                                        <span className="text-[10px] text-[#9bb3bb] uppercase font-medium tracking-wider">Spent</span>
                                    </div>
                                </div>
                            </div>

                            {/* Alerts Card */}
                            <div className="bg-[#18282d] rounded-2xl p-6 border border-[#27353a] shadow-lg flex flex-col gap-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#fa5f38]">notifications_active</span>
                                        Alerts
                                    </h3>
                                    <button className="text-xs text-[#9bb3bb] hover:text-white">Clear all</button>
                                </div>
                                <div className="flex-1 flex flex-col gap-3">
                                    <div className="bg-[#fa5f38]/10 border border-[#fa5f38]/20 p-3 rounded-xl flex gap-3 items-start">
                                        <span className="material-symbols-outlined text-[#fa5f38] text-sm mt-0.5">warning</span>
                                        <div>
                                            <p className="text-white text-sm font-medium">Over Budget</p>
                                            <p className="text-[#9bb3bb] text-xs mt-0.5">Groceries exceeded by <span className="text-white font-bold">$50</span>.</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#22343a] p-3 rounded-xl flex gap-3 items-start">
                                        <span className="material-symbols-outlined text-[#06bcf9] text-sm mt-0.5">info</span>
                                        <div>
                                            <p className="text-white text-sm font-medium">Approaching Limit</p>
                                            <p className="text-[#9bb3bb] text-xs mt-0.5">Housing is at 80% of limit.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-auto w-full py-2 rounded-lg bg-[#27353a] text-sm font-medium text-white hover:bg-[#3a4e55] transition-colors">
                                    View all notifications
                                </button>
                            </div>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-[#22343a] text-white rounded-lg text-sm font-medium border border-[#27353a] hover:border-[#06bcf9]/50 hover:text-[#06bcf9] transition-colors">All Categories</button>
                                <button className="px-4 py-2 bg-transparent text-[#9bb3bb] rounded-lg text-sm font-medium hover:text-white transition-colors">Needs</button>
                                <button className="px-4 py-2 bg-transparent text-[#9bb3bb] rounded-lg text-sm font-medium hover:text-white transition-colors">Wants</button>
                                <button className="px-4 py-2 bg-transparent text-[#9bb3bb] rounded-lg text-sm font-medium hover:text-white transition-colors">Savings</button>
                            </div>
                            <button className="flex items-center gap-2 bg-[#06bcf9] hover:bg-[#05a0d3] text-[#0f1e23] px-5 py-2.5 rounded-lg font-bold shadow-[0_0_15px_rgba(6,188,249,0.4)] transition-all hover:scale-105 active:scale-95">
                                <span className="material-symbols-outlined text-xl">add</span>
                                Create New Budget
                            </button>
                        </div>

                        {/* Budget Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
                            {budgetCategories.map((cat, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#18282d] p-5 rounded-xl border ${cat.isOver ? 'border-[#fa5f38]/30 hover:border-[#fa5f38]' : 'border-[#27353a] hover:border-[#06bcf9]/50'} transition-all shadow-md ${cat.isOver ? 'hover:shadow-[0_0_15px_rgba(250,95,56,0.4)]' : 'hover:shadow-[0_0_8px_rgba(6,188,249,0.3)]'} group relative`}
                                >
                                    {cat.isOver && (
                                        <div className="absolute top-3 right-3">
                                            <span className="bg-[#fa5f38]/20 text-[#fa5f38] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-[#fa5f38]/20">Over Limit</span>
                                        </div>
                                    )}

                                    <div className={`flex justify-between items-start mb-6 ${cat.isOver ? 'mt-2' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl bg-[#22343a] flex items-center justify-center ${cat.isOver ? 'text-[#fa5f38]' : 'text-[#06bcf9]'} group-hover:scale-110 transition-transform duration-300`}>
                                                <span className="material-symbols-outlined">{cat.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg">{cat.name}</h4>
                                                <p className="text-[#9bb3bb] text-xs">{cat.desc}</p>
                                            </div>
                                        </div>
                                        <button className="text-[#9bb3bb] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </div>

                                    <div className="mb-2 flex justify-between items-end">
                                        <span className={`text-2xl font-bold ${cat.isOver ? 'text-[#fa5f38]' : 'text-white'}`}>
                                            Rp {cat.spent.toLocaleString()}
                                        </span>
                                        <span className="text-sm font-medium text-[#9bb3bb] mb-1">of Rp {cat.budget.toLocaleString()}</span>
                                    </div>

                                    <div className="h-2 w-full bg-[#111618] rounded-full overflow-hidden relative">
                                        <div
                                            className={`h-full ${cat.isOver ? 'bg-[#fa5f38]' : 'bg-[#06bcf9]'} rounded-full ${cat.isOver ? 'shadow-[0_0_10px_rgba(250,95,56,0.5)]' : 'shadow-[0_0_10px_rgba(6,188,249,0.5)]'}`}
                                            style={{ width: `${Math.min(cat.percent, 100)}%` }}
                                        ></div>
                                    </div>

                                    <div className="mt-2 flex justify-between text-xs font-medium">
                                        <span className={cat.isOver ? 'text-[#fa5f38]' : 'text-[#9bb3bb]'}>{cat.percent}% used</span>
                                        <span className={cat.isOver ? 'text-[#fa5f38]' : 'text-[#06bcf9]'}>
                                            {cat.isOver ? `-Rp ${(cat.spent - cat.budget).toLocaleString()} over` : `Rp ${(cat.budget - cat.spent).toLocaleString()} left`}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Add New Category Button */}
                            <button className="bg-[#111618] p-5 rounded-xl border border-dashed border-[#27353a] hover:border-[#06bcf9] hover:bg-[#18282d] transition-all group flex flex-col items-center justify-center min-h-[200px] gap-3">
                                <div className="w-14 h-14 rounded-full bg-[#1e293b] flex items-center justify-center group-hover:bg-[#06bcf9] group-hover:text-[#0f1e23] text-[#9bb3bb] transition-colors shadow-[0_0_8px_rgba(6,188,249,0.3)]">
                                    <span className="material-symbols-outlined text-3xl">add</span>
                                </div>
                                <span className="text-[#9bb3bb] font-medium group-hover:text-white">Add New Category</span>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
