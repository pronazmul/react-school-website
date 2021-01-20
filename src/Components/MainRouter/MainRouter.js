import React from 'react'
import './MainRouter.css'

import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom"
import HomePage from '../Pages/HomePage/HomePage'
import ContractPage from '../Pages/ContractPage/ContractPage'

const MainRouter = () => {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/contract'>
          <ContractPage />
        </Route>

        {/* <ProtectedRoute path = '/dashboard/:key?'>
          <ProtectedPath/>
        </ProtectedRoute> */}

        <Route path='*'>
          <Redirect to='/' />
        </Route>

      </Switch>
    </Router>

  )
}

export default MainRouter