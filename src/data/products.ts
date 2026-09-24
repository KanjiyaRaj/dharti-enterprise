// Auto-generated from the Dharti Enterprise product catalogue (PDF scan).
// Categories and product names/codes are taken directly from that catalogue;
// no specifications, materials, or codes have been invented.

export interface ProductCategoryDef {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    itemNumber?: number;
    productCode?: string;
    description: string;
    application: string;
    catalogPage: number;
    image?: string;
    featured?: boolean;
    sizes?: string;
}

export const categories: ProductCategoryDef[] = [
    {
        id: "polishing-head-device-kd268c-00",
        title: "Polishing Head Device",
        description: "Components and replacement parts for the ceramic tile polishing head device.",
        icon: "Layers",

    },
    {
        id: "squaring-head-device-kd356e-00",
        title: "Squaring Head Device",
        description: "Components and replacement parts for the ceramic tile squaring head device.",
        icon: "Settings",
    },
    {
        id: "main-drive-parts-tbsc10",
        title: "Main Drive Parts",
        description: "Main drive components used in ceramic manufacturing machinery.",
        icon: "Cog",
    },
    {
        id: "sizing-belt-wheel-assembly",
        title: "Sizing Belt Wheel & Assembly",
        description: "Belt wheel and sizing assembly components for ceramic tile sizing lines.",
        icon: "CircleDot",
    },
    {
        id: "jib-support-parts-tbsb1-00",
        title: "Jib Support Parts",
        description: "Jib support and structural components for ceramic production machinery.",
        icon: "Wrench",
    },
    {
        id: "centering-device-parts",
        title: "Centering Device Parts",
        description: "Components for centering devices used in ceramic manufacturing machinery.",
        icon: "CircleDashed",
    },
    {
        id: "chamfering-head-parts-kd379-00",
        title: "Chamfering Head Parts",
        description: "Components and replacement parts for the ceramic tile chamfering head device.",
        icon: "Slice",
    },
    {
        id: "oscillation-parts",
        title: "Oscillation Parts",
        description: "Oscillation system components used in ceramic tile production machinery.",
        icon: "RefreshCw",
    },
    {
        id: "polishing-unit-parts-tpsa-00",
        title: "Polishing Unit Parts",
        description: "Components and replacement parts for ceramic tile polishing units.",
        icon: "Factory",
    },
    {
        id: "neno-head-spare-parts",
        title: "Neno Head Spare Parts",
        description: "Spare parts for Neno-type polishing heads used in ceramic tile production.",
        icon: "Boxes",
    },
    {
        id: "tile-pusher-parts",
        title: "Tile Pusher Parts",
        description: "Components for tile pusher mechanisms in ceramic manufacturing machinery.",
        icon: "Wind",
    },
    {
        id: "adjustor-parts",
        title: "Adjustor Parts",
        description: "Adjustor mechanism components used in ceramic machinery calibration.",
        icon: "Settings",
    },
    {
        id: "sizing-press-plate-parts",
        title: "Sizing Press Plate Parts",
        description: "Press plate and frame components for ceramic tile sizing machinery.",
        icon: "Layers",
    },
    {
        id: "hydraulic-cylinder-pump-spares-yb",
        title: "Hydraulic Cylinder Pump Spares",
        description: "Spare parts for hydraulic cylinder pumps used in ceramic production machinery.",
        icon: "Droplet",
    },
    {
        id: "rotary-pump-spare-parts",
        title: "Rotary Pump Spare Parts",
        description: "Spare parts for rotary pumps used in ceramic manufacturing applications.",
        icon: "RefreshCw",
    },
    // {
    //     id: "general-machinery-components-consumables",
    //     title: "General Machinery Components & Consumables",
    //     description: "Belts, rollers, filters and other general components used across ceramic production machinery.",
    //     icon: "Boxes",
    // },
    // {
    //     id: "grinding-chamfering-sizing-wheels",
    //     title: "Grinding, Chamfering & Sizing Wheels",
    //     description: "Grinding, chamfering and sizing wheels, rollers and belts used in ceramic tile finishing lines.",
    //     icon: "CircleDot",
    // },
];

// export const featuredProducts = products.filter((p) => p.featured);
export const featuredProducts = [
    {
        id: "polishing-head-device-kd268c-00-1",
        name: "Polishing Head Device",
        category: "polishing-head-device-kd268c-00",
        itemNumber: 1,
        productCode: "KD268c-00-1",
        description: "Components and replacement parts for the ceramic tile polishing head device.",
        application: "used to grind, smooth, and buff ceramic tile or slab surfaces to a uniform gloss or mirror finish",
        catalogPage: 1,
        image: "/images/products/polishing/head.webp",
    },
    {
        id: "rotary-pump-spare-parts-335",
        name: "Rottary Pump",
        category: "rottary-pump",
        itemNumber: 335,
        description: "Spare parts for rotary pumps used in ceramic manufacturing applications.",
        application: "Used to transfer highly viscous and abrasive fluid mixtures from storage tanks to processing areas or spray drying towers.",
        catalogPage: 16,
        image: "/images/products/polishing/rottary pump.png",
    },
    {
        id: "polishing-head-device-kd268c-00-13",
        name: "Mid Gear",
        category: "polishing-head-device-kd268c-00",
        itemNumber: 13,
        productCode: "KD268C-04",
        description: "Components and replacement parts for the ceramic tile polishing head device.",
        application: "Used in ceramic-industry machinery and equipment (Polishing Head Device (KD268C.00)).",
        catalogPage: 1,
        image: "/images/products/polishing/MID GEAR.png",
    },
]

export function categoryTitle(categoryId: string): string {
    return categories.find((c) => c.id === categoryId)?.title ?? categoryId;
}
