import {Building2, Factory, Truck, Users} from "lucide-react";
import {siteConfig} from "../config/siteConfig";
import Reveal from "./Reveal";

const flow = [
    {label: siteConfig.shortName, sub: "Ceramic industry hardware"},
    {label: "Ceramic Industry", sub: "Factories and manufacturers"},
    {label: "Machinery & Equipment", sub: "Polishing, squaring, drive, sizing and pump systems"},
    {label: "Specialized Components", sub: "Parts, spares and maintenance supply"},
];

const audiences = [
    {icon: Factory, label: "Ceramic manufacturers"},
    {icon: Building2, label: "Machinery companies"},
    {icon: Truck, label: "Industrial businesses"},
    {icon: Users, label: "Dealers & distributors"},
];

export default function DistributionNetwork() {
    return (
        <section className="bg-obsidian py-20 md:py-28 border-t border-charcoal">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <Reveal>
                    <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-offwhite max-w-2xl leading-tight">
                        A supply chain built for the factory floor
                    </h2>
                </Reveal>

                <Reveal delay={80}>
                    <div className="mt-14 flex flex-col md:flex-row md:items-stretch gap-0">
                        {flow.map((step, i) => (
                            <div key={step.label} className="flex flex-1 items-stretch">
                                <div
                                    className="flex flex-1 flex-col justify-center border border-charcoal bg-graphite/50 px-5 py-6 text-center"
                                >
                                    <p className="font-display font-medium text-sm md:text-base text-offwhite">
                                        {step.label}
                                    </p>

                                    <p className="mt-1.5 text-xs text-mutedgray">
                                        {step.sub}
                                    </p>
                                </div>

                                {i < flow.length - 1 && (
                                    <div
                                        className="hidden md:block w-10 h-px bg-copper/50 shrink-0 self-center"
                                        aria-hidden="true"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </Reveal>

                <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5 max-sm:grid-cols-1">
                    {audiences.map((a, i) => (
                        <Reveal key={a.label} delay={i * 60}>
                            <div className="flex items-center gap-3 border border-charcoal px-5 py-4 bg-graphite/30">
                                <a.icon size={20} strokeWidth={1.5} className="text-copper shrink-0"/>
                                <span className="text-sm text-offwhite">{a.label}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
