import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Wallet from './pages/Wallet'
import Faq from './pages/Faq'
import Getting_started from './pages/Guide'
import Contact from './pages/Contact'

// This is the main routing for the application
class MainRouter extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Wallet}/>
          <Route exact path='/faq' component={Faq}/>
          <Route exact path='/getting_started' component={Getting_started}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </main>
    )
  }
}

export default MainRouter
