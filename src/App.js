import React, { lazy, Suspense, Component} from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import { connect } from 'react-redux';

import AppBar from './components/UserMenu';

import { getCurrentUser } from './redux/auth/auth-operations';
import { fetchContacts } from './redux/contacts/contacts-operations';
import { getItems, getLoadingItems } from './redux/contacts/contacts-selectors';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components//PublicRoute/PublicRoute';

import './app.css'

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */)
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-view" */)
);

const loginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-view" */)
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-view" */)
);


class App extends Component {
    componentDidMount() {
    this.props.onGetCurrentUser();
    this.props.fetchItems();
  }

  render() { 
    return (
      <div  className="app">
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomeView} />
            <PrivateRoute
              path={routes.contacts}
              redirectTo="/login"
              component={ContactsView}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo="/contacts"
              component={loginView}
            />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo="/"
              component={RegisterView}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: getItems(state),
  isLoading: getLoadingItems(state),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchContacts()),
  onGetCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);