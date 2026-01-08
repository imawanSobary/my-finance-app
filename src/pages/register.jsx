import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/login'); // Redirect to login after registration
            } else {
                setError(data.message || 'Registration failed. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please try again.');
            console.error('Registration error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-[#0f1e23]">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f1e23] via-[#18282d] to-[#111618] p-12 flex-col justify-between relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-40 right-20 w-80 h-80 bg-[#fa5f38]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-40 left-20 w-72 h-72 bg-[#06bcf9]/10 rounded-full blur-3xl"></div>
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
                        Start Your Journey to<br />
                        <span className="text-[#06bcf9]">Financial Freedom</span>
                    </h1>
                    <p className="text-[#9bb3bb] text-lg max-w-md">
                        Join thousands of users who have transformed their financial habits and achieved their goals with FinanceFlow.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6">
                        <div className="text-center bg-[#18282d] p-4 rounded-xl border border-[#27353a]">
                            <p className="text-2xl font-bold text-white">50K+</p>
                            <p className="text-[#9bb3bb] text-xs uppercase tracking-wider">Active Users</p>
                        </div>
                        <div className="text-center bg-[#18282d] p-4 rounded-xl border border-[#27353a]">
                            <p className="text-2xl font-bold text-white">$2M+</p>
                            <p className="text-[#9bb3bb] text-xs uppercase tracking-wider">Tracked Daily</p>
                        </div>
                        <div className="text-center bg-[#18282d] p-4 rounded-xl border border-[#27353a]">
                            <p className="text-2xl font-bold text-white">4.9</p>
                            <p className="text-[#9bb3bb] text-xs uppercase tracking-wider">User Rating</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-[#9bb3bb] text-sm">
                    © 2026 FinanceFlow. All rights reserved.
                </div>
            </div>

            {/* Right Side - Register Form */}
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
                        <h2 className="text-3xl font-black text-white tracking-tight">Create Account</h2>
                        <p className="text-[#9bb3bb] mt-2">Start managing your finances today</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-[#fa5f38]/10 border border-[#fa5f38]/30 rounded-xl text-[#fa5f38] text-sm animate-fadeIn flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">warning</span>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#9bb3bb] mb-2">Full Name</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-[#9bb3bb] group-focus-within:text-[#06bcf9] transition-colors">person</span>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl leading-5 bg-[#1e293b] text-white placeholder-[#9bb3bb] focus:outline-none focus:ring-1 focus:ring-[#06bcf9] focus:bg-[#22343a] text-sm transition-all"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#9bb3bb] mb-2">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-[#9bb3bb] group-focus-within:text-[#06bcf9] transition-colors">mail</span>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl leading-5 bg-[#1e293b] text-white placeholder-[#9bb3bb] focus:outline-none focus:ring-1 focus:ring-[#06bcf9] focus:bg-[#22343a] text-sm transition-all"
                                    placeholder="Enter your email"
                                    required
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
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-10 py-2.5 border-none rounded-xl leading-5 bg-[#1e293b] text-white placeholder-[#9bb3bb] focus:outline-none focus:ring-1 focus:ring-[#06bcf9] focus:bg-[#22343a] text-sm transition-all"
                                    placeholder="Create a password"
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

                        <div>
                            <label className="block text-sm font-medium text-[#9bb3bb] mb-2">Confirm Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-[#9bb3bb] group-focus-within:text-[#06bcf9] transition-colors">key</span>
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl leading-5 bg-[#1e293b] text-white placeholder-[#9bb3bb] focus:outline-none focus:ring-1 focus:ring-[#06bcf9] focus:bg-[#22343a] text-sm transition-all"
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-start gap-2 pt-2">
                            <input
                                type="checkbox"
                                required
                                className="w-4 h-4 mt-0.5 rounded border-[#27353a] bg-[#1e293b] text-[#06bcf9] focus:ring-[#06bcf9]"
                            />
                            <span className="text-sm text-[#9bb3bb]">
                                I agree to the <a href="#" className="text-[#06bcf9] hover:underline">Terms of Service</a> and{' '}
                                <a href="#" className="text-[#06bcf9] hover:underline">Privacy Policy</a>
                            </span>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 bg-[#06bcf9] hover:bg-[#05a0d3] text-[#0f1e23] px-5 py-3 rounded-xl font-bold shadow-[0_0_15px_rgba(6,188,249,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 mt-4"
                        >
                            {isLoading ? 'Creating account...' : 'Create Account'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-[#9bb3bb]">
                        Already have an account?{' '}
                        <Link to="/" className="text-[#06bcf9] hover:text-[#05a0d3] font-semibold">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
