import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-100 to-secondary-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 mb-4">
              {t.hero.title.start} <span className="text-primary-500">{t.hero.title.highlight}</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToSection('contacto')} 
                size="lg" 
                className="rounded-full shadow-lg text-lg"
              >
                {t.hero.primaryButton}
              </Button>
              <Button 
                onClick={() => scrollToSection('como-funciona')} 
                variant="outline" 
                size="lg" 
                className="rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-100 hover:text-primary-500 text-lg"
              >
                {t.hero.secondaryButton}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={t.hero.mainImageAlt} 
                className="w-full h-auto" 
                width="600" 
                height="400"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 bg-white p-4 rounded-lg shadow-lg z-20 transform -rotate-3">
              <div className="flex items-center text-primary-500 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>{t.hero.notificationComplete}</span>
              </div>
              <div className="flex items-center text-neutral-600 text-xs mt-1">
                <svg className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{t.hero.notificationTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
