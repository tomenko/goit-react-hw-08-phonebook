import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './UserMenu.css'

const AuthNav = () => {
    return (
        <ul className="navigation">
            <li> <NavLink
                to={routes.login}
                className="NavLink"
                activeClassName="NavLink--active">
                  <span >
                    Login
                  </span>
                </NavLink>
            </li>

            <li> <NavLink
                to={routes.register}
                className="NavLink"
                activeClassName="NavLink--active">
                  <span >
                    Register
                  </span>
                </NavLink>
            </li>   
        </ul>
    );   
}
 
export default AuthNav;