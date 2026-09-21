import {ArrowRight, MessageCircle} from "lucide-react";
import {generalEnquiryLink} from "../utils/whatsapp";

const labels = [
    "Ceramic Industry Focused",
    "Machinery Components",
    "Machinery Spare Parts",
    "B2B Supply",
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-end bg-obsidian overflow-hidden pt-28 pb-16 md:pb-24"
        >
            {/* Blueprint grid backdrop */}
            <div className="absolute inset-0 bp-grid" aria-hidden="true"/>

            {/* Soft vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 70% 15%, rgba(22,136,201,0.08), transparent 60%), radial-gradient(ellipse 70% 50% at 0% 100%, rgba(238,241,243,0.9), transparent 70%)",
                }}
                aria-hidden="true"
            />

            {/* Rotating gear/roller motif */}
            <svg
                className="absolute -right-24 top-1/4 w-[480px] h-[480px] md:w-[620px] md:h-[620px] opacity-[0.16] pointer-events-none"
                style={{animation: "spin 90s linear infinite"}}
                viewBox="0 0 200 200"
                aria-hidden="true"
            >
                <circle cx="100" cy="100" r="70" fill="none" stroke="#1688C9" strokeWidth="1.4"/>
                <circle cx="100" cy="100" r="52" fill="none" stroke="#22A9D6" strokeWidth="1"/>
                {Array.from({length: 24}).map((_, i) => {
                    const angle = (i / 24) * 2 * Math.PI;
                    const x1 = 100 + 70 * Math.cos(angle);
                    const y1 = 100 + 70 * Math.sin(angle);
                    const x2 = 100 + 82 * Math.cos(angle);
                    const y2 = 100 + 82 * Math.sin(angle);
                    return (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1688C9" strokeWidth="2"/>
                    );
                })}
                <circle cx="100" cy="100" r="10" fill="#1688C9"/>
            </svg>
            <style>{`@keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }`}</style>

            <div className="relative z-10 max-w-360 mx-auto px-5 md:px-10 w-full">
                <div className="flex-wrap hidden lg:flex">
                    <p className="font-mono text-xs md:text-sm tracking-[0.18em] text-copper mb-6 border-l-2 border-copper pl-3">
                        CERAMIC INDUSTRY
                    </p>
                    <p className="font-mono text-xs md:text-sm tracking-[0.18em] text-copper mb-6 pl-3">
                        •&nbsp;&nbsp;MACHINERY COMPONENTS
                    </p>
                    <p className="font-mono text-xs md:text-sm tracking-[0.18em] text-copper mb-6 pl-3">
                        •&nbsp;&nbsp;PRODUCTION HARDWARE
                    </p>
                </div>

                <h1 className="font-display font-bold text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-offwhite max-w-4xl tracking-tight">
                    Specialized hardware for <span className="text-copper">ceramic production</span>.
                </h1>

                <p className="mt-6 max-w-xl text-base md:text-lg text-mutedgray leading-relaxed">
                    A wide range of specialized machinery parts, spare components and
                    industrial hardware for ceramic manufacturing equipment.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                    <a
                        href="#products"
                        className="inline-flex items-center gap-2 bg-copper text-obsidian px-6 py-3.5 font-medium text-sm hover:bg-gold transition-colors"
                    >
                        Explore Products
                        <ArrowRight size={16}/>
                    </a>
                    <a
                        href={generalEnquiryLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-whatsapp/50 text-whatsapp-dark px-6 py-3.5 font-medium text-sm hover:bg-whatsapp hover:text-white hover:border-whatsapp transition-colors"
                    >
                        <MessageCircle size={16}/>
                        WhatsApp Us
                    </a>
                </div>

                <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-charcoal pt-6">
                    {labels.map((l) => (
                        <div key={l} className="flex items-center gap-2 text-xs text-mutedgray font-mono">
                            <span className="w-1.5 h-1.5 bg-copper rotate-45"/>
                            {l}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
