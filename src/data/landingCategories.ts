// Broad marketing category tiles used only on the landing page's Product
// Categories section. Kept separate from src/data/products.ts (the detailed,
// PDF-sourced catalogue used by the /products page) so that adding/expanding
// the full catalogue never changes the landing page's layout or content.

export interface LandingCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    /** Search term used to pre-filter the /products page when this tile is clicked. */
    searchTerm?: string;
}

export const landingCategories: LandingCategory[] = [
    {
        id: "ceramic-machinery-components",
        title: "Ceramic Machinery Components",
        description:
            "Machine parts, shafts, gears, sleeves, covers, rollers, seals and replacement components.",
        icon: "Cog",
        searchTerm: "Gear",
    },
    {
        id: "polishing-line-components",
        title: "Polishing Line Components",
        description:
            "Products and components used in ceramic tile polishing machines and polishing-line systems.",
        icon: "Layers",
        searchTerm: "Polishing",
    },
    {
        id: "grinding-chamfering",
        title: "Grinding & Chamfering",
        description:
            "Diamond wheels, resin wheels, water grinding wheels, chamfering wheels and grinding blocks.",
        icon: "CircleDot",
        searchTerm: "Chamfering",
    },
    {
        id: "bearings-bearing-components",
        title: "Bearings & Bearing Components",
        description:
            "Ball bearings, roller bearings, seated bearings, needle bearings and related components.",
        icon: "CircleDashed",
        searchTerm: "Bearing",
    },
];
