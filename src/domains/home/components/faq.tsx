import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeQuestionMark } from "lucide-react";
import { dummyFaq } from "../constants/dummy-faq";

export const Faq = () => {
  return (
    <section className="p-5 bg-slate-100" id="faq">
      <div className="flex items-center justify-center gap-3 mb-5">
        <BadgeQuestionMark className="w-8 h-8 text-pink-500" />
        <h2 className="text-xl md:text-3xl text-violet-700 font-bold text-center">
          Pertanyaan umum (FAQ)
        </h2>
      </div>

      <Accordion collapsible type="single" className="w-full md:w-1/2 mx-auto">
        {dummyFaq.map((f, i) => (
          <div key={i}>
            <AccordionItem value={`val-${i}`}>
              <AccordionTrigger className="border border-violet-500 p-2 hover:cursor-pointer md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="border border-violet-300 p-2 rounded-lg md:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </section>
  );
};
