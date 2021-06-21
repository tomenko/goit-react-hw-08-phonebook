import { Component } from 'react';
import { connect } from 'react-redux';
import getError from '../redux/auth';
import { signup } from '../redux/auth';


class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    error: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSignup(this.state);
    /* this.props.error(this.state); */

    this.setState({ name: '', email: '', password: '' });
    
  };

  render() {
    const { name, email, password, error } = this.state;

    return (
      <section className="sectionForm">
        <div >
          {/* {this.props.error.lenght !== 0 ? (alert("не верные данные")):(<span>1</span>)} */}
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


/* const mapStateToProps = state => ({
  error: getError(state)
}); */

const mapDispatchtoProps = {
  onSignup: signup,
};

/* export default connect(mapStateToProps, mapDispatchtoProps)(RegisterView); */
export default connect(null, mapDispatchtoProps)(RegisterView);
