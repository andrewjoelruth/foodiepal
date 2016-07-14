import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}