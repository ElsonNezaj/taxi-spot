export const calculateTotal = (distance: number, duration: number) => {
  const consumption = 0.36;
  const maxDistanceDurationFromMultiplication = distance * duration;
  const total = consumption * maxDistanceDurationFromMultiplication;
  return Math.ceil(total * 100);
};
