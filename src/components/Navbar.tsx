import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Menu, MessageCircle, X} from "lucide-react";
import {generalEnquiryLink} from "../utils/whatsapp";
import {siteConfig} from "../config/siteConfig.ts";

const links = [
    {href: "/#home", label: "Home"},
    {href: "/#expertise", label: "About"},
    {to: "/products", label: "Products"},
    {href: "/#product-range", label: "Product Range"},
    {href: "/#catalogue", label: "Catalogue"},
    {href: "/#locations", label: "Locations"},
    {href: "/#contact", label: "Contact"},
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[2000] transition-all duration-300 ${
                scrolled
                    ? "bg-obsidian/95 backdrop-blur border-b border-charcoal shadow-[0_1px_16px_rgba(17,24,39,0.06)]"
                    : "bg-obsidian/70 backdrop-blur-sm border-b border-transparent"
            }`}
        >
            <nav className="max-w-360 mx-auto flex items-center justify-between px-5 md:px-10 h-18 py-4">
                <Link to="/" className="flex items-center gap-2.5 shrink-0">
                    {/*          <span className="w-9 h-9 rounded-sm border border-copper/60 flex items-center justify-center">*/}
                    {/*  <span className="w-3 h-3 bg-copper rotate-45"/>*/}
                    {/*</span>*/}
                    {/*          <span className="font-display font-semibold text-lg text-offwhite tracking-tight">*/}
                    {/*  {siteConfig.shortName}*/}
                    {/*</span>*/}
                    <img src="/images/branding/dharti_enterprise_logo-removebg-preview.png" alt="dharti enterprise"
                         className="h-7 w-7"/>
                    <span className="font-display font-semibold text-lg text-offwhite tracking-tight">
                      {siteConfig.shortName}
                    </span>
                </Link>

                <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-mutedgray">
                    {links.map((l) =>
                        l.to ? (
                            <li key={l.to}>
                                <Link to={l.to} className="hover:text-offwhite transition-colors">
                                    {l.label}
                                </Link>
                            </li>
                        ) : (
                            <li key={l.href}>
                                <a href={l.href} className="hover:text-offwhite transition-colors">
                                    {l.label}
                                </a>
                            </li>
                        )
                    )}
                </ul>

                <a
                    href={generalEnquiryLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex items-center gap-2 border border-whatsapp/50 text-whatsapp-dark hover:bg-whatsapp hover:text-white hover:border-whatsapp transition-colors px-4 py-2 text-sm font-medium"
                >
                    <MessageCircle size={16}/>
                    WhatsApp
                </a>

                <button
                    className="lg:hidden text-offwhite p-2"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </nav>

            {open && (
                <div className="lg:hidden bg-obsidian border-t border-charcoal px-5 py-4">
                    <ul className="flex flex-col gap-1 font-body text-base">
                        {links.map((l) =>
                            l.to ? (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        onClick={() => setOpen(false)}
                                        className="block py-2.5 text-mutedgray hover:text-offwhite border-b border-charcoal/60"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ) : (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        className="block py-2.5 text-mutedgray hover:text-offwhite border-b border-charcoal/60"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                    <a
                        href={generalEnquiryLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2 border border-whatsapp/50 text-whatsapp-dark px-4 py-3 text-sm font-medium"
                    >
                        <MessageCircle size={16}/>
                        Chat on WhatsApp
                    </a>
                </div>
            )}
        </header>
    );
}
