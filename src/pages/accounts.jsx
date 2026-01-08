import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Accounts = () => {
    const accounts = [
        {
            id: 1,
            name: 'Main Account',
            bank: 'BCA',
            number: '**** **** **** 1234',
            balance: 15450000,
            type: 'Checking',
            color: 'from-[#06bcf9] to-[#05a0d3]',
            icon: 'account_balance'
        },
        {
            id: 2,
            name: 'Savings',
            bank: 'Mandiri',
            number: '**** **** **** 5678',
            balance: 25000000,
            type: 'Savings',
            color: 'from-[#fa5f38] to-[#ff8c6b]',
            icon: 'savings'
        },
        {
            id: 3,
            name: 'E-Wallet',
            bank: 'GoPay',
            number: '0812-3456-7890',
            balance: 450000,
            type: 'E-Wallet',
            color: 'from-[#10b981] to-[#34d399]',
            icon: 'account_balance_wallet'
        },
        {
            id: 4,
            name: 'Investments',
            bank: 'Bibit',
            number: 'Reksadana',
            balance: 12000000,
            type: 'Investment',
            color: 'from-[#8b5cf6] to-[#a78bfa]',
            icon: 'trending_up'
        }
    ];

    const transactions = [
        { id: 1, title: 'Netflix Subscription', date: 'Jan 08, 2026', amount: -180000, type: 'expense', account: 'Main Account' },
        { id: 2, title: 'Freelance Project', date: 'Jan 07, 2026', amount: 3500000, type: 'income', account: 'Main Account' },
        { id: 3, title: 'Groceries', date: 'Jan 05, 2026', amount: -450000, type: 'expense', category: 'Food', account: 'Savings' },
        { id: 4, title: 'Topup GoPay', date: 'Jan 04, 2026', amount: -500000, type: 'transfer', account: 'Main Account' },
    ];

    return (
        <div className="bg-[var(--color-background)] text-[var(--color-text)] h-screen flex overflow-hidden selection:bg-[var(--color-primary)] selection:text-black transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0 bg-[var(--color-background)] transition-colors duration-300">
                <Navbar />

                <main className="flex-1 overflow-y-auto p-8 relative">
                    {/* Background gradient */}
                    <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent pointer-events-none z-0"></div>

                    <div className="relative z-0 max-w-7xl mx-auto flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                            <div>
                                <h2 className="text-4xl font-black text-[var(--color-text)] tracking-tight mb-2">My Accounts</h2>
                                <p className="text-[var(--color-text-muted)]">Manage your bank accounts, wallets, and cash.</p>
                            </div>
                            <button className="flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-[#0f1e23] px-5 py-2.5 rounded-lg font-bold shadow-[0_0_15px_rgba(6,188,249,0.4)] transition-all hover:scale-105 active:scale-95">
                                <span className="material-symbols-outlined text-xl">add</span>
                                Add New Account
                            </button>
                        </div>

                        {/* Accounts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {accounts.map(acc => (
                                <div key={acc.id} className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all shadow-lg group relative overflow-hidden">
                                    <div className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${acc.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>

                                    <div className="flex justify-between items-start mb-6 z-10 relative">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${acc.color} flex items-center justify-center text-white shadow-lg`}>
                                            <span className="material-symbols-outlined">{acc.icon}</span>
                                        </div>
                                        <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </div>

                                    <div className="mb-6 relative z-10">
                                        <p className="text-[var(--color-text-muted)] text-sm mb-1">{acc.bank} - {acc.type}</p>
                                        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">{acc.name}</h3>
                                        <p className="text-[var(--color-text-muted)]/80 font-mono text-sm tracking-wider">{acc.number}</p>
                                    </div>

                                    <div className="flex justify-between items-end relative z-10 border-t border-[var(--color-border)] pt-4">
                                        <div>
                                            <p className="text-[var(--color-text-muted)] text-xs mb-1">Available Balance</p>
                                            <p className="text-xl font-bold text-[var(--color-text)]">Rp {acc.balance.toLocaleString()}</p>
                                        </div>
                                        <button className="p-2 rounded-lg bg-[var(--color-surface-light)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[#0f1e23] transition-all">
                                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Transactions Section */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-[var(--color-text)]">Recent Transactions</h3>
                            <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-lg">
                                {transactions.map((tx, idx) => (
                                    <div key={tx.id} className={`p-4 flex items-center justify-between hover:bg-[var(--color-hover)] transition-colors ${idx !== transactions.length - 1 ? 'border-b border-[var(--color-border)]' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'income' ? 'bg-[#10b981]/10 text-[#10b981]' : (tx.type === 'expense' ? 'bg-[#fa5f38]/10 text-[#fa5f38]' : 'bg-[#06bcf9]/10 text-[#06bcf9]')}`}>
                                                <span className="material-symbols-outlined text-xl">
                                                    {tx.type === 'income' ? 'arrow_downward' : (tx.type === 'expense' ? 'arrow_upward' : 'swap_horiz')}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-[var(--color-text)] font-medium">{tx.title}</p>
                                                <p className="text-[var(--color-text-muted)] text-xs">{tx.date} • {tx.account}</p>
                                            </div>
                                        </div>
                                        <span className={`font-bold ${tx.amount > 0 ? 'text-[#10b981]' : 'text-[var(--color-text)]'}`}>
                                            {tx.amount > 0 ? '+' : ''} Rp {Math.abs(tx.amount).toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Accounts;
