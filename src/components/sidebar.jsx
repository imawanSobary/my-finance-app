import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { path: '/dashboard', icon: 'grid_view', label: 'Dashboard' },
    { path: '/accounts', icon: 'account_balance', label: 'Accounts' },
    { path: '/wallet', icon: 'account_balance_wallet', label: 'Wallet' },
    { path: '/transactions', icon: 'receipt_long', label: 'Transactions' },
    { path: '/budget', icon: 'pie_chart', label: 'Budget' },
    { path: '/reports', icon: 'description', label: 'Reports' },
  ];

  return (
    <aside className="w-64 bg-[var(--color-sidebar)] border-r border-[var(--color-border)] flex flex-col flex-shrink-0 z-20 h-full transition-colors duration-300">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div
          className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full w-10 h-10 flex items-center justify-center shadow-[0_0_8px_rgba(6,188,249,0.3)]"
        >
          <span className="material-symbols-outlined text-[#0f1e23] text-xl">account_balance_wallet</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[var(--color-text)] text-lg font-bold leading-tight tracking-tight">FinanceFlow</h1>
          <p className="text-[var(--color-text-muted)] text-xs font-normal">Manage your wealth</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 flex flex-col gap-2 mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-3 px-3 py-3 rounded-lg bg-[var(--color-surface-light)] text-[var(--color-text)] shadow-[0_0_8px_rgba(6,188,249,0.3)] border border-[var(--color-primary)]/20'
                : 'flex items-center gap-3 px-3 py-3 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-hover)] hover:shadow-[inset_4px_0_0_0_var(--color-primary)] transition-all group'
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`material-symbols-outlined ${isActive ? 'fill text-[var(--color-primary)] drop-shadow-[0_0_5px_rgba(6,188,249,0.8)]' : 'text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]'} transition-colors`}
                >
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Settings at bottom */}
      <div className="p-4 mt-auto border-t border-[var(--color-border)]">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center gap-3 px-3 py-3 rounded-lg bg-[var(--color-surface-light)] text-[var(--color-text)] shadow-[0_0_8px_rgba(6,188,249,0.3)] border border-[var(--color-primary)]/20'
              : 'flex items-center gap-3 px-3 py-3 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-hover)] hover:shadow-[inset_4px_0_0_0_var(--color-primary)] transition-all group'
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={`material-symbols-outlined ${isActive ? 'fill text-[var(--color-primary)] drop-shadow-[0_0_5px_rgba(6,188,249,0.8)]' : 'text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]'} transition-colors`}
              >
                settings
              </span>
              <span className="text-sm font-medium">Settings</span>
            </>
          )}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;