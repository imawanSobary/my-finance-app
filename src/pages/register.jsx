import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { theme, toggleTheme } = useTheme();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Add registration logic here
        navigate('/login');
    };

    return (
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

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-primary-dark)]/5 rounded-full blur-3xl"></div>
            </div>

            {/* Register Container */}
            <div className="w-full max-w-md m-auto bg-[var(--color-surface)]/80 backdrop-blur-xl p-8 rounded-2xl border border-[var(--color-border)] shadow-2xl relative z-10 animate-fadeIn">
                <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20">
                        <span className="material-symbols-outlined text-[#0f1e23] text-3xl">account_balance_wallet</span>
                    </div>
                </div>

                <h2 className="text-3xl font-black text-center mb-2 tracking-tight">Create Account</h2>
                <p className="text-[var(--color-text-muted)] text-center mb-6">Join FinanceFlow to manage your wealth.</p>

                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-muted)] mb-2" htmlFor="fullName">Full Name</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 material-symbols-outlined text-[var(--color-text-muted)] text-xl">person</span>
                            <input
                                type="text"
                                id="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-xl focus:border-[var(--color-primary)] focus:bg-[var(--color-surface-light)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-[var(--color-text)] placeholder-[var(--color-text-muted)]"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-muted)] mb-2" htmlFor="email">Email Address</label>
                        <div className="relative">
                            <span className="absolute left-3 top-3 material-symbols-outlined text-[var(--color-text-muted)] text-xl">mail</span>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-xl focus:border-[var(--color-primary)] focus:bg-[var(--color-surface-light)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-[var(--color-text)] placeholder-[var(--color-text-muted)]"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-[var(--color-text-muted)] mb-2" htmlFor="password">Password</label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 material-symbols-outlined text-[var(--color-text-muted)] text-xl">lock</span>
                                <input
                                    type="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-xl focus:border-[var(--color-primary)] focus:bg-[var(--color-surface-light)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-[var(--color-text)] placeholder-[var(--color-text-muted)]"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-[var(--color-text-muted)] mb-2" htmlFor="confirmPassword">Confirm</label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 material-symbols-outlined text-[var(--color-text-muted)] text-xl">lock_reset</span>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-xl focus:border-[var(--color-primary)] focus:bg-[var(--color-surface-light)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-[var(--color-text)] placeholder-[var(--color-text-muted)]"
                                    placeholder="Confirm"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-[#0f1e23] font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(6,188,249,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        create Account
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-[var(--color-text-muted)]">
                    Already have an account? <a href="/" className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-bold">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
