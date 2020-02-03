import React from 'react'

function UsernameForm({updateUsername}) {
  const [{status, error}, setState] = React.useState({
    status: 'idle',
    error: null,
  })

  async function handleSubmit(event) {
    event.preventDefault()
    const newUsername = event.target.elements.username.value
    setState({status: 'pending'})
    try {
      await updateUsername(newUsername)
      setState({status: 'fulfilled'})
    } catch (e) {
      setState({status: 'rejected', error: e})
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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

export default UsernameForm
