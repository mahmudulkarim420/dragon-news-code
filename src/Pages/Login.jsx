import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {signIn} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    signIn(email, password)
     .then(result => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : '/home'}`)
      })
      .catch(error => {
        alert(error.message);
      });
  }
  return (
    <div className='flex justify-center items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-bold py-5 text-center text-[22px]'>Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
            <p className='text-center py-2'>Dont't Have An Account ? <Link to={"/auth/register"} className='text-secondary'>Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
