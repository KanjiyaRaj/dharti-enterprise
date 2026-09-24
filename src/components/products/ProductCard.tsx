import type { Product } from "../../data/products";
import ProductImage from "./ProductImage";

export default function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (product: Product) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(product)}
      className="group text-left bg-obsidian border border-charcoal hover:border-copper/50 shadow-sm hover:shadow-lg transition-all rounded-sm overflow-hidden flex flex-col focus-visible:outline-2 focus-visible:outline-copper"
    >
      <ProductImage
        src={product.image}
        alt={product.name}
        seedKey={product.id}
        className="aspect-square"
      />
      <div className="p-3.5 flex flex-col gap-1 flex-1">
        <span className="font-mono text-[10px] tracking-wide text-copper uppercase">
          {product.category}
        </span>
        <h3 className="font-display font-semibold text-sm text-offwhite leading-snug">
          {product.name}
        </h3>
        {product.productCode && (
          <span className="font-mono text-[11px] text-mutedgray">{product.productCode}</span>
        )}
        <span className="mt-auto pt-2 text-xs font-medium text-mutedgray group-hover:text-copper transition-colors">
          View Details →
        </span>
      </div>
    </button>
  );
}
