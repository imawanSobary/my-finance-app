import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Reports = () => {
    return (
        <div className="bg-[var(--color-background)] text-[var(--color-text)] h-screen flex overflow-hidden selection:bg-[var(--color-primary)] selection:text-black transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 bg-[var(--color-background)] transition-colors duration-300">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-8 relative">
                    <div className="max-w-7xl mx-auto flex flex-col gap-8">
                        <div>
                            <h2 className="text-4xl font-black text-[var(--color-text)] tracking-tight mb-2">Financial Reports</h2>
                            <p className="text-[var(--color-text-muted)]">Visualize your financial health and growth.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Placeholder for Charts */}
                            <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] shadow-lg min-h-[300px] flex flex-col items-center justify-center text-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-surface-light)] flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">pie_chart</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-text)]">Spending Analysis</h3>
                                    <p className="text-[var(--color-text-muted)]">Chart integration coming soon...</p>
                                </div>
                            </div>

                            <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] shadow-lg min-h-[300px] flex flex-col items-center justify-center text-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-surface-light)] flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[var(--color-success)] text-3xl">ssid_chart</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-text)]">Income vs Expense</h3>
                                    <p className="text-[var(--color-text-muted)]">Chart integration coming soon...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Reports;
