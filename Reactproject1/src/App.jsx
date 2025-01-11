import React from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import Details from './Components/Details.jsx';
import Home from './Components/Home.jsx';
import Create from './Components/Create.jsx';



const App = () => {

const { search, pathname } = useLocation();
console.log(search, pathname);


  return (
    <div className='h-screen w-screen flex'>
    {(pathname != "/" || search.length > 0) && (
      <Link
      to="/"
      className="text-red-300 absolute left-[17%] top-[3%]"
      >
      Home
      </Link>
     )}  

   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/Create' element={ <Create/>  } />
     <Route path='/details/:id' element={<Details />} />
   </Routes>
    </div>
  )
}

export default App