import React, {Suspense} from 'react';
import { BrowserRouter, HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import { MainLoading } from './widgets/loading/mainLoading';
import "./app/styles/styles.scss";

import { Home } from './pages/home';
import { Portfolio } from './pages/portfolio';
import { PageNotFound } from './pages/NotFound';


export const About = React.lazy(()=>import("./pages/About"));
export const Contacts = React.lazy(()=> import("./pages/Contacts"));

function App(): React.JSX.Element {
  return (

    <HashRouter>
      <Routes>
          <Route path='/'  element={ <Home />}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path="/about" element={<Suspense fallback={<MainLoading/>}><About/></Suspense>}/>
          <Route path="/contacts" element={<Suspense fallback={<MainLoading/>}><Contacts/></Suspense>}/>          
          <Route path="/not-found" element={<PageNotFound/>}/>
          <Route path="*" element={<Navigate to="/not-found" replace/>}/>
      </Routes>
    </HashRouter>

  );
}

export default App;
