import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert('log out')
      })
      .catch((error) => {
        alert(error)
      });
  };
  return (
    <div className="flex justify-between items-center mt-5 mb-20">
      <div>{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img className='w-[50px] h-[50px]' src={`${user ? user.photoURL : userImg}`} alt="user" />
        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-primary btn px-10 text-white"
          >
            LogOut
          </button>
        ) : (
          <Link
            to={'/auth/login'}
            className="bg-primary btn px-10 text-white"
          >LogIn</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
