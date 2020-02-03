import React from 'react'
import user from '@testing-library/user-event'
import {
  render,
  screen,
  waitForElementToBeRemoved,
  wait,
  act,
} from '@testing-library/react'
import UsernameForm from '../username-form-class'

test('calls updateUsername with the new username (with act warning)', () => {
  const handleUpdateUsername = jest.fn()
  const fakeUsername = 'sonicthehedgehog'

  render(<UsernameForm updateUsername={handleUpdateUsername} />)

  const usernameInput = screen.getByLabelText(/username/i)
  user.type(usernameInput, fakeUsername)
  user.click(screen.getByText(/submit/i))

  expect(handleUpdateUsername).toHaveBeenCalledWith(fakeUsername)
})

test('calls updateUsername with the new username', async () => {
  const handleUpdateUsername = jest.fn(() => Promise.resolve())
  const fakeUsername = 'sonicthehedgehog'

  render(<UsernameForm updateUsername={handleUpdateUsername} />)

  const usernameInput = screen.getByLabelText(/username/i)
  user.type(usernameInput, fakeUsername)
  user.click(screen.getByText(/submit/i))

  expect(handleUpdateUsername).toHaveBeenCalledWith(fakeUsername)
  await waitForElementToBeRemoved(() => screen.getByText(/saving/i))
})

test('calls updateUsername with the new username (with manual act and promise)', async () => {
  const promise = Promise.resolve()
  const handleUpdateUsername = jest.fn(() => promise)
  const fakeUsername = 'sonicthehedgehog'

  render(<UsernameForm updateUsername={handleUpdateUsername} />)

  const usernameInput = screen.getByLabelText(/username/i)
  user.type(usernameInput, fakeUsername)
  user.click(screen.getByText(/submit/i))

  expect(handleUpdateUsername).toHaveBeenCalledWith(fakeUsername)
  await act(() => promise)
})
