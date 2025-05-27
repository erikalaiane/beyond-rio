import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogsDetails from './pages/BlogsDetails';
import Destinos from './pages/Destinos';
import NoPage from './pages/NoPage';

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<BlogsDetails />} />
            <Route path='/places' element={<Destinos />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>

      </HashRouter>
    </>
  );
};

export default App;