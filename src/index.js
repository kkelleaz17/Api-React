import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

import Trending from './Trending';
import NowPlaying from './NowPlaying';
import Search from './Search';
import Random from './Random';


const NoPage = () => {
  return <h1>404</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  

  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Trending />} />
          <Route path="Search" element={<Search />} />
          <Route path="Now-Playing" element={<NowPlaying />} />           
          <Route path="statistics" element={<Random />} />       
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>









  </React.StrictMode>
);

