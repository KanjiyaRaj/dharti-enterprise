import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { categories, products, categoryTitle, type Product } from "../data/products";
import { siteConfig } from "../config/siteConfig";
import { usePageMeta } from "../hooks/usePageMeta";
import ProductFilters from "../components/products/ProductFilters";
import ProductSearch from "../components/products/ProductSearch";
import ProductGrid from "../components/products/ProductGrid";
import ProductDetails from "../components/products/ProductDetails";
import ContactCTA from "../components/ContactCTA";
import Reveal from "../components/Reveal";

const filterOptions = [
  { id: "All" as const, label: "All Products" },
  ...categories.map((c) => ({ id: c.id, label: c.title })),
];

const categoryIds = new Set<string>(categories.map((c) => c.id));

export default function Products() {
  usePageMeta(
    `Products | ${siteConfig.companyName}`,
    `Explore specialized ceramic machinery parts, hardware components and spare parts supplied by ${siteConfig.companyName} for the ceramic industry.`
  );

  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");
  const initialQuery = searchParams.get("q") ?? "";

  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategory && categoryIds.has(initialCategory) ? initialCategory : "All"
  );
  const [query, setQuery] = useState(initialQuery);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        categoryTitle(p.category).toLowerCase().includes(q) ||
        (p.productCode ?? "").toLowerCase().includes(q) ||
        (p.itemNumber ? String(p.itemNumber) : "").includes(q)
      );
    });
  }, [activeCategory, query]);

  const groups = useMemo(() => {
    const order = categories.map((c) => c.id);
    return order
      .map((cat) => ({
        category: cat,
        items: filtered.filter((p) => p.category === cat),
      }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian border-t border-charcoal pt-28 pb-10 md:pt-32 md:pb-14 bp-grid">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-mutedgray">
              <li>
                <Link to="/" className="hover:text-copper transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={12} />
              </li>
              <li className="text-offwhite" aria-current="page">
                Products
              </li>
            </ol>
          </nav>

          <p className="font-mono text-xs tracking-[0.18em] text-copper mb-4 border-l-2 border-copper pl-3 uppercase">
            {siteConfig.companyName}
          </p>

          <Reveal>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-offwhite tracking-tight max-w-2xl">
              Products for ceramic production
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-xl text-base md:text-lg text-mutedgray leading-relaxed">
              Explore our specialized ceramic machinery parts, hardware components and
              spare parts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters + search */}
      <section className="bg-graphite border-t border-charcoal py-6 sticky top-[64px] md:top-[72px] z-30 backdrop-blur bg-graphite/95">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <ProductFilters
            options={filterOptions}
            active={activeCategory}
            onChange={setActiveCategory}
          />
          <ProductSearch value={query} onChange={setQuery} />
        </div>
      </section>

      {/* Catalogue */}
      <section className="bg-obsidian py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-2 mb-8 text-sm text-mutedgray">
            <LayoutGrid size={16} className="text-copper" />
            Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </div>

          <ProductGrid groups={groups} onOpen={setSelectedProduct} />
        </div>
      </section>

      <ContactCTA />

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
