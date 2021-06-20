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
      <section >
        <div>
          <div>
            <h1>Login</h1>
          </div>

          <form onSubmit={this.handleSubmit} className="Form">
            <label className="Label">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label className="Label">
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </label>
            <button type="submit">Log in</button>
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
