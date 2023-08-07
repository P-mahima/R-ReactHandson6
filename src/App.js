import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import ContextD from './Components/Context';
import Addnew from './Components/Plus'
import Table from "./Components/Table";
import Edit from './Components/Update';

const App = () => {

  const [data, setData] = useState([{ name: "Mahima", age: 23 , course: "EE", batch: "2023" }, { name: "Falguni", age: 22, course: "E&TC", batch: "2023" }])
  return (
    <div className='Bground'>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />


          <Route path="/Student" element={
            <ContextD.Provider value={{ entries: data, UpdateFun: setData }} >
              <Table />
            </ContextD.Provider>
          } />

          <Route path="/addnew" element={
            <ContextD.Provider value={{ entries: data, UpdateFun: setData }} >
              <Addnew />
            </ContextD.Provider>
          } />

          <Route path='/editStudent' element={<ContextD.Provider value={{ entries: data, UpdateFun: setData }} >
            <Edit />
          </ContextD.Provider>

          } />



          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;