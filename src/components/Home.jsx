import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

const navigate = useNavigate();

const startButtonHandler = () => {
    navigate('/feed');
}
  return (
    <>
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "URL(https://www.shutterstock.com/image-photo/document-management-system-concept-businessman-600nw-2455386227.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold">Resume Version Manager</h1>
            <p className="mb-5 text-yellow-50 bg-blend-overlay font-extrabold">
             Saves your time to manage, handle and get ready with a company or role specefic resume at any moment.
            </p>
            <button className="btn btn-primary" onClick={startButtonHandler}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home