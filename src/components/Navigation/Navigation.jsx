import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './navigation.css'

const Navigation = () => {
    return (
        <ul className="navigation">
            <li> <NavLink
                exact to={routes.home}
                className="NavLink"
                activeClassName="NavLink--active">
                Home</NavLink>
            </li>
            
            <li> <NavLink
                to={routes.contacts}
                className="NavLink"
                activeClassName="NavLink--active">
                Contacts</NavLink>
            </li>

            <li> <NavLink
                to={routes.login}
                className="NavLink"
                activeClassName="NavLink--active">
                login</NavLink>
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
 
export default Navigation;
