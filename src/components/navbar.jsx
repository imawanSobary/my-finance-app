import React, { useState } from 'react';

const Navbar = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <header className="flex items-center justify-between border-b border-[#27353a] bg-[#111618]/90 backdrop-blur-md px-8 py-4 sticky top-0 z-10">
            {/* Search */}
            <div className="flex-1 max-w-md hidden md:flex">
                <div className="relative w-full group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-[#9bb3bb] group-focus-within:text-[#06bcf9] transition-colors">search</span>
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl leading-5 bg-[#1e293b] text-white placeholder-[#9bb3bb] focus:outline-none focus:ring-1 focus:ring-[#06bcf9] focus:bg-[#22343a] text-sm transition-all"
                        placeholder="Search categories, transactions..."
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 ml-auto">
                {/* Notifications */}
                <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 rounded-lg text-[#9bb3bb] hover:bg-[#1e293b] hover:text-white transition-colors"
                >
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[#06bcf9] rounded-full shadow-[0_0_8px_rgba(6,188,249,0.5)]"></span>
                </button>

                {/* Messages */}
                <button className="p-2 rounded-lg text-[#9bb3bb] hover:bg-[#1e293b] hover:text-white transition-colors">
                    <span className="material-symbols-outlined">chat_bubble</span>
                </button>

                {/* Divider */}
                <div className="h-8 w-px bg-[#27353a] mx-2"></div>

                {/* Profile */}
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">Alex Morgan</p>
                        <p className="text-xs text-[#9bb3bb]">Premium Plan</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#06bcf9] to-[#05a0d3] rounded-full w-10 h-10 flex items-center justify-center border border-[#27353a]">
                        <span className="material-symbols-outlined text-[#0f1e23]">person</span>
                    </div>
                </div>
            </div>

            {/* Notifications Dropdown */}
            {showNotifications && (
                <div className="absolute right-8 top-16 w-80 bg-[#18282d] rounded-xl border border-[#27353a] shadow-lg overflow-hidden animate-fadeIn z-50">
                    <div className="p-4 border-b border-[#27353a] flex items-center justify-between">
                        <h3 className="font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#fa5f38]">notifications_active</span>
                            Notifications
                        </h3>
                        <button className="text-xs text-[#9bb3bb] hover:text-white">Clear all</button>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                        <div className="bg-[#fa5f38]/10 border-b border-[#fa5f38]/20 p-4 flex gap-3 items-start">
                            <span className="material-symbols-outlined text-[#fa5f38] text-sm mt-0.5">warning</span>
                            <div>
                                <p className="text-white text-sm font-medium">Over Budget</p>
                                <p className="text-[#9bb3bb] text-xs mt-0.5">Groceries exceeded by <span className="text-white font-bold">$50</span>.</p>
                            </div>
                        </div>
                        <div className="bg-[#22343a] p-4 flex gap-3 items-start">
                            <span className="material-symbols-outlined text-[#06bcf9] text-sm mt-0.5">info</span>
                            <div>
                                <p className="text-white text-sm font-medium">Approaching Limit</p>
                                <p className="text-[#9bb3bb] text-xs mt-0.5">Housing is at 80% of limit.</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-[#27353a] text-sm font-medium text-white hover:bg-[#3a4e55] transition-colors">
                        View all notifications
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;
