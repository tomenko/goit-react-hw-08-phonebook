import './UserMenu.css'
import React, {Component} from 'react';

class UserMenu extends Component {
    state = {  }
    render() { 
        return (
            <div className="UserMenu">
                <span>e-mail</span>
                <button type="button" /* onClick={this.handleGoBack} */>Sign out</button>
            </div>
        );
    }
}
 
export default UserMenu;