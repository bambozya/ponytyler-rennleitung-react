const pad = (value: number, length = 2) => String(value).padStart(length, "0");

function toValidDate(value: string | Date | null | undefined): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

/** yyyy-MM-dd, in local time (the value format of <input type="date">). */
export function toDateInputValue(value: string | Date | null | undefined): string {
  const date = toValidDate(value);
  if (!date) return "";
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** HH:mm, in local time (the value format of <input type="time">). */
export function toTimeInputValue(value: string | Date | null | undefined): string {
  const date = toValidDate(value);
  if (!date) return "";
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/** yyyy-MM-dd HH:mm */
export function formatDateTime(value: string | Date | null | undefined): string {
  const date = toValidDate(value);
  if (!date) return "";
  return `${toDateInputValue(date)} ${toTimeInputValue(date)}`;
}

/** Joins the values of a date input and a time input into one local Date. */
export function combineDateAndTime(dateValue: string, timeValue: string): Date {
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hours, minutes] = timeValue.split(":").map(Number);
  return new Date(year, month - 1, day, hours || 0, minutes || 0);
}

/** yyyy-MM-dd_HH-mm-ss-SSS, for backup file names. */
export function formatFileTimestamp(date: Date): string {
  return (
    `${toDateInputValue(date)}_${pad(date.getHours())}-${pad(date.getMinutes())}` +
    `-${pad(date.getSeconds())}-${pad(date.getMilliseconds(), 3)}`
  );
}
