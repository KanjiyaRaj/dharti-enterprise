import {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import L from "leaflet";
import {Clock, ExternalLink, MapPin, MessageCircle, Phone} from "lucide-react";
import {appleMapsUrl, type Branch, branches, googleMapsUrl} from "../data/locations";
import {branchEnquiryLink} from "../utils/whatsapp";
import Reveal from "./Reveal";

const markerIcon = (active: boolean) =>
    L.divIcon({
        className: "",
        html: `<div style="
      width:${active ? 22 : 16}px;height:${active ? 22 : 16}px;
      background:${active ? "#22A9D6" : "#1688C9"};
      border:2px solid #FFFFFF;
      transform:rotate(45deg);
      box-shadow:0 0 0 3px rgba(22,136,201,0.22);
    "></div>`,
        iconSize: [active ? 22 : 16, active ? 22 : 16],
        iconAnchor: [active ? 11 : 8, active ? 11 : 8],
    });

// function FlyToBranch({ branch }: { branch: Branch | null }) {
//   const map = useMap();
//   if (branch) {
//     map.flyTo([branch.latitude, branch.longitude], 12, { duration: 0.8 });
//   }
//   return null;
// }

function MapController({branch}: { branch: Branch }) {
    const map = useMap();

    useEffect(() => {
        map.setView(
            [branch.latitude, branch.longitude],
            12,
            {
                animate: true,
                duration: 0.8,
            }
        );
    }, [branch, map]);

    return null;
}

function BranchDetails({branch}: { branch: Branch }) {
    return (
        <div className="border border-charcoal bg-graphite/60 p-6">
            <h3 className="font-display font-semibold text-lg text-offwhite">{branch.name}</h3>
            <div className="mt-4 space-y-3 text-sm text-mutedgray">
                <p className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-copper mt-0.5 shrink-0"/>
                    <span>
            {branch.address}
          </span>
                </p>
                <p className="flex items-center gap-2.5">
                    <Phone size={16} className="text-copper shrink-0"/>
                    <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="hover:text-offwhite">
                        {branch.phone}
                    </a>
                </p>
                <p className="flex items-center gap-2.5">
                    <Clock size={16} className="text-copper shrink-0"/>
                    {branch.openingHours}
                </p>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2.5">
                <a
                    href={branchEnquiryLink(branch.name, branch.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-4 py-2.5 text-sm font-medium hover:bg-whatsapp-dark transition-colors"
                >
                    <MessageCircle size={15}/>
                    WhatsApp This Branch
                </a>
                <div className="grid grid-cols-2 gap-2.5 max-sm:grid-cols-1">
                    <a
                        href={googleMapsUrl(branch)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 border border-mutedgray/30 text-offwhite px-3 py-2.5 text-xs font-medium hover:border-copper hover:text-copper transition-colors"
                    >
                        <ExternalLink size={13}/>
                        Google Maps
                    </a>
                    <a
                        href={appleMapsUrl(branch)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 border border-mutedgray/30 text-offwhite px-3 py-2.5 text-xs font-medium hover:border-copper hover:text-copper transition-colors"
                    >
                        <ExternalLink size={13}/>
                        Apple Maps
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function LocationsMap() {
    const [activeId, setActiveId] = useState<string>(branches[0].id);
    const active = branches.find((b) => b.id === activeId) ?? branches[0];

    return (
        <section id="locations" className="bg-graphite py-20 md:py-28 border-t border-charcoal">
            <div className="max-w-360 mx-auto px-5 md:px-10">
                <Reveal>
                    <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-offwhite leading-tight">
                        Find us near you
                    </h2>
                </Reveal>
                <Reveal delay={80}>
                    <p className="mt-4 max-w-xl text-mutedgray text-base leading-relaxed">
                        Connect with our nearest branch for product enquiries and ceramic industry
                        hardware requirements.
                    </p>
                </Reveal>

                {/* Desktop layout */}
                <div className="mt-12 hidden lg:grid grid-cols-[1fr_360px] border border-charcoal">
                    <div className="h-[560px]">
                        <MapContainer
                            center={[active.latitude, active.longitude]}
                            zoom={7}
                            scrollWheelZoom={false}
                            style={{height: "100%", width: "100%", background: "#F5F7F8"}}
                        >
                            <TileLayer
                                attribution='&copy; OpenStreetMap contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {/*<FlyToBranch branch={active}/>*/}
                            <MapController branch={active}/>
                            {branches.map((b) => (
                                <Marker
                                    key={b.id}
                                    position={[b.latitude, b.longitude]}
                                    icon={markerIcon(b.id === activeId)}
                                    eventHandlers={{click: () => setActiveId(b.id)}}
                                >
                                    <Popup>
                                        <div className="font-body">
                                            <p className="font-semibold">{b.name}</p>
                                            <p className="text-xs mt-1">{b.address}, {b.city}</p>
                                            <p className="text-xs mt-1">{b.openingHours}</p>
                                            <a
                                                href={branchEnquiryLink(b.name, b.whatsapp)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-whatsapp-dark font-medium mt-2 inline-block"
                                            >
                                                WhatsApp This Branch →
                                            </a>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>

                    <div className="border-l border-charcoal bg-obsidian p-6 flex flex-col">
                        <p className="font-mono text-xs tracking-wide text-copper mb-4">OUR LOCATIONS</p>
                        <ul className="space-y-1.5 mb-5">
                            {branches.map((b) => (
                                <li key={b.id}>
                                    <button
                                        onClick={() => setActiveId(b.id)}
                                        className={`w-full text-left px-3.5 py-2.5 text-sm transition-colors border ${
                                            b.id === activeId
                                                ? "border-copper/60 text-offwhite bg-graphite"
                                                : "border-transparent text-mutedgray hover:text-offwhite hover:bg-graphite/60"
                                        }`}
                                    >
                                        {b.name} <span className="text-xs text-mutedgray">— {b.city}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <BranchDetails branch={active}/>
                    </div>
                </div>

                {/* Mobile / tablet layout */}
                <div className="mt-12 lg:hidden border border-charcoal">
                    <div className="h-[380px]">
                        <MapContainer
                            center={[active.latitude, active.longitude]}
                            zoom={7}
                            scrollWheelZoom={false}
                            style={{height: "100%", width: "100%", background: "#F5F7F8"}}
                        >
                            <TileLayer
                                attribution='&copy; OpenStreetMap contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {/*<FlyToBranch branch={active}/>*/}
                            <MapController branch={active}/>
                            {branches.map((b) => (
                                <Marker
                                    key={b.id}
                                    position={[b.latitude, b.longitude]}
                                    icon={markerIcon(b.id === activeId)}
                                    eventHandlers={{click: () => setActiveId(b.id)}}
                                >
                                    <Popup>
                                        <div className="font-body">
                                            <p className="font-semibold">{b.name}</p>
                                            <p className="text-xs mt-1">{b.address}, {b.city}</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>

                    <div className="p-5 bg-obsidian">
                        <label htmlFor="branch-select" className="sr-only">
                            Select a branch
                        </label>
                        <select
                            id="branch-select"
                            value={activeId}
                            onChange={(e) => setActiveId(e.target.value)}
                            className="w-full bg-graphite border border-charcoal text-offwhite px-4 py-3 text-sm mb-5"
                        >
                            {branches.map((b) => (
                                <option key={b.id} value={b.id}>
                                    {b.name} — {b.city}
                                </option>
                            ))}
                        </select>

                        <BranchDetails branch={active}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
