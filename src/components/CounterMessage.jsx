export const CounterMessage = ({ count }) => {
  if (count > 0) return <p>Positive ✓</p>;
  if (count < 0) return <p>Negative!</p>;
  return <p>Zero</p>;
};