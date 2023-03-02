export const daysLeft = (deadLine) => {
  const difference = new Date(deadLine).getTime() - new Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

export const calculatePercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goat);

  return percentage;
};

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
