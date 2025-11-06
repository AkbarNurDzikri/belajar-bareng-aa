export function maskName(name: string) {
  if (!name) return "";

  const length = name.length;

  if (length === 1) return "*"; // Nama 1 huruf
  if (length === 2) return name[0] + "*"; // Nama 2 huruf
  if (length <= 4) {
    // Nama pendek
    return name[0] + "*".repeat(length - 1);
  }
  if (length <= 6) {
    // Nama sedang
    return name[0] + "*".repeat(length - 2) + name[length - 1];
  }
  // Nama panjang
  const visibleStart = 1;
  const visibleEnd = 1;
  const maskedMiddle = "*".repeat(length - visibleStart - visibleEnd);
  return name[0] + maskedMiddle + name[length - 1];
}
