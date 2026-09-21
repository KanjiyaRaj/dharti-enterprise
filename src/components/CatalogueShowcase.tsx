import {ArrowRight, FileText, Grid3x3} from "lucide-react";
import {Link} from "react-router-dom";
import {siteConfig} from "../config/siteConfig";
import Reveal from "./Reveal";

export default function CatalogueShowcase() {
    return (
        <section id="catalogue" className="bg-graphite py-20 md:py-28 border-t border-charcoal">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div
                    className="tech-frame border border-charcoal bg-obsidian p-8 md:p-14 grid md:grid-cols-[1fr_auto] gap-8 items-center bp-grid">
                    <Reveal>
                        <div>
                            <FileText size={28} strokeWidth={1.4} className="text-copper mb-6"/>
                            <h2 className="font-display font-semibold text-3xl md:text-4xl text-offwhite leading-tight max-w-lg">
                                Explore our product catalogue
                            </h2>
                            <p className="mt-4 max-w-md text-mutedgray text-base leading-relaxed">
                                Browse our wider range of specialized ceramic machinery parts, spare
                                components and industrial hardware.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <div
                            className="flex flex-col gap-3 w-full sm:w-auto [@media(min-width:320px)_and_(max-width:330px)]:w-55">
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center gap-2 bg-copper text-white px-7 py-4 font-medium text-sm hover:bg-gold transition-colors whitespace-nowrap"
                            >
                                <Grid3x3 size={16}/>
                                Browse All Products
                            </Link>
                            <a
                                href={siteConfig.catalogueUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-charcoal text-offwhite px-7 py-4 font-medium text-sm hover:border-copper hover:text-copper transition-colors whitespace-nowrap"
                            >
                                View Complete Catalogue
                                <ArrowRight size={16}/>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
