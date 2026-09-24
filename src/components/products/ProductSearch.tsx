import {Search, X} from "lucide-react";

export default function ProductSearch({
                                          value,
                                          onChange,
                                      }: {
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <div className="relative w-full sm:max-w-xs">
            <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-mutedgray pointer-events-none"
            />
            {/*<label htmlFor="product-search" className="sr-only">*/}
            {/*  Search products*/}
            {/*</label>*/}
            <input
                id="product-search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-obsidian border border-charcoal focus:border-copper pl-10 pr-9 py-2.5 text-sm text-offwhite placeholder:text-mutedgray outline-none transition-colors"
            />
            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-mutedgray hover:text-offwhite"
                >
                    <X size={15}/>
                </button>
            )}
        </div>
    );
}
