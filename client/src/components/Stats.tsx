import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Stats() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Time Reduction Stat */}
          <div className="bg-neutral-100 p-6 rounded-lg text-center">
            <div className="text-primary-500 text-4xl mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <p className="text-4xl font-bold text-neutral-800">{t.stats.timeReduction.value}</p>
            <p className="text-neutral-600">{t.stats.timeReduction.label}</p>
          </div>
          
          {/* Cleaning Rating Stat */}
          <div className="bg-neutral-100 p-6 rounded-lg text-center">
            <div className="text-primary-500 text-4xl mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <p className="text-4xl font-bold text-neutral-800">{t.stats.cleaningRating.value}</p>
            <p className="text-neutral-600">{t.stats.cleaningRating.label}</p>
          </div>
          
          {/* Properties Managed Stat */}
          <div className="bg-neutral-100 p-6 rounded-lg text-center">
            <div className="text-primary-500 text-4xl mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <p className="text-4xl font-bold text-neutral-800">{t.stats.propertiesManaged.value}</p>
            <p className="text-neutral-600">{t.stats.propertiesManaged.label}</p>
          </div>
          
          {/* Headaches Stat */}
          <div className="bg-neutral-100 p-6 rounded-lg text-center">
            <div className="text-primary-500 text-4xl mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                <line x1="16" y1="8" x2="2" y2="22"></line>
                <line x1="17.5" y1="15" x2="9" y2="15"></line>
              </svg>
            </div>
            <p className="text-4xl font-bold text-neutral-800">{t.stats.headaches.value}</p>
            <p className="text-neutral-600">{t.stats.headaches.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
