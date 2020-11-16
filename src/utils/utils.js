export const getRandomNumber = (min, max, fractional = 0) => {
  const randomNumber = min + Math.random() * (max - min);
  return randomNumber.toFixed(fractional);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFormattedLeftTime = (leftTime) => {
  const addZeroForTime = (time) => {
    return time < 10 ? `0` + time : time;
  };

  const hours = addZeroForTime(Math.floor(leftTime / 3600));
  const minutes = addZeroForTime(Math.floor((leftTime - (hours * 3600)) / 60));
  const seconds = addZeroForTime(Math.floor(leftTime - (hours * 3600) - (minutes * 60)));

  return `${hours}:${minutes}:${seconds}`;
};
