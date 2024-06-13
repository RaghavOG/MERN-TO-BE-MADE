import React, { useState } from 'react';
import { Alert, Button, TextInput } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation

import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

const SignIn = () => {
  const { error, loading } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [signInError, setSignInError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignInError(null);

    // Validate form data
    if (!formData.email || !formData.password) {
      setSignInError('Email and password are required');
      return;
    }

    try {
      dispatch(signInStart());
      const res = await fetch(`/api/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(signInFailure(data.message));
        setSignInError(data.message);
      } else {
        dispatch(signInSuccess(data));
        // Redirect to home page after successful sign-in
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      setSignInError(error.message);
    }
  };

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <TextInput
          type='email'
          id='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          type='password'
          id='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          type='submit'
          gradientDuoTone='purpleToBlue'
          outline
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Sign In'}
        </Button>
      </form>
      {signInError && <Alert color='failure' className='mt-5'>{signInError}</Alert>}
      {error && <Alert color='failure' className='mt-5'>{error}</Alert>}

      {/* New user create account link */}
      <div className="mt-3 text-center">
        <span>Don't have an account?</span>{' '}
        <Link to="/signup" className="text-purple-600 hover:underline">Create one now!</Link>
      </div>
    </div>
  );
};

export default SignIn;
