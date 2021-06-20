import { connect } from 'react-redux';

import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

import { getIsAuthenticated } from '../../redux/auth';

import './UserMenu.css';




const AppBar = ({isAuthenticated}) => {
    return (
        <header className="header">
            <Navigation />
            {isAuthenticated? <UserMenu />:<AuthNav />}
        </header>
    );
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});
 
export default connect(mapStateToProps)(AppBar);