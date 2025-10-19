import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='bg-base-300 min-h-screen'>
      <header className='max-w-6xl mx-auto py-5'>
        <Navbar></Navbar>
      </header>
      <main className='max-w-6xl mx-auto'>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;