import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
  const today = new Date();
  const day = format(today, 'EEEE');
  const rest = format(today, 'MMMM dd, yyyy');
  return (
    <div className="flex justify-center items-center flex-col gap-3 mb-3">
      <img className="w-[400px] mt-5" src={logo} alt="Logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold">
        {day}, <span className="text-accent">{rest}</span>
      </p>
    </div>
  );
};

export default Header;
