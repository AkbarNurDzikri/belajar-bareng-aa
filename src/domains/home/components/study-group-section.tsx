import { dummyStudyGroup } from "../constants/dummy-study-group";
import { StudyGroupCard } from "./study-group-card";

export const StudyGroupSection = () => {
  return (
    <section className="px-5 bg-slate-100" id="study-group">
      <h2 className="text-xl md:text-3xl text-violet-700 font-bold text-center">
        🎯 Kelompok Belajar Kami
      </h2>
      <div className="flex flex-row gap-3 flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-slate-200">
        {dummyStudyGroup.map((d, i) => (
          <StudyGroupCard
            key={i}
            groupName={d.groupName}
            maxSlot={d.maxSlot}
            registered={d.registered}
            schedules={d.schedules}
          />
        ))}
      </div>
    </section>
  );
};
