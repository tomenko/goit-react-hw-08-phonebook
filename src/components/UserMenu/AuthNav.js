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
                Login</NavLink>
            </li>

            <li> <NavLink
                to={routes.register}
                className="NavLink"
                activeClassName="NavLink--active">
                Register</NavLink>
            </li>   
        </ul>
    );   
}
 
export default AuthNav;