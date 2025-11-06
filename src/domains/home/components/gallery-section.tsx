import { Clapperboard } from "lucide-react";
import { dummyGalleryActivities } from "../constants/dummy-gallery-activities";
import { GalleryCard } from "./gallery-card";

export const GallerySection = () => {
  return (
    <section className="px-5 bg-slate-100 pt-10">
      <div className="flex items-center justify-center gap-3">
        <Clapperboard className="w-8 h-8" />
        <h2 className="text-xl md:text-3xl text-violet-700 font-bold text-center">
          Galeri Kegiatan
        </h2>
      </div>

      <div className="w-full flex flex-nowrap overflow-x-auto gap-3 scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-slate-200">
        {dummyGalleryActivities.map((g, i) => {
          return (
            <GalleryCard
              key={i}
              title={g.title}
              description={g.description}
              images={g.images}
            />
          );
        })}
      </div>
    </section>
  );
};
