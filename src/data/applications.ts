export interface ExpertiseCard {
  id: string;
  title: string;
  icon: string;
}

export const expertiseAreas: ExpertiseCard[] = [
  { id: "production", title: "Ceramic Production", icon: "Factory" },
  { id: "polishing", title: "Polishing Lines", icon: "Layers" },
  { id: "grinding", title: "Grinding & Chamfering", icon: "CircleDot" },
  { id: "maintenance", title: "Machinery Maintenance", icon: "Wrench" },
  { id: "components", title: "Machine Components", icon: "Cog" },
  { id: "automation", title: "Industrial Automation", icon: "CircuitBoard" },
];
