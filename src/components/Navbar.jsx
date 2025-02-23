import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () =>{
    try {
      await axios.post(BASE_URL+'/logout', {}, {withCredentials : true});
      dispatch(removeUser());
      navigate('/login');

    } catch (error) {
      
    }
  }

  const user = useSelector((store) => store.userReducer);
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link to='/home' className="btn btn-ghost text-xl"> 📂 Resume Version Manager</Link>
    </div>
    {user && <div className="flex-none gap-1">
      <p>Welcome, {user.firstName}</p>
      <div className="dropdown dropdown-end mx-3" >
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Photo"
              src={user.photoUrl} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <Link to='/profile' className="justify-between">
              Profile
            </Link>
          </li>
          <li>
            <Link to='/feed' className="justify-between">
              Feed
            </Link>
          </li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>}
  </div>
  )
}

export default Navbar
