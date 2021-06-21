import { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../redux/auth';


class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSignup(this.state);

    this.setState({ name: '', email: '', password: '' });
    
  };

  render() {
    const { name, email, password, error } = this.state;

    return (
      <section className="sectionForm">
        <div >
          
            <form onSubmit={this.handleSubmit} className="Form">
              <div>
                <h1>Registration</h1>
              </div>
              <label className="Label">Name</label>
              
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            

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
              />
            
              <button type="submit" className="btn btnForm">Submit</button>
            </form>

          
          

        </div>
      </section>
    );
  }
}




const mapDispatchtoProps = {
  onSignup: signup,
};

export default connect(null, mapDispatchtoProps)(RegisterView);
