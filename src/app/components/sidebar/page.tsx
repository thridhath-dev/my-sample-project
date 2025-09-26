// components/sidebar/page.tsx
"use client";

import { useState } from "react";
import {
  HomeIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  TagIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import "./sidebar.css";
import AlertsPage from "../alerts/AlertsPage";
import HomePage from "../home/HomePage";
import CategoriesPage from "../categories/CategoriesPage";
import TransactionsPage from "../transactions/TransactionsPage";


export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("/");

  const nav = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/dashboard", label: "Dashboard", icon: ChartBarIcon },
    { href: "/transactions", label: "Transactions", icon: CurrencyDollarIcon },
    { href: "/categories", label: "Categories", icon: TagIcon },
    { href: "/alerts", label: "Alerts", icon: BellAlertIcon, badge: 5 },
  ];

  const handleTabClick = (href: string) => {
    setActiveTab(href);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "/":
        return <HomePage />;
      // case "/dashboard":
      //   return <DashboardPage />;
      case "/transactions":
        return <TransactionsPage />;
      case "/categories":
        return <CategoriesPage />;
      case "/alerts":
        return <AlertsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="sidebar w-60 bg-black/90 min-h-screen flex flex-col text-white">
        {/* Title */}
        <div className="px-4 pt-6 pb-2">
          <h2 className="finance">Finance Tracker</h2>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4">
          <ul className="menu">
            {nav.map((item) => {
              const Active = activeTab === item.href;
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleTabClick(item.href)}
                    className={`menu-link ${Active ? "active" : ""} group w-full text-left`}
                    aria-current={Active ? "page" : undefined}
                  >
                    <span
                      className="icon-wrap"
                      aria-label={item.label}
                      role="img"
                    >
                      <Icon className="icon" />
                    </span>

                    <span className="link-text">{item.label}</span>

                    {/* optional small description / subtle text */}
                    <span className="link-sub">Quick access</span>

                    {/* badge (optional) */}
                    {item.badge ? (
                      <span className="badge" aria-hidden>
                        {item.badge}
                      </span>
                    ) : null}

                    {/* small chevron shown on hover */}
                    <span className="chev" aria-hidden>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="sidebar-footer p-4">
          <div className="text-xs text-white/60">
            Signed in as <strong>you</strong>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="btn outline small">Settings</button>
            <button className="btn primary small">New</button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-900 text-white overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}