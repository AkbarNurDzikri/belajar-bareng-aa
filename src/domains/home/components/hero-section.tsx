import { Button } from "@/components/ui/button";
import { sendChat } from "../utils/send-chat";

export const HeroSection = () => {
  return (
    <section
      className="px-5 py-10 bg-linear-to-bl from-blue-300 to-violet-700 mt-16 md:mt-20"
      id="hero"
    >
      <div className="flex items-center justify-center gap-3 animate-bounce">
        <div className="text-3xl md:text-5xl">🎓</div>
        <h1 className="text-slate text-2xl md:text-5xl font-extrabold text-slate-100">
          Belajar Bareng Aa
        </h1>
        <div className="text-2xl md:text-4xl">🎨</div>
      </div>
      <h4 className="text-center text-slate-200 my-3 text-xl md:text-2xl">
        Les privat anak-anak yang menyenangkan dan efektif
      </h4>
      <h4 className="text-slate-200 text-lg md:text-2xl text-justify md:text-center">
        ✨ Kami membantu anak-anak belajar dengan cara yang menyenangkan dalam
        kelompok kecil. Maksimal 5 anak per kelompok untuk perhatian yang
        optimal
      </h4>
      <Button
        className="bg-yellow-500 mx-auto mt-5 text-xl md:text-2xl md:h-14 font-bold text-violet-700 md:w-1/2 hover:cursor-pointer hover:bg-yellow-600 hover:text-violet-900 animate-pulse flex items-center"
        size="lg"
        onClick={() => window.open(sendChat(), "_blank")}
      >
        Coba Gratis Sekarang! 🚀
      </Button>
    </section>
  );
};
