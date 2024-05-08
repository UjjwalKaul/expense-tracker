export default function getFormattedDate(date) {
  // Extract day, month, and year components from the Date object
  let day = date.getDate();
  let month = date.getMonth() + 1; // Month is zero-based, so we add 1
  let year = date.getFullYear();

  // Pad day and month with leading zeros if necessary
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  // Combine components into the desired format using template literal
  return `${year}-${month}-${day}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
