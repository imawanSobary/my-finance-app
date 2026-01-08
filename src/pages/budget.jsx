import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Budget = () => {
    const budgets = [
        { category: 'Housing', spent: 7500000, total: 10000000, icon: 'cottage' },
        { category: 'Food & Dining', spent: 4200000, total: 5000000, icon: 'restaurant' },
        { category: 'Transportation', spent: 1800000, total: 2500000, icon: 'directions_car' },
        { category: 'Entertainment', spent: 1200000, total: 1500000, icon: 'movie' },
        { category: 'Shopping', spent: 3000000, total: 2000000, icon: 'shopping_bag', over: true },
    ];

    return (
        <div className="bg-[var(--color-background)] text-[var(--color-text)] h-screen flex overflow-hidden selection:bg-[var(--color-primary)] selection:text-black transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 bg-[var(--color-background)] transition-colors duration-300">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-8 relative">
                    <div className="max-w-5xl mx-auto flex flex-col gap-8">
                        <div>
                            <h2 className="text-4xl font-black text-[var(--color-text)] tracking-tight mb-2">Budget Planner</h2>
                            <p className="text-[var(--color-text-muted)]">Keep your expenses on track with monthly budgets.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {budgets.map((item, idx) => {
                                const percent = Math.min((item.spent / item.total) * 100, 100);
                                const isOver = item.spent > item.total;
                                const color = isOver ? '#fa5f38' : (percent > 80 ? '#fbbf24' : '#06bcf9'); // Red, Warning, or Blue

                                return (
                                    <div key={idx} className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] shadow-md hover:shadow-lg transition-all">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-xl bg-[var(--color-surface-light)] flex items-center justify-center text-[var(--color-primary)]`}>
                                                    <span className="material-symbols-outlined" style={{ color: color }}>{item.icon}</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-[var(--color-text)]">{item.category}</h3>
                                                    <p className="text-[var(--color-text-muted)] text-sm">
                                                        {isOver ? 'Over Budget' : `${100 - Math.round(percent)}% remaining`}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-[var(--color-text)]">Rp {item.spent.toLocaleString()}</p>
                                                <p className="text-[var(--color-text-muted)] text-sm">of Rp {item.total.toLocaleString()}</p>
                                            </div>
                                        </div>

                                        <div className="h-4 w-full bg-[var(--color-surface-lighter)] rounded-full overflow-hidden mb-2">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000"
                                                style={{ width: `${percent}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}80` }}
                                            ></div>
                                        </div>

                                        <div className="flex justify-between text-xs font-semibold">
                                            <span style={{ color: color }}>{Math.round(percent)}% Used</span>
                                            <span className="text-[var(--color-text-muted)]">
                                                {isOver
                                                    ? <span className="text-[#fa5f38]">+ Rp {(item.spent - item.total).toLocaleString()} Over</span>
                                                    : `Rp ${(item.total - item.spent).toLocaleString()} Left`
                                                }
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Budget;
