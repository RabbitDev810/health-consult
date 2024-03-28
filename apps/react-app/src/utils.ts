export function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2); // Get the last 2 digits of the year
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Month starts from 0, so add 1 and pad with leading zeros if needed
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

export function isMobileHook() {
  if (window.innerWidth <= 490) {
    return true;
  } else {
    return false;
  }
}
