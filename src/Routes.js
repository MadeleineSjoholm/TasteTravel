
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import QuickSearch from "./QuickSearch";
import CuisineDetailPage from './pages/cuisine/CuisineDetail'
import About from './pages/About'
import OurTeam from './pages/OurTeam'
import HomePage from './pages/Home'
import FaqPage from './pages/Faq'
import ProfilePage from './pages/Profile'
//import ServiceDetailPage from './pages/ServiceDetail'

import LoginPage from './pages/Login'
import LogoutPage from './pages/Logout'
import RegisterPage from './pages/Register'
//import SecretPage from './pages/Secret'
import MatchingRecipes from './pages/MatchingRecipes'
import FindRecipe from './pages/FindRecipe'
import Recipe from './pages/Recipe'
import Preferences from './pages/Preferences'
import SavedRecipes from './pages/SavedRecipes'
import MostPopular from './pages/MostPopular'
import OnBoard from './pages/OnBoard'
import ResetPasswordPage from './pages/ResetPassword'
import ChangePasswordPage from './pages/ChangePassword'
import QuickRecipe from './components/recipe/QuickRecipe'


import Help from './pages/Help'

// import ServiceCreatePage from './pages/services/ServiceCreate'
// import UserServicesPage from './pages/services/UserServices'

//Countries/Regions Pages



const Routes = () =>
<Switch>
{/* <Route path="/secret">
<SecretPage />
</Route> */}
{/* <Route path="/Quick" component={QuickSearch} exact /> */}
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

{/* HÖR TILL CREATE SERVICE OCH YOUR SERVICE
<Route path="/services/me">
<UserServicesPage />
</Route>
<Route path="/services/new">
<ServiceCreatePage />
</Route>
*/}
{/* <Route path="/services/:serviceId">
<ServiceDetailPage />
</Route> */}


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

<Route path="/recipe/:id" component={QuickRecipe} />

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
<Route path="/FindRecipe">
<FindRecipe />
</Route>
<Route path="/Recipe">
<Recipe />
</Route>
<Route path="/">
<HomePage />
</Route>

</Switch>

export default Routes
