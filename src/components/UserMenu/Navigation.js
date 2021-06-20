import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './UserMenu.css'

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

        </ul>
    );   
}
 
export default Navigation;
