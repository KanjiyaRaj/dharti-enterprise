import {ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import {categories} from "../data/products";
import {IconByName} from "../utils/icons";
import Reveal from "./Reveal";

// The primary, named business categories (per Dharti Enterprise's actual
// product range) surfaced on the homepage. All categories — including a
// few additional ones present in the catalogue — remain fully browsable
// on the /products page; this is a curated overview, not the full list.
const PRIMARY_CATEGORY_IDS = [
    "polishing-head-device-kd268c-00",
    "squaring-head-device-kd356e-00",
    "main-drive-parts-tbsc10",
    // "sizing-belt-wheel-assembly",
    // "jib-support-parts-tbsb1-00",
    "chamfering-head-parts-kd379-00",
    // "polishing-unit-parts-tpsa-00",
    "neno-head-spare-parts",
    "tile-pusher-parts",
    // "adjustor-parts",
    // "sizing-press-plate-parts",
    // "hydraulic-cylinder-pump-spares-yb",
    // "rotary-pump-spare-parts",
];

const productRangeCategories = PRIMARY_CATEGORY_IDS.map((id) =>
    categories.find((c) => c.id === id)
).filter((c): c is NonNullable<typeof c> => Boolean(c));

console.log(productRangeCategories)


export default function OurProductRange() {
    return (
        <section id="product-range" className="bg-obsidian py-20 md:py-28 border-t border-charcoal">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <Reveal>
                    <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-offwhite max-w-2xl leading-tight">
                        Our Product Range
                    </h2>
                </Reveal>
                <Reveal delay={80}>
                    <p className="mt-4 max-w-2xl text-mutedgray text-base md:text-lg leading-relaxed">
                        Dharti Enterprise supplies a broad range of specialized hardware, machinery
                        components and spare parts for the ceramic industry — across the devices and
                        systems below and more.
                    </p>
                </Reveal>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {productRangeCategories.map((cat, i) => (
                        <Reveal key={cat.id} delay={(i % 4) * 60}>
                            <Link
                                to={`/products?category=${encodeURIComponent(cat.id)}`}
                                className="group flex items-center gap-3 h-17 border border-charcoal bg-graphite/40 hover:border-copper/50 hover:bg-graphite px-5 py-4 shadow-sm hover:shadow-md transition-all"
                            >
                                <IconByName
                                    name={cat.icon}
                                    size={20}
                                    strokeWidth={1.6}
                                    className="text-copper shrink-0"
                                />
                                <span className="text-sm text-offwhite leading-snug flex-1">{cat.title}</span>
                                <ArrowUpRight
                                    size={14}
                                    className="text-mutedgray group-hover:text-copper transition-colors shrink-0"
                                />
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
