import React from 'react'
import {render, screen, act} from '@testing-library/react'
import OrderStatus from '../order-status'
import {checkStatus} from '../api'

jest.mock('../api')

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

test('polling backend on an interval', async () => {
  const orderId = 'abc123'
  const orderStatus = 'Order Received'
  checkStatus.mockResolvedValue({orderStatus})

  render(<OrderStatus orderId={orderId} />)

  expect(screen.getByText(/\.\.\./i)).toBeInTheDocument()
  expect(checkStatus).toHaveBeenCalledTimes(0)

  act(() => jest.advanceTimersByTime(1000))

  expect(await screen.findByText(orderStatus)).toBeInTheDocument()

  expect(checkStatus).toHaveBeenCalledWith(orderId)
  expect(checkStatus).toHaveBeenCalledTimes(1)
})
