import React, { Component } from 'react';

// MEGAMAN
class Dashboard extends Component {
  state = {
    newTodo: ''
  }

render() {
  return (


    // Create a form based on a column
    <div className='td-form'>
    hello

        <input
          name='firstName'
          value={this.state.firstName}
          onChange={(event) => {
            this.setState({
              firstName: event.target.firstName
            })
          }} />

      <button onClick={() => {
        this.props.handleSubmit(this.state.firstName);
      }}>
          Submit
        </button>

  </div>
      );
    }
  }

// Because we are exporting the class
export default Dashboard;
