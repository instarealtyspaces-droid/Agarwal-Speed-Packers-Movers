import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileBottomCTA from '../components/layout/MobileBottomCTA';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-light text-slate-800">
      <Header />
      <main className="flex-grow pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomCTA />
    </div>
  );
}
