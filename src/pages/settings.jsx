import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="bg-[var(--color-background)] text-[var(--color-text)] h-screen flex overflow-hidden selection:bg-[var(--color-primary)] selection:text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0 bg-[var(--color-background)]">
                <Navbar />

                <main className="flex-1 overflow-y-auto p-8 relative">
                    <div className="max-w-4xl mx-auto flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-black text-[var(--color-text)] tracking-tight mb-2">Settings</h2>
                            <p className="text-[var(--color-text-muted)]">Manage your preferences and account settings.</p>
                        </div>

                        {/* Appearance Section */}
                        <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] shadow-lg">
                            <h3 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[var(--color-primary)]">palette</span>
                                Appearance
                            </h3>

                            <div className="flex items-center justify-between p-4 bg-[var(--color-surface-lighter)] rounded-xl border border-[var(--color-border)]">
                                <div>
                                    <p className="text-[var(--color-text)] font-medium">Theme Mode</p>
                                    <p className="text-[var(--color-text-muted)] text-sm">Switch between light and dark themes</p>
                                </div>
                                <button
                                    onClick={toggleTheme}
                                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-surface)] ${theme === 'dark' ? 'bg-[var(--color-primary)]' : 'bg-gray-400'}`}
                                >
                                    <span
                                        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${theme === 'dark' ? 'translate-x-7' : 'translate-x-1'}`}
                                    />
                                    <span className="absolute left-2 text-[10px] text-white font-bold opacity-0 transition-opacity">
                                        {theme === 'dark' && <span className="material-symbols-outlined text-[10px]">dark_mode</span>}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Profile Section (Placeholder) */}
                        <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] shadow-lg">
                            <h3 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[var(--color-primary)]">person</span>
                                Profile
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Full Name</label>
                                    <input type="text" defaultValue="Alex Morgan" className="w-full bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Email Address</label>
                                    <input type="email" defaultValue="alex.morgan@example.com" className="w-full bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Settings;
