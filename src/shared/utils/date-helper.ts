export type DateInput = string | number | Date;

export interface FormatDateOptions {
  locale?: string;
  formatOptions?: Intl.DateTimeFormatOptions;
}

/**
 * Format tanggal menjadi string yang mudah dibaca.
 * @param input - String ISO, object Date, atau timestamp.
 * @param options - Locale dan opsi format.
 * @returns formatted date string
 */
export function formatDate(
  input: DateInput,
  options: FormatDateOptions = {},
  includeYear: boolean | "long" | "short" = true
): string {
  const {
    locale = "id-ID",
    formatOptions = {
      month: "short",
      day: "numeric",
    },
  } = options;

  // Perbaikan: pastikan fallback aman
  const localFormat: Intl.DateTimeFormatOptions = { ...formatOptions };

  if (includeYear) {
    localFormat.year = includeYear === "long" ? "numeric" : "2-digit";
  }

  const date = new Date(input);
  if (isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(locale, localFormat).format(date);
}

/**
 * Convert string tanggal ke format ISO (YYYY-MM-DD)
 * @param input - String, Date, atau timestamp.
 * @returns ISO date string
 */
export function toISODate(input: DateInput): string {
  const date = new Date(input);
  if (isNaN(date.getTime())) return "";
  return date.toISOString().split("T")[0];
}

/**
 * Dapatkan waktu relatif (misal: "2 hari lalu")
 * @param input - Tanggal yang ingin dibandingkan.
 * @param locale - Locale untuk hasil format.
 * @returns relative time string
 */
export function timeAgo(input: DateInput, locale: string = "id-ID"): string {
  const date = new Date(input);
  const diff = Date.now() - date.getTime();

  if (isNaN(date.getTime())) return "-";

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (days > 0) return rtf.format(-days, "day");
  if (hours > 0) return rtf.format(-hours, "hour");
  if (minutes > 0) return rtf.format(-minutes, "minute");
  return "baru saja";
}

/**
 * Convert UTC date ke WIB (GMT+7)
 * @param input - UTC date.
 * @returns Date baru dalam zona waktu WIB.
 */
export function toWIB(input: DateInput): Date {
  const date = new Date(input);
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  // WIB = UTC + 7 jam
  return new Date(utc + 7 * 60 * 60 * 1000);
}

export function startOfCurrentMonth(
  locale: "id-ID" | "en-CA" = "id-ID",
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  }
): string {
  const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  return new Intl.DateTimeFormat(locale, options).format(firstDay);
}

export const today = (
  locale: "id-ID" | "en-CA" = "id-ID",
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  }
) => new Intl.DateTimeFormat(locale, options).format(new Date());

/**
 * Dapatkan tanggal 21 dari bulan tertentu (default: bulan ini)
 * @param monthOffset - Offset dari bulan sekarang (misal: 0 = bulan ini, 1 = bulan depan, -1 = bulan lalu)
 * @returns Date object untuk tanggal 21 di bulan tersebut
 */
export function getDate(monthOffset: number = 0, date: number = 1): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + monthOffset, date);
}
