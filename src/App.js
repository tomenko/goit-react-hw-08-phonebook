import React, { lazy, Suspense, Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';

import AppBar from './components/AppBar';
/* import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import loginView from './views/LoginView';
import RegisterView from './views/RegisterView'; */
import NotFoundView from './views/NotFoundView';

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
  state = {  }
  render() { 
    return (
      <div  className="App">
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.contacts} component={ContactsView} />
            <Route path={routes.login} component={loginView} />
            <Route path={routes.register} component={RegisterView} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
 
export default App;

/* import {connect} from 'react-redux'; */
/* import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactItem from './components/ContactItem';
import Filter from './components/Filter' */

/* import { fetchContacts } from './redux/contacts/contacts-operations';
import { getItems } from './redux/contacts/contacts-selectors'; */

/* class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
  
        {this.props.items.length > 0 ? (
          <>
            <Filter />
            <ContactList>
              <ContactItem />
            </ContactList>
          </>
        ) : (
          <span>You have no contacts!</span>
        )}
      </>
    )
  }
}; */

/* const mapStateToProps = state => ({
  items: state.contacts.items,
}); */

/* const mapStateToProps = state => ({
  items: getItems(state),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App); */



