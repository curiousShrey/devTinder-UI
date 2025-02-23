import  Body  from './components/Body';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Feed from './components/Feed';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {

  return (
    <>
    <Provider store={appStore}>
     <BrowserRouter basename='/'>
          <Routes>
           <Route path="/" element={<Body/>}>
              <Route path='/home' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/feed' element={<Feed/>}/>
           </Route>
          </Routes>
      </BrowserRouter>  
    </Provider>
      
    </>
  )
}

export default App
