import React, {Suspense} from 'react';
import { BrowserRouter, HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import { MainLoading } from './widgets/loading/mainLoading';
import "./app/styles/styles.scss";

import { Home } from './pages/home';

import { PageNotFound } from './pages/NotFound';


export const About = React.lazy(()=>import("./pages/About"));


function App(): React.JSX.Element {
  return (

    <HashRouter>
      <Routes>
          <Route path='/'  element={ <Home />}/>
          <Route path="/about" element={<Suspense fallback={<MainLoading/>}><About/></Suspense>}/>      
          <Route path="/not-found" element={<PageNotFound/>}/>
          <Route path="*" element={<Navigate to="/not-found" replace/>}/>
      </Routes>
    </HashRouter>

  );
}

export default App;
