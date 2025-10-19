import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { getAuth } from "firebase/auth";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const url = form.url.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!name || !email || !password || !url) {
      alert("complete all form");
      return;
    }

    try {
      
      await createUser(email, password);

      
      await updateUser({ displayName: name, photoURL: url });

      
      await auth.currentUser.reload();

      
      setUser(auth.currentUser);

      
      navigate('/home');
    } catch (error) {
      alert(error.message);
      setUser(null);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-bold py-5 text-center text-[22px]'>Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input name='name' type="text" className="input" placeholder="Enter your name" />

            <label className="label">Photo URL</label>
            <input name='url' type="text" className="input" placeholder="Enter your photo URL" required />

            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Enter your email address" />

            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Enter your password" required />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type='submit' className="btn btn-neutral mt-4">Register</button>
            <p className='text-center py-2'>Already Have An Account? <Link to={"/auth/login"} className='text-secondary'>Login</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
