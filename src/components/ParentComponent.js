import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      console.log('submitted')
  }

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}

export default ParentComponent; 