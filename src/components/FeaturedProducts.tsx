import {MessageCircle} from "lucide-react";
import {categoryTitle, featuredProducts} from "../data/products";
import {productEnquiryLink} from "../utils/whatsapp";
import Reveal from "./Reveal";

// Deterministic technical pattern per product so each card looks distinct
// without relying on external photography assets.
function ProductGlyph({seed}: { seed: number }) {
    const n = (seed % 5) + 4;
    const r = 30 + (seed % 3) * 6;
    return (
        <svg viewBox="0 0 200 140" className="w-full h-full">
            <rect width="200" height="140" fill="#EEF1F3"/>
            <g stroke="#1688C9" strokeWidth="0.8" opacity="0.18">
                {Array.from({length: 6}).map((_, i) => (
                    <line key={i} x1={0} y1={(i + 1) * 20} x2={200} y2={(i + 1) * 20}/>
                ))}
            </g>
            <circle cx="100" cy="70" r={r} fill="none" stroke="#075985" strokeWidth="1.5" opacity="0.85"/>
            <circle cx="100" cy="70" r={r * 0.45} fill="none" stroke="#22A9D6" strokeWidth="1" opacity="0.7"/>
            {Array.from({length: n}).map((_, i) => {
                const angle = (i / n) * 2 * Math.PI;
                const x1 = 100 + r * Math.cos(angle);
                const y1 = 70 + r * Math.sin(angle);
                const x2 = 100 + (r + 10) * Math.cos(angle);
                const y2 = 70 + (r + 10) * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1688C9" strokeWidth="2"/>;
            })}
        </svg>
    );
}

export default function FeaturedProducts() {
    return (
        <section className="bg-graphite py-20 md:py-28 border-t border-charcoal">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                    <Reveal>
                        <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-offwhite leading-tight max-w-xl">
                            Product Highlights
                        </h2>
                    </Reveal>
                </div>

                <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProducts.map((p, i) => (
                        <Reveal key={p.id} delay={(i % 3) * 70}>
                            <article
                                className="group border border-charcoal bg-obsidian h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                                <div className="aspect-5/3 w-full overflow-hidden">

                                    {!p.image ? <div
                                        className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                                        <ProductGlyph seed={i}/>
                                    </div> : <img src={p.image} alt="not" className='h-full w-full'/>}
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-[11px] tracking-wide text-copper">
                    {categoryTitle(p.category)}
                  </span>
                                    <h3 className="mt-2 font-display font-semibold text-lg text-offwhite">
                                        {p.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-mutedgray leading-relaxed flex-1">
                                        {p.application}
                                    </p>
                                    <a
                                        href={productEnquiryLink(p.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-whatsapp-dark hover:text-whatsapp w-fit"
                                    >
                                        <MessageCircle size={15}/>
                                        Enquire on WhatsApp
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
