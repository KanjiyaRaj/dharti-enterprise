import { siteConfig } from "../config/siteConfig";

export function whatsappLink(message: string, number: string = siteConfig.whatsappNumber): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function generalEnquiryLink(): string {
  return whatsappLink(
    "Hello, I would like to enquire about your ceramic industry hardware products."
  );
}

export function productEnquiryLink(productName: string): string {
  return whatsappLink(
    `Hello, I would like to enquire about the ${productName}.`
  );
}

export function branchEnquiryLink(branchName: string, branchWhatsapp: string): string {
  return whatsappLink(
    `Hello, I would like to contact the ${branchName} branch regarding ceramic production hardware and machinery components.`,
    branchWhatsapp
  );
}
