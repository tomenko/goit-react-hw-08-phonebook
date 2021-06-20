import './UserMenu.css'
import React from 'react';
import { getUserEmail, logout } from '../../redux/auth';
import { connect } from 'react-redux';
import noAvatar from '../../image/icons-user-no-avatar.png';


const UserMenu = ({ email, onLogout, avatar }) => (
    <div className="UserMenu">        
        <img src={avatar} alt="" width="40" />   
        <span>{email}</span>
        <button type="button" onClick={onLogout}>Sign out</button>
    </div>
)

const mapStateToProps = state => ({
  email: getUserEmail(state),
  avatar: noAvatar,
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);