import React from 'react'

function ImperativeCounter(props, ref) {
  const [count, setCount] = React.useState(0)
  React.useImperativeHandle(ref, () => ({
    increment: () => setCount(c => c + 1),
    decrement: () => setCount(c => c - 1),
  }))
  return <div>The count is: {count}</div>
}
ImperativeCounter = React.forwardRef(ImperativeCounter)

export default ImperativeCounter
