import { expertiseAreas } from "../data/applications";
import { IconByName } from "../utils/icons";
import Reveal from "./Reveal";

export default function IndustryExpertise() {
  return (
    <section id="expertise" className="bg-obsidian py-20 md:py-28 border-t border-charcoal">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-offwhite leading-tight">
              Built around the ceramic industry
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-mutedgray text-base md:text-lg leading-relaxed">
              We supply specialized hardware, machinery components and spare parts used
              across ceramic factories, machinery and manufacturing equipment — not
              general hardware for every trade.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-charcoal border border-charcoal">
          {expertiseAreas.map((area, i) => (
            <Reveal key={area.id} delay={i * 60} className="bg-obsidian">
              <div className="p-6 md:p-7 h-full flex flex-col gap-4 hover:bg-graphite transition-colors">
                <IconByName name={area.icon} size={26} className="text-copper" strokeWidth={1.5} />
                <span className="font-body text-sm text-offwhite leading-snug">
                  {area.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
