import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {

  const user = useSelector((store) => store.userReducer);
  return (
    <div className='flex flex-col items-center mt-10'>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={user?.photoUrl} />
        </div>
      </div>

      <div className='about-section p-5 text-xl'>
        <div className="card bg-primary text-primary-content w-96">
          <div className="card-body">
            <h2 className="card-title">About</h2>
           <label>Name : {user.firstName} {user.lastName}</label>
           <label>Email ID : {user.emailId}</label>
           <label>Description : {user.about}</label>
           <label>Skills : {user.skills}</label>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile