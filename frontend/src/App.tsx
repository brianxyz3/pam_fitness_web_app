// import React from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router';
import ServicePage from './pages/ServicePage';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import CoachesPage from './pages/CoachesPage';
import ContactUsPage from './pages/ContactUsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>

        <Route element={<MainLayout/>}>
          <Route path='/services' element={<ServicePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/subscriptions' element={<SubscriptionsPage/>} />
          <Route path='/coaches' element={<CoachesPage/>} />
          <Route path='/contact' element={<ContactUsPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;