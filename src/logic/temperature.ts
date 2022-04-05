const fixTemp = (temperature: string, unit: string): string => {
  if (unit === 'celsius') {
    return (Number(temperature) * 1.8 + 32).toFixed(2);
  }
  return ((Number(temperature) - 32) / 1.8).toFixed(2);
};

export default fixTemp;
