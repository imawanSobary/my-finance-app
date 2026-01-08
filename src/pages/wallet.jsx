import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Wallet = () => {
    return (
        <div className="bg-[var(--color-background)] text-[var(--color-text)] h-screen flex overflow-hidden selection:bg-[var(--color-primary)] selection:text-black transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 bg-[var(--color-background)] transition-colors duration-300">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-8 relative">
                    <div className="max-w-7xl mx-auto flex flex-col gap-8">
                        <div className="flex justify-between items-end">
                            <div>
                                <h2 className="text-4xl font-black text-[var(--color-text)] tracking-tight mb-2">My Wallet</h2>
                                <p className="text-[var(--color-text-muted)]">Manage your e-wallets and digital cards.</p>
                            </div>
                            <button className="bg-[var(--color-primary)] text-[#0f1e23] px-6 py-3 rounded-xl font-bold shadow-[0_0_15px_rgba(6,188,249,0.4)] hover:scale-105 transition-transform">
                                + Add New Wallet
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Wallet Card 1 */}
                            <div className="relative overflow-hidden bg-gradient-to-br from-[#06bcf9] to-[#05a0d3] rounded-2xl p-6 shadow-lg text-[#0f1e23] h-56 flex flex-col justify-between">
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="flex justify-between items-start z-10">
                                    <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
                                    <span className="font-bold text-lg opacity-80">GoPay</span>
                                </div>
                                <div className="z-10">
                                    <p className="text-sm font-medium opacity-70 mb-1">Balance</p>
                                    <h3 className="text-3xl font-black">Rp 450.000</h3>
                                </div>
                                <div className="flex justify-between items-end z-10">
                                    <p className="font-mono opacity-80">0812-****-7890</p>
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                    </div>
                                </div>
                            </div>

                            {/* Wallet Card 2 */}
                            <div className="relative overflow-hidden bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl p-6 shadow-lg text-white h-56 flex flex-col justify-between">
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="flex justify-between items-start z-10">
                                    <span className="material-symbols-outlined text-3xl">payments</span>
                                    <span className="font-bold text-lg opacity-80">OVO</span>
                                </div>
                                <div className="z-10">
                                    <p className="text-sm font-medium opacity-70 mb-1">Balance</p>
                                    <h3 className="text-3xl font-black">Rp 125.000</h3>
                                </div>
                                <div className="flex justify-between items-end z-10">
                                    <p className="font-mono opacity-80">0812-****-7890</p>
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm">arrow_outward</span>
                                    </div>
                                </div>
                            </div>

                            {/* Add More Placeholder */}
                            <div className="bg-[var(--color-surface)] border-2 border-dashed border-[var(--color-border)] rounded-2xl flex flex-col items-center justify-center gap-4 text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer h-56">
                                <span className="material-symbols-outlined text-4xl">add_circle</span>
                                <span className="font-bold">Connect Wallet</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Wallet;
