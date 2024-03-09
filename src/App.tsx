import React, {Suspense} from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';

import "./app/styles/styles.scss";
import { MainLoading } from './widgets/loading/mainLoading';
import HomeStart from './widgets/HomeStart';



function App(): React.JSX.Element {
  return (
    <HashRouter>
      <Routes>
          <Route path='/' element={<HomeStart/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
