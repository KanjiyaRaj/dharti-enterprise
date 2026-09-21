import Hero from "../components/Hero";
import IndustryExpertise from "../components/IndustryExpertise";
import ProductCategories from "../components/ProductCategories";
import OurProductRange from "../components/OurProductRange";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import CatalogueShowcase from "../components/CatalogueShowcase";
import DistributionNetwork from "../components/DistributionNetwork";
import LocationsMap from "../components/LocationsMap";
import ContactCTA from "../components/ContactCTA";
import {siteConfig} from "../config/siteConfig";
import {usePageMeta} from "../hooks/usePageMeta";

export default function Home() {
    usePageMeta(siteConfig.seo.title, siteConfig.seo.description);

    return (
        <>
            <Hero/>
            <IndustryExpertise/>
            <ProductCategories/>
            <OurProductRange/>
            <FeaturedProducts/>
            <WhyChooseUs/>
            <CatalogueShowcase/>
            <DistributionNetwork/>
            <LocationsMap/>
            <ContactCTA/>
        </>
    );
}
