export const sendChat = (groupName?: string) =>
  `https://wa.me/${6289612431402}?text=${encodeURIComponent(
    `Assalaamu'alaikum, mamah Aa.\nAku mau Belajar Bareng Aa ${
      groupName && `di grup ${groupName}`
    } dong, gimana caranya?..`
  )}`;
