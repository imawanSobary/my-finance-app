import React, { useState } from 'react';

const Navbar = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <header className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-sidebar)]/90 backdrop-blur-md px-8 py-4 sticky top-0 z-10 transition-colors duration-300">
            {/* Search */}
            <div className="flex-1 max-w-md hidden md:flex">
                <div className="relative w-full group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-[var(--color-text-muted)] group-focus-within:text-[var(--color-primary)] transition-colors">search</span>
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl leading-5 bg-[var(--color-input-bg)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:bg-[var(--color-surface-light)] text-sm transition-all shadow-sm"
                        placeholder="Search categories, transactions..."
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 ml-auto">
                {/* Notifications */}
                <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 rounded-lg text-[var(--color-text-muted)] hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-colors"
                >
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--color-primary)] rounded-full shadow-[0_0_8px_rgba(6,188,249,0.5)]"></span>
                </button>

                {/* Messages */}
                <button className="p-2 rounded-lg text-[var(--color-text-muted)] hover:bg-[var(--color-hover)] hover:text-[var(--color-text)] transition-colors">
                    <span className="material-symbols-outlined">chat_bubble</span>
                </button>

                {/* Divider */}
                <div className="h-8 w-px bg-[var(--color-border)] mx-2"></div>

                {/* Profile */}
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-[var(--color-text)]">Alex Morgan</p>
                        <p className="text-xs text-[var(--color-text-muted)]">Premium Plan</p>
                    </div>
                    <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full w-10 h-10 flex items-center justify-center border border-[var(--color-border)] shadow-md">
                        <span className="material-symbols-outlined text-[#0f1e23]">person</span>
                    </div>
                </div>
            </div>

            {/* Notifications Dropdown */}
            {showNotifications && (
                <div className="absolute right-8 top-16 w-80 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] shadow-xl overflow-hidden animate-fadeIn z-50">
                    <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between">
                        <h3 className="font-bold text-[var(--color-text)] flex items-center gap-2">
                            <span className="material-symbols-outlined text-[var(--color-warning)]">notifications_active</span>
                            Notifications
                        </h3>
                        <button className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Clear all</button>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                        <div className="bg-[var(--color-warning)]/10 border-b border-[var(--color-warning)]/20 p-4 flex gap-3 items-start">
                            <span className="material-symbols-outlined text-[var(--color-warning)] text-sm mt-0.5">warning</span>
                            <div>
                                <p className="text-[var(--color-text)] text-sm font-medium">Over Budget</p>
                                <p className="text-[var(--color-text-muted)] text-xs mt-0.5">Groceries exceeded by <span className="text-[var(--color-text)] font-bold">$50</span>.</p>
                            </div>
                        </div>
                        <div className="bg-[var(--color-surface-light)] p-4 flex gap-3 items-start">
                            <span className="material-symbols-outlined text-[var(--color-primary)] text-sm mt-0.5">info</span>
                            <div>
                                <p className="text-[var(--color-text)] text-sm font-medium">Approaching Limit</p>
                                <p className="text-[var(--color-text-muted)] text-xs mt-0.5">Housing is at 80% of limit.</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-[var(--color-hover)] text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors">
                        View all notifications
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;
