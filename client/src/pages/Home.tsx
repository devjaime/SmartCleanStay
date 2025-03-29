import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProcessFlow from "@/components/ProcessFlow";
import Benefits from "@/components/Benefits";
import AIFeatures from "@/components/AIFeatures";
import AppDemo from "@/components/AppDemo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="keywords" content={t.seo.keywords} />
        <meta property="og:title" content={t.seo.ogTitle} />
        <meta property="og:description" content={t.seo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.seo.ogTitle} />
        <meta name="twitter:description" content={t.seo.ogDescription} />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Stats />
      <ProcessFlow />
      <Benefits />
      <AIFeatures />
      <AppDemo />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
