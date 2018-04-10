import React, { Component } from 'react';
import Form from './components/Form';
import MastersList from './components/MastersList'

class Navigation extends Component {
  render() {
    return (
        <div>
        <Form />
        <MastersList />
        </div>
    );
  }
}

export default Navigation;
