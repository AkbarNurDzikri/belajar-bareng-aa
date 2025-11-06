export const Footer = () => {
  const now = new Date();
  const yearOnly = now.getFullYear();
  return (
    <footer className="w-full flex items-center justify-center px-5 py-2 bg-linear-to-b from-white to-violet-300 mt-10">
      <div className="flex flex-col items-center justify-center gap-0">
        <img
          src="/belajar-bareng-aa-logo-full.png"
          alt="belajar-bareng-aa"
          className="w-52 h-52 md:w-64 md:h-64"
        />
        <p className="font-semibold text-slate-800 md:text-lg">
          Belajar lebih santai, lebih dekat, lebih paham
        </p>
        <p className="text-sm mt-5 text-center md:text-base">
          Made with 💖 by Ayah Aa
        </p>
        <p className="text-sm text-center md:text-base">
          &copy; {yearOnly} Belajar Bareng Aa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
