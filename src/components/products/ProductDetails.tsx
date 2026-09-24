import {FileText, MessageCircle, Ruler, Tag, X} from "lucide-react";
import type {Product} from "../../data/products";
import {siteConfig} from "../../config/siteConfig";
import {productEnquiryLink} from "../../utils/whatsapp";

type ProductDetailsProps = {
    product: Product;
    onClose: () => void;
};

export default function ProductDetails({
                                           product,
                                           onClose,
                                       }: ProductDetailsProps) {
    const size =
        typeof (product as Product & { sizes?: string }).sizes === "string"
            ? (product as Product & { sizes?: string }).sizes?.trim() ?? ""
            : "";

    const productCode = product.productCode?.trim() ?? "";

    return (
        <div
            className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        overflow-y-auto
        bg-black/70
        px-4 py-16
        backdrop-blur-sm
      "
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className="
          relative my-auto w-full max-w-md
          overflow-hidden rounded-xl
          border border-charcoal
          bg-graphite shadow-2xl
        "
            >
                {/* Close */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close product details"
                    className="
            absolute right-3 top-3 z-20
            flex h-8 w-8 items-center justify-center
            rounded-full border border-charcoal
            bg-obsidian/90 text-mutedgray
            transition hover:border-copper hover:text-copper
          "
                >
                    <X size={16}/>
                </button>

                {/* Product Image */}
                <div
                    className="
            flex h-[230px]
            items-center justify-center
            bg-white p-6
          "
                >
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain"
                        />
                    ) : (
                        <div className="text-xs text-mutedgray">
                            Product image unavailable
                        </div>
                    )}
                </div>

                {/* Details */}
                <div className="p-5">

                    {/* Category */}
                    <span
                        className="
              inline-flex rounded-full
              border border-copper/40
              bg-copper/10
              px-2.5 py-1
              font-mono text-[9px]
              uppercase tracking-[0.14em]
              text-copper
            "
                    >
            {product.category}
          </span>

                    {/* Product Name */}
                    <h2
                        className="
              mt-3
              font-display text-2xl font-bold
              leading-tight tracking-tight
              text-offwhite
            "
                    >
                        {product.name}
                    </h2>

                    {/* Product Code */}
                    {productCode && (
                        <div className="mt-4 flex items-center gap-2.5 border-t border-charcoal pt-3">
                            <div
                                className="
                  flex h-8 w-8 shrink-0
                  items-center justify-center
                  rounded-md border border-charcoal
                  bg-obsidian text-copper
                "
                            >
                                <Tag size={14}/>
                            </div>

                            <div>
                                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-mutedgray">
                                    Product Code
                                </p>
                                <p className="mt-0.5 text-xs font-medium text-offwhite">
                                    {productCode}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Size */}
                    {size && (
                        <div className="mt-3 flex items-center gap-2.5 border-t border-charcoal pt-3">
                            <div
                                className="
                  flex h-8 w-8 shrink-0
                  items-center justify-center
                  rounded-md border border-charcoal
                  bg-obsidian text-copper
                "
                            >
                                <Ruler size={14}/>
                            </div>

                            <div>
                                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-mutedgray">
                                    Size
                                </p>
                                <p className="mt-0.5 text-xs font-medium text-offwhite">
                                    {size}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Description */}
                    {product.description && (
                        <p className="mt-4 border-t border-charcoal pt-3 text-xs leading-relaxed text-mutedgray">
                            {product.description}
                        </p>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-5 grid grid-cols-2 gap-3">

                        {/* WhatsApp */}
                        <a
                            href={productEnquiryLink(product.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center justify-center gap-2
                rounded-md
                bg-whatsapp
                px-3 py-2.5
                text-xs font-medium
                text-white
                transition-colors
                hover:bg-whatsapp-dark
              "
                        >
                            <MessageCircle size={15}/>
                            WhatsApp
                        </a>

                        {/* View Catalogue */}
                        <a
                            href={siteConfig.catalogueUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center justify-center gap-2
                rounded-md
                border border-charcoal
                bg-obsidian
                px-3 py-2.5
                text-xs font-medium
                text-offwhite
                transition-colors
                hover:border-copper
                hover:text-copper
              "
                        >
                            <FileText size={15}/>
                            View Catalogue
                        </a>

                    </div>

                    {/* Close */}
                    {/*        <button*/}
                    {/*            type="button"*/}
                    {/*            onClick={onClose}*/}
                    {/*            className="*/}
                    {/*  mt-3 w-full rounded-md*/}
                    {/*  border border-charcoal*/}
                    {/*  bg-obsidian*/}
                    {/*  px-4 py-2.5*/}
                    {/*  text-xs font-medium*/}
                    {/*  text-offwhite*/}
                    {/*  transition*/}
                    {/*  hover:border-copper*/}
                    {/*  hover:text-copper*/}
                    {/*"*/}
                    {/*        >*/}
                    {/*            Close*/}
                    {/*        </button>*/}

                </div>
            </div>
        </div>
    );
}