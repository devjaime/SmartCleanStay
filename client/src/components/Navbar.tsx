import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageToggle from "@/components/ui/language-toggle";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-primary-500 text-2xl mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11v8h18v-8"></path>
              <path d="M12 2c4.97 0 9 3.58 9 8H3c0-4.42 4.03-8 9-8Z"></path>
            </svg>
          </span>
          <span className="font-bold text-neutral-900 text-xl">AseoSmart</span>
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <button onClick={() => scrollToSection('como-funciona')} className="font-medium hover:text-primary-500 transition-colors">
            {t.navbar.howItWorks}
          </button>
          <button onClick={() => scrollToSection('beneficios')} className="font-medium hover:text-primary-500 transition-colors">
            {t.navbar.benefits}
          </button>
          <button onClick={() => scrollToSection('ia')} className="font-medium hover:text-primary-500 transition-colors">
            {t.navbar.ai}
          </button>
          <button onClick={() => scrollToSection('testimonios')} className="font-medium hover:text-primary-500 transition-colors">
            {t.navbar.testimonials}
          </button>
          <button onClick={() => scrollToSection('preguntas')} className="font-medium hover:text-primary-500 transition-colors">
            {t.navbar.faq}
          </button>
          <LanguageToggle />
          <Button onClick={() => scrollToSection('contacto')} className="rounded-full px-6">
            {t.navbar.start}
          </Button>
        </div>
        
        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <button onClick={toggleMenu} className="text-neutral-900 focus:outline-none" aria-label="Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <button onClick={() => scrollToSection('como-funciona')} className="font-medium py-2 hover:text-primary-500 transition-colors">
            {t.navbar.howItWorks}
          </button>
          <button onClick={() => scrollToSection('beneficios')} className="font-medium py-2 hover:text-primary-500 transition-colors">
            {t.navbar.benefits}
          </button>
          <button onClick={() => scrollToSection('ia')} className="font-medium py-2 hover:text-primary-500 transition-colors">
            {t.navbar.ai}
          </button>
          <button onClick={() => scrollToSection('testimonios')} className="font-medium py-2 hover:text-primary-500 transition-colors">
            {t.navbar.testimonials}
          </button>
          <button onClick={() => scrollToSection('preguntas')} className="font-medium py-2 hover:text-primary-500 transition-colors">
            {t.navbar.faq}
          </button>
          <Button onClick={() => scrollToSection('contacto')} className="rounded-full w-full">
            {t.navbar.start}
          </Button>
        </div>
      </div>
    </nav>
  );
}
