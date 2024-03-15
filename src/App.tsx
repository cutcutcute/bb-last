import React, {Suspense} from 'react';
import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import { MainLoading } from './widgets/loading/mainLoading';
import "./app/styles/styles.scss";

import { Home } from './pages/home';
import { Portfolio } from './pages/portfolio';
import { PageNotFound } from './pages/NotFound';



function App(): React.JSX.Element {
  return (

    <HashRouter>
      <Routes>
          <Route path='/'  element={ <Home />}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </HashRouter>

  );
}

export default App;
