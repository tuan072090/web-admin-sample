import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './assets/scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"/>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./components/templates/layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./documents/pages/login/Login'))
const Register = React.lazy(() => import('./documents/pages/register/Register'))
const Page404 = React.lazy(() => import('./documents/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./documents/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>

            <Route exact path="/login" name="Login Page">
              <Login/>
            </Route>

            <Route exact path="/register" name="Register Page">
              <Register/>
            </Route>

            <Route exact path="/500" name="Page 500">
              <Page500/>
            </Route>

            <Route path="/" name="Home">
              <DefaultLayout />
            </Route>

            <Route path="*">
              <Page404/>
            </Route>
          </Switch>
        </React.Suspense>
      </Router>
    )
  }
}

export default App
