import React, {Suspense} from 'react';
import { HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import { MainLoading } from './widgets/loading/mainLoading';
import "./app/styles/styles.scss";

import { Home } from './pages/home';

import { PageNotFound } from './pages/NotFound';
import AdminAddUser from './shared/AdminCompontents/AdminAddUser';
import axios from 'axios';
import PortfolioPresentation from './pages/PortfolioPresentation';
import Network from './features/Network';



const About = React.lazy(()=>import("./pages/About"));
const AdminPanel = React.lazy(()=>import("./pages/AdminPanel"));
const AdminControl = React.lazy(()=> import("./shared/AdminCompontents/AdminControl"));
const AdminAddPortfolio = React.lazy(()=>import("./shared/AdminCompontents/AdminAddPortfolio"));
const PortfolioInfo = React.lazy(()=>import("./shared/AdminCompontents/PortfolioInfo"));
const PortfolioList = React.lazy(()=>import("./pages/PortfolioList"));



function App(): React.JSX.Element {
  return (

    <HashRouter>
      <Routes>
          <Route path='/'  element={ <Home />}/>
          <Route path="/about" element={<Suspense fallback={<MainLoading/>}><About/></Suspense>}/>      
          <Route path="/not-found" element={<PageNotFound/>}/>
          <Route path="*" element={<Navigate to="/not-found" replace/>}/>

          <Route path='/portfolio/:category' element={<Suspense fallback={<MainLoading/>}><PortfolioList/></Suspense>} />
          <Route path='/portfolio/presentation/:key' element= {<Suspense fallback={<MainLoading/>}><PortfolioPresentation/></Suspense>}/>
        
          <Route path='admin/panel' element={<Suspense fallback={<MainLoading/>}><AdminPanel/></Suspense>}>
            <Route path="portfolio" element={<Suspense fallback={<MainLoading/>}><AdminControl getData={Network.getPortfolioData} addHandleNavigatePath="/admin/panel/new-portfolio" title='Проекты'/></Suspense>}/>
            
            <Route path="portfolio/:key" element={<Suspense fallback={<MainLoading/>}><PortfolioInfo/></Suspense>}/>

            <Route path="users" element={<Suspense fallback={<MainLoading/>}><AdminControl addHandleNavigatePath="/admin/panel/new-user" title='Пользователи'/></Suspense>}/>
            <Route path="new-user" element={<Suspense fallback={<MainLoading/>}><AdminAddUser title='Добавить Пользователя'/></Suspense>}/>
            <Route path="new-portfolio" element={<Suspense fallback={<MainLoading/>}><AdminAddPortfolio title='Добавить Проект'/></Suspense>}/>
          </Route>
          
      </Routes>
    </HashRouter>

  );
}

export default App;
