import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/auth';


class loginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <section className="sectionForm">
        <div>


          <form onSubmit={this.handleSubmit} className="Form">
            <div>
              <h1>Login</h1>
            </div>
            <label className="Label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            
            <label className="Label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              autoComplete="off"
            />
            
            <button type="submit" className="btn btnForm">Log in</button>
          </form>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(loginView);
