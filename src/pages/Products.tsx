import {useEffect, useMemo, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {ChevronRight, LayoutGrid, Loader2} from "lucide-react";

import {categories, categoryTitle, type Product} from "../data/products";
import {siteConfig} from "../config/siteConfig";
import {usePageMeta} from "../hooks/usePageMeta";

import ProductFilters from "../components/products/ProductFilters";
import ProductSearch from "../components/products/ProductSearch";
import ProductGrid from "../components/products/ProductGrid";
import ProductDetails from "../components/products/ProductDetails";
import ContactCTA from "../components/ContactCTA";
import Reveal from "../components/Reveal";

import {supabase} from "../lib/supabaseClient.ts";

const PAGE_SIZE = 100;

const filterOptions = [
    {id: "All", label: "All Products"},
    ...categories.map((c) => ({
        id: c.id,
        label: c.title,
    })),
];

type ServerProduct = {
    id: number;
    product_number: number;
    product_name: string;
    product_code: string | null;
    sizes: string | null;
    description: string | null;
    category: string;
    image_url: string | null;
};

type PageResponse = {
    products: ServerProduct[];
    next_cursor: number;
    has_more: boolean;
    total_count: number;
};

function mapProduct(row: ServerProduct): Product {
    return {
        id: String(row.id),
        name: row.product_name,
        productCode: row.product_code ?? undefined,
        category: row.category,
        image: row.image_url ?? undefined,
        description: row.description ?? undefined,
        itemNumber: row.product_number,
        sizes: row.sizes ?? undefined,
    } as Product;
}

export default function Products() {
    usePageMeta(
        `Products | ${siteConfig.companyName}`,
        `Explore specialized ceramic machinery parts, hardware components and spare parts supplied by ${siteConfig.companyName} for the ceramic industry.`
    );

    const [searchParams] = useSearchParams();

    const initialCategory = searchParams.get("category");
    const initialQuery = searchParams.get("q") ?? "";

    /*
     * ---------------------------------------------------------
     * CATEGORY STATE
     * ---------------------------------------------------------
     */

    const categoryIds = useMemo(
        () => new Set<string>(categories.map((c) => c.id)),
        []
    );

    const [activeCategory, setActiveCategory] = useState<string>(
        initialCategory && categoryIds.has(initialCategory)
            ? initialCategory
            : "All"
    );

    /*
     * ---------------------------------------------------------
     * SEARCH STATE
     * ---------------------------------------------------------
     */

    const [query, setQuery] = useState(initialQuery);

    // Search value actually used for filtering.
    // This changes only after the debounce delay.
    const [debouncedQuery, setDebouncedQuery] =
        useState(initialQuery);

    /*
     * ---------------------------------------------------------
     * PRODUCT DATA
     * ---------------------------------------------------------
     *
     * allProducts contains every product loaded from Supabase.
     *
     * Category and search filtering happen locally after this.
     */

    const [allProducts, setAllProducts] = useState<Product[]>([]);
    
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);

    const [selectedProduct, setSelectedProduct] =
        useState<Product | null>(null);

    /*
     * ---------------------------------------------------------
     * LOAD ALL PRODUCTS ONCE
     * ---------------------------------------------------------
     *
     * Supabase is called only during the initial page load.
     *
     * PAGE_SIZE = 100 because the SQL RPC limits the maximum
     * page size to 100.
     */

    useEffect(() => {
        let cancelled = false;

        const loadAllProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const loadedProducts: Product[] = [];

                let cursor = 0;
                let hasMore = true;

                while (hasMore) {
                    const {data, error: rpcError} =
                        await supabase.rpc(
                            "get_products_paginated",
                            {
                                p_limit: PAGE_SIZE,
                                p_cursor: cursor,
                                p_category: null,
                                p_search: null,
                            }
                        );

                    if (rpcError) {
                        throw rpcError;
                    }

                    const page = data as PageResponse;

                    const mappedProducts =
                        (page?.products ?? []).map(mapProduct);

                    loadedProducts.push(...mappedProducts);

                    const nextCursor =
                        page?.next_cursor ?? cursor;

                    hasMore = Boolean(page?.has_more);

                    /*
                     * Safety check.
                     *
                     * If Supabase returns no products, stop the loop
                     * even if has_more was accidentally true.
                     */
                    if (mappedProducts.length === 0) {
                        hasMore = false;
                    }

                    cursor = nextCursor;
                }

                if (!cancelled) {
                    setAllProducts(loadedProducts);
                }
            } catch (err) {
                console.error(
                    "Failed to load products:",
                    err
                );

                if (!cancelled) {
                    setError(
                        "Unable to load products. Please try again."
                    );
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        void loadAllProducts();

        return () => {
            cancelled = true;
        };
    }, []);

    /*
     * ---------------------------------------------------------
     * SEARCH DEBOUNCE
     * ---------------------------------------------------------
     *
     * User can type normally.
     *
     * The actual search/filter operation waits 400ms after the
     * user stops typing.
     *
     * No Supabase request is made here.
     */

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setDebouncedQuery(query);
        }, 400);

        return () => {
            window.clearTimeout(timer);
        };
    }, [query]);

    /*
     * ---------------------------------------------------------
     * LOCAL CATEGORY + SEARCH FILTER
     * ---------------------------------------------------------
     *
     * IMPORTANT:
     *
     * This does NOT call Supabase.
     *
     * Everything is filtered from allProducts already stored
     * in browser memory.
     */

    const filteredProducts = useMemo(() => {
        const search = debouncedQuery
            .trim()
            .toLowerCase();

        return allProducts.filter((product) => {
            /*
             * CATEGORY FILTER
             */

            const selectedCategory =
                activeCategory === "All"
                    ? null
                    : categoryTitle(activeCategory);

            const matchesCategory =
                selectedCategory === null ||
                product.category === selectedCategory;

            if (!matchesCategory) {
                return false;
            }

            /*
             * SEARCH FILTER
             */

            if (!search) {
                return true;
            }

            const name =
                product.name?.toLowerCase() ?? "";

            const category =
                product.category?.toLowerCase() ?? "";

            const displayCategory =
                categoryTitle(product.category)
                    .toLowerCase();

            const productCode =
                product.productCode
                    ?.toLowerCase() ?? "";

            const itemNumber =
                product.itemNumber !== undefined &&
                product.itemNumber !== null
                    ? String(product.itemNumber)
                    : "";

            return (
                name.includes(search) ||
                category.includes(search) ||
                displayCategory.includes(search) ||
                productCode.includes(search) ||
                itemNumber.includes(search)
            );
        });
    }, [
        allProducts,
        activeCategory,
        debouncedQuery,
    ]);

    /*
     * ---------------------------------------------------------
     * GROUP PRODUCTS BY CATEGORY
     * ---------------------------------------------------------
     *
     * Category order always follows categories from
     * ../data/products.
     *
     * This prevents the category order from changing while
     * scrolling.
     */

    const groups = useMemo(() => {
        const order = categories.map(
            (category) => category.title
        );

        const byCategory =
            new Map<string, Product[]>();

        for (const product of filteredProducts) {
            const existing =
                byCategory.get(product.category) ?? [];

            existing.push(product);

            byCategory.set(
                product.category,
                existing
            );
        }

        return order
            .filter((category) =>
                byCategory.has(category)
            )
            .map((category) => ({
                category,
                items: byCategory.get(category)!,
            }));
    }, [filteredProducts]);

    /*
     * ---------------------------------------------------------
     * RETRY
     * ---------------------------------------------------------
     */

    const retryLoad = () => {
        window.location.reload();
    };

    /*
     * ---------------------------------------------------------
     * UI
     * ---------------------------------------------------------
     */

    return (
        <>
            {/* Hero */}

            <section className="bg-obsidian border-t border-charcoal pt-28 pb-10 md:pt-32 md:pb-14 bp-grid">
                <div className="max-w-[1440px] mx-auto px-5 md:px-10">

                    <nav
                        aria-label="Breadcrumb"
                        className="mb-6"
                    >
                        <ol className="flex items-center gap-1.5 text-xs text-mutedgray">

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-copper transition-colors"
                                >
                                    Home
                                </Link>
                            </li>

                            <li aria-hidden="true">
                                <ChevronRight size={12}/>
                            </li>

                            <li
                                className="text-offwhite"
                                aria-current="page"
                            >
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
                            Explore our specialized ceramic machinery parts, hardware components and spare parts.
                        </p>
                    </Reveal>

                </div>
            </section>

            {/* Filters + Search */}

            <section
                className="bg-graphite border-t border-charcoal py-6 sticky top-[64px] md:top-[72px] z-30 backdrop-blur bg-graphite/95">

                <div
                    className="max-w-[1440px] mx-auto px-5 md:px-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">

                    <ProductFilters
                        options={filterOptions}
                        active={activeCategory}
                        onChange={setActiveCategory}
                    />

                    <ProductSearch
                        value={query}
                        onChange={setQuery}
                    />

                </div>

            </section>

            {/* Catalogue */}

            <section className="bg-obsidian py-12 md:py-16">

                <div className="max-w-[1440px] mx-auto px-5 md:px-10">

                    {/* Product count */}

                    <div className="flex items-center gap-2 mb-8 text-sm text-mutedgray">

                        <LayoutGrid
                            size={16}
                            className="text-copper"
                        />

                        {loading
                            ? "Loading products..."
                            : `Showing ${filteredProducts.length} of ${allProducts.length} products`
                        }

                    </div>

                    {/* Error */}

                    {error && (
                        <div
                            className="mb-6 border border-charcoal bg-graphite/40 p-4 text-sm text-mutedgray flex items-center justify-between gap-4">

                            <span>{error}</span>

                            <button
                                type="button"
                                onClick={retryLoad}
                                className="text-copper hover:text-offwhite"
                            >
                                Retry
                            </button>

                        </div>
                    )}

                    {/* Initial loading */}

                    {loading && allProducts.length === 0 && (
                        <div className="min-h-20 flex items-center justify-center">

                            <span className="inline-flex items-center gap-2 text-sm text-mutedgray">

                                <Loader2
                                    size={16}
                                    className="animate-spin"
                                />

                                Loading products...

                            </span>

                        </div>
                    )}

                    {/* Product grid */}

                    {!loading &&
                        filteredProducts.length > 0 && (
                            <ProductGrid
                                groups={groups}
                                onOpen={setSelectedProduct}
                            />
                        )}

                    {/* No results */}

                    {!loading &&
                        !error &&
                        filteredProducts.length === 0 && (
                            <div className="py-20 text-center text-sm text-mutedgray">
                                No products found.
                            </div>
                        )}

                </div>

            </section>

            <ContactCTA/>

            {/* Product details */}

            {selectedProduct && (
                <ProductDetails
                    product={selectedProduct}
                    onClose={() =>
                        setSelectedProduct(null)
                    }
                />
            )}
        </>
    );
}