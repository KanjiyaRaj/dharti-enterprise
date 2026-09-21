interface FilterOption {
    id: string;
    label: string;
}

export default function ProductFilters({
                                           options,
                                           active,
                                           onChange,
                                       }: {
    options: FilterOption[];
    active: string;
    onChange: (id: string) => void;
}) {
    return (
        <div className="w-full">
            {/* Desktop / tablet: horizontal tabs */}
            {/*<div className="hidden sm:flex flex-wrap gap-2">*/}
            {/*  {options.map((opt) => (*/}
            {/*    <button*/}
            {/*      key={opt.id}*/}
            {/*      type="button"*/}
            {/*      onClick={() => onChange(opt.id)}*/}
            {/*      aria-pressed={active === opt.id}*/}
            {/*      className={`px-4 py-2 text-xs font-medium tracking-wide uppercase border transition-colors ${*/}
            {/*        active === opt.id*/}
            {/*          ? "bg-copper text-white border-copper"*/}
            {/*          : "bg-obsidian text-mutedgray border-charcoal hover:border-copper/50 hover:text-offwhite"*/}
            {/*      }`}*/}
            {/*    >*/}
            {/*      {opt.label}*/}
            {/*    </button>*/}
            {/*  ))}*/}
            {/*</div>*/}

            {/* Mobile: compact select */}
            <div className="">
                <label htmlFor="category-select" className="sr-only">
                    Filter by category
                </label>
                <select
                    id="category-select"
                    value={active}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full bg-obsidian border border-charcoal text-offwhite px-4 py-3 text-sm"
                >
                    {options.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
