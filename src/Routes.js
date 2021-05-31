
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CuisineDetailPage from './pages/cuisines/CuisineDetail'
import About from './pages/helpInfo/About'
import OurTeam from './pages/helpInfo/OurTeam'
import HomePage from './pages/Home'
import FaqPage from './pages/helpInfo/Faq'
import ProfilePage from './pages/handleAccount/Profile'
import LoginPage from './pages/handleAccount/Login'
import LogoutPage from './pages/handleAccount/Logout'
import RegisterPage from './pages/Register'
import Recipe from './pages/Recipe'
import Preferences from './pages/Preferences'
import SavedRecipes from './pages/SavedRecipes'
import MostPopular from './pages/cuisines/MostPopular'
import OnBoard from './pages/helpInfo/OnBoard'
import ResetPasswordPage from './pages/handleAccount/ResetPassword'
import ChangePasswordPage from './pages/handleAccount/ChangePassword'
import Help from './pages/helpInfo/Help'



const Routes = () =>
  <Switch>
    <Route path="/cuisine/:cuisineId">
      <CuisineDetailPage />
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
    <Route path="/about">
      <About />
    </Route>
    <Route path="/OurTeam">
      <OurTeam />
    </Route>
    <Route path="/Resetpassword">
      <ResetPasswordPage />
    </Route>
    <Route path="/ChangePassword">
      <ChangePasswordPage />
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
    <Route path="/Recipe">
      <Recipe />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>

export default Routes
