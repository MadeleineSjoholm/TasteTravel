
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import FaqPage from './pages/Faq'
import ProfilePage from './pages/Profile'
import ServicesPage from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetail'
import LoginPage from './pages/Login'
import LogoutPage from './pages/Logout'
import RegisterPage from './pages/Register'
import SecretPage from './pages/Secret'
import HelpPage from './pages/Help'
import MatchingRecipes from './pages/MatchingRecipes'

import Preferences from './pages/Preferences'
import SavedRecipes from './pages/SavedRecipes'
import MostPopular from './pages/MostPopular'
import OnBoard from './pages/OnBoard'

import Help from './pages/Help'

import ServiceCreatePage from './pages/services/ServiceCreate'
import UserServicesPage from './pages/services/UserServices'


const Routes = () =>
  <Switch>
    <Route path="/secret">
      <SecretPage />
    </Route>
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/logout">
      <LogoutPage />
    </Route>
    <Route path="/services/me">
      <UserServicesPage />
    </Route>
    <Route path="/services/new">
      <ServiceCreatePage />
    </Route>
    <Route path="/services/:serviceId">
      <ServiceDetailPage />
    </Route>
    <Route path="/services">
      <ServicesPage />
    </Route>
    <Route path="/profile">
      <ProfilePage />
    </Route>
    <Route path="/faq">
      <FaqPage />
    </Route>
    <Route path="/help">
      <Help />
    </Route>

    <Route path="/Preferences">
      <Preferences />
    </Route>
    <Route path="/SavedRecipes">
      <SavedRecipes />
    </Route>
    <Route path="/MostPopular">
      <MostPopular />
    </Route>
    <Route path="/OnBoard">
      <OnBoard />
    </Route>
    <Route path="/MatchingRecipes">
      <MatchingRecipes />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>

export default Routes
