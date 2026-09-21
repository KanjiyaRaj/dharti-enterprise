import {Mail, MapPin, Phone} from "lucide-react";
import {Link} from "react-router-dom";
import {siteConfig} from "../config/siteConfig";

const columns = [
    {
        title: "Products",
        links: [
            {label: "All Products", to: "/products"},
            {label: "Ceramic Machinery Components", href: "/#products"},
            {label: "Polishing Line Components", href: "/#products"},
            {label: "Grinding & Chamfering", href: "/#products"},
            {label: "Bearings & Bearing Components", href: "/#products"},
        ],
    },
    {
        title: "Company",
        links: [
            {label: "Product Range", href: "/#product-range"},
            {label: "Catalogue", href: "/#catalogue"},
            {label: "Locations", href: "/#locations"},
            {label: "Contact", href: "/#contact"},
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-graphite border-t border-charcoal">
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-16">
                <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
                    <div>
                        <a href="/#home" className="flex items-center gap-2.5 shrink-0">
              <span className="w-9 h-9 rounded-sm border border-copper/60 flex items-center justify-center">
            <span className="w-3 h-3 bg-copper rotate-45"/>
          </span>
                            <span className="font-display font-semibold text-lg text-offwhite tracking-tight">
            {siteConfig.shortName}
          </span>
                        </a>
                        <p className="mt-4 max-w-xs text-sm text-mutedgray leading-relaxed">
                            Dharti Enterprise supplies specialized hardware, machinery
                            components and spare parts for the ceramic industry.
                        </p>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h3 className="font-display font-semibold text-sm text-offwhite mb-4">
                                {col.title}
                            </h3>
                            <ul className="space-y-2.5">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        {"to" in l && l.to ? (
                                            <Link to={l.to}
                                                  className="text-sm text-mutedgray hover:text-copper transition-colors">
                                                {l.label}
                                            </Link>
                                        ) : (
                                            <a href={l.href}
                                               className="text-sm text-mutedgray hover:text-copper transition-colors">
                                                {l.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="font-display font-semibold text-sm text-offwhite mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm text-mutedgray">
                            <li className="flex items-start gap-2.5">
                                <Phone size={15} className="text-copper mt-0.5 shrink-0"/>
                                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-offwhite">
                                    {siteConfig.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Mail size={15} className="text-copper mt-0.5 shrink-0"/>
                                <a href={`mailto:${siteConfig.email}`} className="hover:text-offwhite">
                                    {siteConfig.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <MapPin size={15} className="text-copper mt-0.5 shrink-0"/>
                                <span>{siteConfig.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="mt-14 pt-6 border-t border-charcoal flex flex-col sm:flex-row justify-between gap-3 text-xs text-mutedgray">
                    <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
                    <p>{siteConfig.website}</p>
                </div>
            </div>
        </footer>
    );
}
