import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Input from '../Pages/Input';
import Output from '../Pages/Output';

const router = () => {
  return (
    <Routes>
        <Route path='/' element={<Input />}/>
        <Route path='/data' element={<Output />}/>
    </Routes>
  )
}

export default router;