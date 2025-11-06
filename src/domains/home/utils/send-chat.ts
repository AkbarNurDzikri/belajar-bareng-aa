export const sendChat = (groupName?: string) => {
  return `https://wa.me/${6289612431402}?text=${encodeURIComponent(
    `Assalaamu'alaikum, mamah Aa.\n\nAku mau *Belajar Bareng Aa* ${
      groupName ? `di kelompok ${groupName}` : ""
    } dong, gimana caranya?..`
  )}`;
};
