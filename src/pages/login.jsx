import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Store token/user info if your backend sends it
                // For now assuming success means we can proceed
                localStorage.setItem('user', JSON.stringify(data));
                navigate('/dashboard');
            } else {
                setError(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            setError('Network error. Please try again.');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-[#0f1e23]">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#111618] via-[#18282d] to-[#0f1e23] p-12 flex-col justify-between relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-[#06bcf9]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#06bcf9]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06bcf9] to-[#05a0d3] flex items-center justify-center shadow-[0_0_15px_rgba(6,188,249,0.4)]">
                            <span className="material-symbols-outlined text-[#0f1e23] text-2xl">account_balance_wallet</span>
                        </div>
                        <span className="text-2xl font-bold text-white">FinanceFlow</span>
                    </div>
                </div>

                <div className="relative z-10 space-y-6">
                    <h1 className="text-4xl font-black text-white leading-tight tracking-tight">
                        Take Control of Your<br />
                        <span className="text-[#06bcf9]">Financial Future</span>
                    </h1>
                    <p className="text-[#9bb3bb] text-lg max-w-md">
                        Track expenses, manage budgets, and achieve your financial goals with our powerful yet simple finance management platform.
                    </p>

                    {/* Feature highlights */}
                    <div className="space-y-4 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#22343a] flex items-center justify-center border border-[#27353a]">
                                <span className="material-symbols-outlined text-[#06bcf9]">bar_chart</span>
                            </div>
                            <span className="text-white">Real-time financial analytics</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#22343a] flex items-center justify-center border border-[#27353a]">
                                <span className="material-symbols-outlined text-[#06bcf9]">shield</span>
                            </div>
                            <span className="text-white">Bank-level security</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#22343a] flex items-center justify-center border border-[#27353a]">
                                <span className="material-symbols-outlined text-[#06bcf9]">smartphone</span>
                            </div>
                            <span className="text-white">Access anywhere, anytime</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-[#9bb3bb] text-sm">
                    © 2026 FinanceFlow. All rights reserved.
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#0f1e23]">
                <div className="w-full max-w-md animate-fadeIn">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06bcf9] to-[#05a0d3] flex items-center justify-center shadow-[0_0_15px_rgba(6,188,249,0.4)]">
                            <span className="material-symbols-outlined text-[#0f1e23] text-2xl">account_balance_wallet</span>
                        </div>
                        <span className="text-2xl font-bold text-white">FinanceFlow</span>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-white tracking-tight">Welcome back!</h2>
                        <p className="text-[#9bb3bb] mt-2">Please enter your credentials to continue</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-[#fa5f38]/10 border border-[#fa5f38]/30 rounded-xl text-[#fa5f38] text-sm animate-fadeIn flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">warning</span>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-[#9bb3bb] mb-2">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-[#9bb3bb] group-focus-within:text-[#06bcf9] transition-colors">mail</span>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl leading-5 bg-[#1e293b] text-white placeholder-[#9bb3bb] focus:outline-none focus:ring-1 focus:ring-[#06bcf9] focus:bg-[#22343a] text-sm transition-all"
                                    placeholder="Enter your email"
                                    required
                                    padding="p-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#9bb3bb] mb-2">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-[#9bb3bb] group-focus-within:text-[#06bcf9] transition-colors">lock</span>
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-10 py-2.5 border-none rounded-xl leading-5 bg-[#1e293b] text-white placeholder-[#9bb3bb] focus:outline-none focus:ring-1 focus:ring-[#06bcf9] focus:bg-[#22343a] text-sm transition-all"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#9bb3bb] hover:text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-[#27353a] bg-[#1e293b] text-[#06bcf9] focus:ring-[#06bcf9]" />
                                <span className="text-sm text-[#9bb3bb]">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-[#06bcf9] hover:text-[#05a0d3] font-medium">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 bg-[#06bcf9] hover:bg-[#05a0d3] text-[#0f1e23] px-5 py-3 rounded-xl font-bold shadow-[0_0_15px_rgba(6,188,249,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#27353a]"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-[#0f1e23] text-[#9bb3bb]">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1e293b] border border-[#27353a] rounded-xl hover:bg-[#22343a] hover:border-[#06bcf9]/30 transition-all">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="text-sm font-medium text-white">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1e293b] border border-[#27353a] rounded-xl hover:bg-[#22343a] hover:border-[#06bcf9]/30 transition-all">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <span className="text-sm font-medium text-white">Apple</span>
                            </button>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-[#9bb3bb]">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-[#06bcf9] hover:text-[#05a0d3] font-semibold">
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
