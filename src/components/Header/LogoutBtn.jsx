import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error('Logout failed:', error);
      // Optionally handle errors, e.g., show a notification
    }
  };

  return (
    <button
      className='bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-full text-sm font-medium transition duration-200'
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
