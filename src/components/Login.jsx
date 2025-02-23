import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '../utils/constants';

const Login = () => {

    const [emailId, setEmailId] = useState('shrey@gmail.com');
    const [password, setPassword] = useState('Shrey@123');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

const clickHandler = async () => {
    try {
        const res = await axios.post(BASE_URL+'/login', {
            emailId,
            password
          }, {
            withCredentials: true
          })
         dispatch(addUser(res.data));
         return navigate('/home');
    } catch (error) {
        setError(error?.response?.data || 'Something went wrong.');
        setTimeout(()=>{
          setError('');
        }, 3000);
        console.error(error);
    }
}


  return (
    <div className='flex justify-center my-10'>
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
              <h2 className="card-title justify-center">Login</h2>
              <div>
                    {/** Username or Email */}
                      <label className="form-control w-full max-w-xs my-2">
                          <div className="label">
                              <span className="label-text">Email ID</span>
                          </div>
                          <input type="text" className="input input-bordered w-full max-w-xs" value={emailId} onChange={(e) => {setEmailId(e.target.value)}} />
                      </label>
                        {/** Password*/}
                      <label className="form-control w-full max-w-xs my-2">
                          <div className="label">
                              <span className="label-text">Password</span>
                          </div>
                          <input type="password" className="input input-bordered w-full max-w-xs" value={password} onChange={(e) => {setPassword(e.target.value)}}/> 
                      </label>

              </div>
              <p className='text-sm text-red-500' > {error} </p>
              <div className="card-actions justify-center m-2">
                  <button className="btn btn-primary" onClick={clickHandler}>Login</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Login