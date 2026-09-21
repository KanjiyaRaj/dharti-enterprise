import type { Product } from "../../data/products";
import { categoryTitle } from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  groups,
  onOpen,
}: {
  groups: { category: string; items: Product[] }[];
  onOpen: (product: Product) => void;
}) {
  if (groups.length === 0) {
    return (
      <div className="border border-charcoal bg-graphite/40 py-16 text-center">
        <p className="text-mutedgray text-sm">
          No products match your search. Try a different term or category.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-14">
      {groups.map((group) => (
        <section key={group.category} aria-labelledby={`cat-${group.category}`}>
          <div className="flex items-baseline gap-3 mb-6 border-b border-charcoal pb-3">
            <h2
              id={`cat-${group.category}`}
              className="font-display font-semibold text-lg sm:text-xl text-offwhite uppercase tracking-wide"
            >
              {categoryTitle(group.category)}
            </h2>
            <span className="font-mono text-xs text-mutedgray">
              {group.items.length} {group.items.length === 1 ? "product" : "products"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
            {group.items.map((product) => (
              <ProductCard key={product.id} product={product} onOpen={onOpen} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
