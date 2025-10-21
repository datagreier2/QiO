function CounterButton({ count, onIncrement }) {
  return (
    <button onClick={onIncrement}>
      count is {count}
    </button>
  )
}

export default CounterButton
