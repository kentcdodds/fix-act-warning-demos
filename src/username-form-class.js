import React from 'react'

class UsernameForm extends React.Component {
  state = {status: 'idle', error: null}
  handleSubmit = async event => {
    event.preventDefault()
    const newUsername = event.target.elements.username.value
    this.setState({status: 'pending'})
    try {
      await this.props.updateUsername(newUsername)
      this.setState({status: 'fulfilled'})
    } catch (e) {
      this.setState({status: 'rejected', error: e})
    }
  }
  render() {
    const {error, status} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <button type="submit">Submit</button>
        <span>{status === 'pending' ? 'Saving...' : null}</span>
        <span>{status === 'rejected' ? error.message : null}</span>
      </form>
    )
  }
}

export default UsernameForm
