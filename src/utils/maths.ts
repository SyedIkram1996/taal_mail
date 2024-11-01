export function formatAmountToPKR(amount: number) {
  if (amount >= 100000000000) {
    return (amount / 100000000000).toFixed(2) + " Kharab";
  } else if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(2) + " Arab";
  } else if (amount >= 10000000) {
    return (amount / 10000000).toFixed(2) + " Crore";
  } else if (amount >= 100000) {
    return (amount / 100000).toFixed(2) + " Lac";
  } else {
    return amount.toString();
  }
}
