import { Factory, Layers, Boxes, Building2, MessageSquare, MapPinned } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: Factory,
    title: "Ceramic industry focus",
    text: "Products selected around ceramic manufacturing and machinery requirements.",
  },
  {
    icon: Layers,
    title: "Ceramic machinery understanding",
    text: "Parts relevant to polishing, squaring, grinding, drive systems and other ceramic machinery.",
  },
  {
    icon: Boxes,
    title: "Broad component range",
    text: "Multiple categories of machinery and industrial components.",
  },
  {
    icon: Building2,
    title: "B2B supply",
    text: "Designed for factories, machinery businesses, dealers and industrial customers.",
  },
  {
    icon: MessageSquare,
    title: "Reliable communication",
    text: "Make enquiries and product discussions easy through WhatsApp and direct contact.",
  },
  {
    icon: MapPinned,
    title: "Multiple locations",
    text: "Customers can connect with the branch most convenient for them.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-obsidian py-20 md:py-28 border-t border-charcoal">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-offwhite max-w-2xl leading-tight">
            A specialized supply partner for ceramic industry
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 70}>
              <div className="flex gap-4">
                <b.icon size={22} strokeWidth={1.5} className="text-copper mt-1 shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-base text-offwhite">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-mutedgray leading-relaxed">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
