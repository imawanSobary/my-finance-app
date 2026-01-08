import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { theme, toggleTheme } = useTheme();

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you would typically validate against a backend
        navigate('/dashboard');
    };

    return (
        // Added overflow-hidden to prevent potential scrollbars from background effects
        <div className="flex h-screen bg-[var(--color-background)] text-[var(--color-text)] relative overflow-hidden transition-colors duration-300">

            {/* Theme Toggle in Top Right */}
            <div className="absolute top-6 right-6 z-20">
                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] shadow-lg transition-all"
                >
                    <span className="material-symbols-outlined">
                        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                    </span>
                </button>
            </div>

            {/* Background Elements - Subtler opacity for light mode consideration could be added via variables if needed */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary-dark)]/5 rounded-full blur-3xl"></div>
            </div>

            {/* Login Container */}
            <div className="w-full max-w-md m-auto bg-[var(--color-surface)]/80 backdrop-blur-xl p-8 rounded-2xl border border-[var(--color-border)] shadow-2xl relative z-10 animate-fadeIn">
                <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20">
                        <span className="material-symbols-outlined text-[#0f1e23] text-3xl">account_balance_wallet</span>
                    </div>
                </div>

                <h2 className="text-3xl font-black text-center mb-2 tracking-tight">Welcome Back</h2>
                <p className="text-[var(--color-text-muted)] text-center mb-8">Enter your credentials to access your finance dashboard.</p>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-muted)] mb-2" htmlFor="email">Email Address</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 material-symbols-outlined text-[var(--color-text-muted)] text-xl">mail</span>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-xl focus:border-[var(--color-primary)] focus:bg-[var(--color-surface-light)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-[var(--color-text)] placeholder-[var(--color-text-muted)]"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-bold text-[var(--color-text-muted)]" htmlFor="password">Password</label>
                            <a href="#" className="text-xs text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium">Forgot Password?</a>
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-3 material-symbols-outlined text-[var(--color-text-muted)] text-xl">lock</span>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-xl focus:border-[var(--color-primary)] focus:bg-[var(--color-surface-light)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-[var(--color-text)] placeholder-[var(--color-text-muted)]"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-[#0f1e23] font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(6,188,249,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-[var(--color-text-muted)]">
                    Don't have an account? <a href="/register" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-bold">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
