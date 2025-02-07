export function after3Days() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date;
}
