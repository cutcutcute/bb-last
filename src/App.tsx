import React, {Suspense} from 'react';
import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import { MainLoading } from './widgets/loading/mainLoading';
import "./app/styles/styles.scss";

import { Home } from './pages/home';



function App(): React.JSX.Element {
  return (

    <HashRouter>
      <Routes>
          <Route path='/'  element={

                              <Home />

                          }/>
      </Routes>
    </HashRouter>

  );
}

export default App;
