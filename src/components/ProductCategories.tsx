import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { landingCategories as categories } from "../data/landingCategories";
import { IconByName } from "../utils/icons";
import Reveal from "./Reveal";

export default function ProductCategories() {
  return (
    <section id="products" className="bg-graphite py-20 md:py-28 border-t border-charcoal">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-offwhite leading-tight">
              Products for ceramic manufacturing
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 text-mutedgray text-base md:text-lg leading-relaxed">
              Explore hardware, machinery components and industrial products used in ceramic
              production environments.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 4) * 70}>
              <Link
                to={cat.searchTerm ? `/products?q=${encodeURIComponent(cat.searchTerm)}` : "/products"}
                className="tech-frame group block h-full bg-obsidian border border-charcoal hover:border-copper/50 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <IconByName
                  name={cat.icon}
                  size={30}
                  strokeWidth={1.4}
                  className="text-copper mb-6"
                />
                <h3 className="font-display font-semibold text-lg text-offwhite leading-snug">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm text-mutedgray leading-relaxed">
                  {cat.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-copper opacity-80 group-hover:opacity-100">
                  Explore Category
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
