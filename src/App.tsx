import React, {Suspense} from 'react';
import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import { MainLoading } from './widgets/loading/mainLoading';
import "./app/styles/styles.scss";

import { Home } from './pages/home';
import { Portfolio } from './pages/portfolio';



function App(): React.JSX.Element {
  return (

    <HashRouter>
      <Routes>
          <Route path='/'  element={ <Home />}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </HashRouter>

  );
}

export default App;
