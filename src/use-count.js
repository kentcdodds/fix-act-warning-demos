import React from 'react'

function useCount() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  return {count, increment, decrement}
}

export default useCount
