import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function AIFeatures() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="ia" className="py-20 bg-gradient-to-br from-secondary-100 to-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{t.ai.title}</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">{t.ai.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Pattern Detection */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-start">
            <div className="bg-secondary-100 p-4 rounded-lg mb-6 md:mb-0 md:mr-6">
              <svg className="text-secondary-500 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="M18.4 5.2l-7.8 12.1-3.9-4.7"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{t.ai.features[0].title}</h3>
              <p className="text-neutral-700 mb-4">{t.ai.features[0].description}</p>
              <ul className="space-y-2">
                {t.ai.features[0].bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-secondary-500 h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Image Recognition */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-start">
            <div className="bg-secondary-100 p-4 rounded-lg mb-6 md:mb-0 md:mr-6">
              <svg className="text-secondary-500 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{t.ai.features[1].title}</h3>
              <p className="text-neutral-700 mb-4">{t.ai.features[1].description}</p>
              <div className="inline-block text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                {t.ai.features[1].beta}
              </div>
            </div>
          </div>
          
          {/* Route Optimization */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-start">
            <div className="bg-secondary-100 p-4 rounded-lg mb-6 md:mb-0 md:mr-6">
              <svg className="text-secondary-500 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{t.ai.features[2].title}</h3>
              <p className="text-neutral-700 mb-4">{t.ai.features[2].description}</p>
              <ul className="space-y-2">
                {t.ai.features[2].bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-secondary-500 h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Complete Flow Automation */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-start">
            <div className="bg-secondary-100 p-4 rounded-lg mb-6 md:mb-0 md:mr-6">
              <svg className="text-secondary-500 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                <path d="M12 8v8"></path>
                <path d="m8 12 4 4 4-4"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{t.ai.features[3].title}</h3>
              <p className="text-neutral-700 mb-4">{t.ai.features[3].description}</p>
              <ul className="space-y-2">
                {t.ai.features[3].bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-secondary-500 h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
