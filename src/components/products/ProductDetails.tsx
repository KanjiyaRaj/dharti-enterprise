import { useEffect, useRef } from "react";
import { X, MessageCircle, FileText } from "lucide-react";
import type { Product } from "../../data/products";
import { categoryTitle } from "../../data/products";
import { productEnquiryLink } from "../../utils/whatsapp";
import { siteConfig } from "../../config/siteConfig";
import ProductImage from "./ProductImage";

export default function ProductDetails({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-details-title"
    >
      <div
        className="absolute inset-0 bg-[#111827]/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-obsidian w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-charcoal shadow-2xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-obsidian/90 border border-charcoal text-offwhite hover:text-copper hover:border-copper transition-colors"
        >
          <X size={18} />
        </button>

        <ProductImage
          src={product.image}
          alt={product.name}
          seedKey={product.id}
          className="aspect-[16/10] sm:aspect-[16/9]"
        />

        <div className="p-6 sm:p-8">
          <span className="font-mono text-xs tracking-wide text-copper uppercase">
            {categoryTitle(product.category)}
          </span>
          <h2
            id="product-details-title"
            className="mt-2 font-display font-semibold text-2xl text-offwhite"
          >
            {product.name}
          </h2>

          {product.description && (
            <p className="mt-4 text-sm text-mutedgray leading-relaxed">
              {product.description}
            </p>
          )}

          <dl className="mt-5 grid sm:grid-cols-2 gap-4 border-t border-charcoal pt-5">
            {product.application && (
              <div>
                <dt className="text-[11px] font-mono uppercase tracking-wide text-mutedgray">
                  Application
                </dt>
                <dd className="mt-1 text-sm text-offwhite">{product.application}</dd>
              </div>
            )}
            {product.productCode && (
              <div>
                <dt className="text-[11px] font-mono uppercase tracking-wide text-mutedgray">
                  Product Code
                </dt>
                <dd className="mt-1 text-sm text-offwhite">{product.productCode}</dd>
              </div>
            )}
            {product.itemNumber && (
              <div>
                <dt className="text-[11px] font-mono uppercase tracking-wide text-mutedgray">
                  Catalogue Item No.
                </dt>
                <dd className="mt-1 text-sm text-offwhite">#{product.itemNumber}</dd>
              </div>
            )}
          </dl>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={productEnquiryLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white px-6 py-3.5 font-medium text-sm hover:bg-whatsapp-dark transition-colors"
            >
              <MessageCircle size={16} />
              Enquire on WhatsApp
            </a>
            {siteConfig.catalogueUrl && siteConfig.catalogueUrl !== "YOUR_CATALOGUE_URL" && (
              <a
                href={`${siteConfig.catalogueUrl}#page=${product.catalogPage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-charcoal text-offwhite px-6 py-3.5 font-medium text-sm hover:border-copper hover:text-copper transition-colors"
              >
                <FileText size={16} />
                View in Catalogue (p.{product.catalogPage})
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
