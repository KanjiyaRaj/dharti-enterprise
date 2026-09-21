import { MessageCircle, FileText } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { generalEnquiryLink } from "../utils/whatsapp";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-obsidian py-24 md:py-32 border-t border-charcoal bp-grid">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 text-center">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-offwhite max-w-3xl mx-auto leading-tight">
            Need the Right Parts for Your Ceramic Machinery?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-xl mx-auto text-mutedgray text-base md:text-lg leading-relaxed">
            Talk to our team about polishing and squaring head parts, drive components,
            sizing parts, pumps, hydraulic spares and other ceramic machinery requirements.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={generalEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white px-7 py-4 font-medium text-sm hover:bg-whatsapp-dark transition-colors"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
            <a
              href={siteConfig.catalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-mutedgray/40 text-offwhite px-7 py-4 font-medium text-sm hover:border-copper hover:text-copper transition-colors"
            >
              <FileText size={17} />
              View Catalogue
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
