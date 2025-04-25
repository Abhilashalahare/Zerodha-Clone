import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const { backendUrl, setIsLoggedin } = useContext(AppContext);

  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === 'Sign up') {
        const { data } = await axios.post(
          backendUrl + '/api/auth/signup',
          { name, email, password },
          { withCredentials: true }
        );

        if (data.success) {
          setIsLoggedin(true);
          window.location.href = 'http://localhost:5174'; // redirect to dashboard
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(
          backendUrl + '/api/auth/login',
          { email, password },
          { withCredentials: true }
        );

        if (data.success) {
          setIsLoggedin(true);
          window.location.href = 'http://localhost:5174'; // redirect to dashboard
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm-px-0'>
      <div className='bg-blue-400 p-10 rounded-lg shadow-lg w-full sm:w-96 text-black text-sm'>
        <h2 className='text-white text-3xl font-semibold text-center mb-3'>
          {state === 'Sign up' ? 'Create Account' : 'Login'}
        </h2>
        <p className='text-white text-center text-sm mb-6'>
          {state === 'Sign up' ? 'Create your account' : 'Login to your account!'}
        </p>

        <form onSubmit={onSubmitHandler}>
          {state === 'Sign up' && (
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-50'>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='bg-transparent outline-none'
                type='text'
                placeholder='Full name'
                required
              />
            </div>
          )}

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-50'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='outline-none'
              type='email'
              placeholder='Email'
              required
            />
          </div>

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-50'>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='outline-none'
              type='password'
              placeholder='Password'
              required
            />
          </div>

          <p className='text-indigo-700 mb-4 cursor-pointer'>Forgot Password?</p>

          <button className='w-full py-2.5 rounded-full bg-indigo-600 text-white'>{state}</button>
        </form>

        {state === 'Sign up' ? (
          <p className='text-white text-center text-xs mt-4'>
            Already have an account?{' '}
            <span onClick={() => setState('Login')} className='text-blue-800 cursor-pointer underline'>
              Login here
            </span>
          </p>
        ) : (
          <p className='text-white text-center text-xs mt-4'>
            Don't have an account?{' '}
            <span onClick={() => setState('Sign up')} className='text-blue-800 cursor-pointer underline'>
              Signup
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
