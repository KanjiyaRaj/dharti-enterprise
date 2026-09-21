import {
  Cog,
  Layers,
  CircleDot,
  CircleDashed,
  Wind,
  CircuitBoard,
  Wrench,
  Boxes,
  Factory,
  Slice,
  RefreshCw,
  Settings,
  Droplet,
  type LucideProps,
} from "lucide-react";

const registry: Record<string, React.ComponentType<LucideProps>> = {
  Cog,
  Layers,
  CircleDot,
  CircleDashed,
  Wind,
  CircuitBoard,
  Wrench,
  Boxes,
  Factory,
  Slice,
  RefreshCw,
  Settings,
  Droplet,
};

export function IconByName({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = registry[name] ?? Boxes;
  return <Cmp {...props} />;
}
