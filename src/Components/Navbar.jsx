import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5 mb-20">
      <div></div>
      <div className="flex gap-5 text-accent">
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img src={user} alt="user" />
        <button className="bg-primary btn px-10 text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
