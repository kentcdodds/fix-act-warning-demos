import React from 'react'
import {render, screen, act} from '@testing-library/react'
import ImperativeCounter from '../imperative-counter'

test('can call imperative methods on counter component', () => {
  const counterRef = React.createRef()
  render(<ImperativeCounter ref={counterRef} />)
  expect(screen.getByText('The count is: 0')).toBeInTheDocument()
  act(() => counterRef.current.increment())
  expect(screen.getByText('The count is: 1')).toBeInTheDocument()
  act(() => counterRef.current.decrement())
  expect(screen.getByText('The count is: 0')).toBeInTheDocument()
})
