export interface Branch {
    id: string;
    name: string;
    address: string;
    city: string;
    latitude: number;
    longitude: number;
    phone: string;
    whatsapp: string;
    openingHours: string;
    googleMapsUrl?: string;
    appleMapsUrl?: string;
}

// Placeholder coordinates set across a ceramic-manufacturing hub region (Gujarat, India).
// Replace with real branch data.
export const branches: Branch[] = [
    {
        id: "branch-01",
        name: "DHARTI ENTERPRISE",
        address: "SHAKTI CHEMBAR-2, AAROHI COMPLEX",
        city: "Morbi, Gujarat",
        latitude: 22.8140336,
        longitude: 70.8640152,
        phone: "+91 99791 03115",
        whatsapp: "919979103115",
        openingHours: "Mon – Sat: 9:30 AM – 7:00 PM",
        googleMapsUrl: "https://www.google.com/maps/place/Dharti+Enterprise/@22.8140257,70.8649665,17.73z/data=!4m14!1m7!3m6!1s0x39598d182ed9d851:0x6bf7c3b156c31a24!2sDharti+Enterprise!8m2!3d22.8140336!4d70.8665901!16s%2Fg%2F11w7btggf_!3m5!1s0x39598d182ed9d851:0x6bf7c3b156c31a24!8m2!3d22.8140336!4d70.8665901!16s%2Fg%2F11w7btggf_?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: "branch-02",
        name: "DHARTI TOOLS",
        address: "DAPA SITARAM COMPLEX , UCHI MANDAL",
        city: "Morbi, Gujarat",
        latitude: 22.8539702,
        longitude: 70.9374273,
        phone: "+91 90999 02929",
        whatsapp: "919099902929",
        openingHours: "Mon – Sat: 9:30 AM – 7:00 PM",
    },
    {
        id: "branch-03",
        name: "DHARTI INTERNATIONAL",
        address: "PANCHSHIL PLAZA , NEAR VIVANTA CERAMIC , BELA",
        city: "Morbi, Gujarat",
        latitude: 22.8933418,
        longitude: 70.8809774,
        phone: "+91 99139 44987",
        whatsapp: "919913944987",
        openingHours: "Mon – Sat: 9:30 AM – 7:00 PM",
        googleMapsUrl: "https://www.google.com/maps/place/Dharti+international/@22.8933418,70.8809774,17z/data=!3m1!4b1!4m6!3m5!1s0x39598b001bfc51a5:0xad6fda1a2f900e1b!8m2!3d22.8933418!4d70.8835523!16s%2Fg%2F11nvx7cdvt?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: "branch-04",
        name: "DHARTI HARDWARE",
        address: "NEAR SHIVAJI WAYBRIGE , DHUVA",
        city: "Morbi, Gujarat",
        latitude: 22.719921,
        longitude: 70.937217,
        phone: "+91 97375 56643",
        whatsapp: "919737556643",
        openingHours: "Mon – Sat: 9:30 AM – 7:00 PM",
    },
];

export function googleMapsUrl(branch: Branch): string {
    if (branch.googleMapsUrl) return branch.googleMapsUrl;
    return `https://www.google.com/maps/search/?api=1&query=${branch.latitude},${branch.longitude}`;
}

export function appleMapsUrl(branch: Branch): string {
    if (branch.appleMapsUrl) return branch.appleMapsUrl;
    return `https://maps.apple.com/?q=${encodeURIComponent(branch.name)}&ll=${branch.latitude},${branch.longitude}`;
}
