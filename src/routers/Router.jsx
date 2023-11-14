import React from 'react';
import {Routes,Route} from 'react-router-dom';

/* Pages */

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Checkout from '../pages/Checkout';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';


const MyRoutes = () =>{
return (
    
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/product/:id' element={<Detail></Detail>}/>
          <Route path='/checkout' element={<Checkout></Checkout>}/>
          <Route path='/signin' element={<Signin></Signin>}/>
          <Route path='/signup' element={<Signup></Signup>}/>
        </Routes>
      
    );
  }

export default MyRoutes;