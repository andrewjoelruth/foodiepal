import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestPasswordResetRequest } from '../actions/auth';

class RequestPasswordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  closeModal() {
    this.props.removeModal();
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.requestPasswordResetRequest(this.state);
    this.closeModal();
  }

  render() {
    return (
      <div className='modal-form-container'>
        <p>Don't worry! It happens to the best of us.</p>
        <p>Enter your email address and we'll send you a link to reset your password.</p>
        <form onSubmit={ this.onFormSubmit }>
          <input 
            value={ this.state.email }
            onChange={ this.onEmailChange }
            type="email"
            placeholder="Email"
          />
          <button type="submit" className='btn btn-primary'>Request Reset Password Email</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestPasswordResetRequest }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestPasswordReset);