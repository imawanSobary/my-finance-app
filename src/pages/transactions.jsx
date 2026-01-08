import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Transactions = () => {
    const [filter, setFilter] = useState('All');

    const transactions = [
        { id: 1, title: 'Netflix Subscription', date: 'Jan 08, 2026', amount: -180000, type: 'expense', category: 'Entertainment', account: 'Main Account', icon: 'movie' },
        { id: 2, title: 'Freelance Project', date: 'Jan 07, 2026', amount: 3500000, type: 'income', category: 'Income', account: 'Main Account', icon: 'work' },
        { id: 3, title: 'Groceries', date: 'Jan 05, 2026', amount: -450000, type: 'expense', category: 'Food', account: 'Savings', icon: 'shopping_cart' },
        { id: 4, title: 'Topup GoPay', date: 'Jan 04, 2026', amount: -500000, type: 'transfer', category: 'Transfer', account: 'Main Account', icon: 'swap_horiz' },
        { id: 5, title: 'Electricity Bill', date: 'Jan 03, 2026', amount: -750000, type: 'expense', category: 'Utilities', account: 'Main Account', icon: 'bolt' },
        { id: 6, title: 'Dining Out', date: 'Jan 02, 2026', amount: -250000, type: 'expense', category: 'Food', account: 'GoPay', icon: 'restaurant' },
        { id: 7, title: 'Interest', date: 'Jan 01, 2026', amount: 15000, type: 'income', category: 'Interest', account: 'Savings', icon: 'savings' },
    ];

    const filteredTransactions = filter === 'All' ? transactions : transactions.filter(t => t.type === filter.toLowerCase());

    return (
        <div className="bg-[var(--color-background)] text-[var(--color-text)] h-screen flex overflow-hidden selection:bg-[var(--color-primary)] selection:text-black transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 bg-[var(--color-background)] transition-colors duration-300">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-8 relative">
                    <div className="max-w-7xl mx-auto flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <h2 className="text-4xl font-black text-[var(--color-text)] tracking-tight mb-2">Transactions</h2>
                                <p className="text-[var(--color-text-muted)]">History of your income and expenses.</p>
                            </div>
                            <div className="flex gap-2">
                                {['All', 'Income', 'Expense', 'Transfer'].map(f => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === f ? 'bg-[var(--color-primary)] text-[#0f1e23] font-bold shadow-[0_0_10px_rgba(6,188,249,0.4)]' : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-white border border-[var(--color-border)]'}`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Transactions List */}
                        <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] shadow-lg overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[var(--color-border)] text-[var(--color-text-muted)] text-sm">
                                        <th className="p-4 font-medium">Description</th>
                                        <th className="p-4 font-medium">Category</th>
                                        <th className="p-4 font-medium">Account</th>
                                        <th className="p-4 font-medium">Date</th>
                                        <th className="p-4 font-medium text-right">Amount</th>
                                        <th className="p-4 font-medium text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTransactions.map((tx) => (
                                        <tr key={tx.id} className="border-b border-[var(--color-border)] last:border-none hover:bg-[var(--color-hover)] transition-colors group">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === 'income' ? 'bg-[#10b981]/10 text-[#10b981]' : (tx.type === 'expense' ? 'bg-[#fa5f38]/10 text-[#fa5f38]' : 'bg-[#06bcf9]/10 text-[#06bcf9]')}`}>
                                                        <span className="material-symbols-outlined text-xl">{tx.icon}</span>
                                                    </div>
                                                    <span className="font-bold text-[var(--color-text)]">{tx.title}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-[var(--color-text-muted)]">{tx.category}</td>
                                            <td className="p-4 text-[var(--color-text-muted)]">{tx.account}</td>
                                            <td className="p-4 text-[var(--color-text-muted)] text-sm">{tx.date}</td>
                                            <td className={`p-4 text-right font-bold ${tx.amount > 0 ? 'text-[#10b981]' : 'text-[var(--color-text)]'}`}>
                                                {tx.amount > 0 ? '+' : ''} Rp {Math.abs(tx.amount).toLocaleString()}
                                            </td>
                                            <td className="p-4 text-center">
                                                <button className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all">
                                                    <span className="material-symbols-outlined">edit</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {filteredTransactions.length === 0 && (
                                <div className="p-8 text-center text-[var(--color-text-muted)]">
                                    No transactions found for this filter.
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Transactions;
