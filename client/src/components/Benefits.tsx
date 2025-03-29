import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Benefits() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{t.benefits.title}</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">{t.benefits.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.benefits.items.map((benefit, index) => (
            <div key={index} className="bg-neutral-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 inline-flex items-center justify-center w-16 h-16 rounded-full mb-6">
                <svg className="text-primary-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {benefit.icon === "clock" && (
                    <>
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </>
                  )}
                  {benefit.icon === "medal" && (
                    <>
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </>
                  )}
                  {benefit.icon === "smile" && (
                    <>
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </>
                  )}
                  {benefit.icon === "robot" && (
                    <>
                      <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                      <circle cx="9" cy="10" r="2"></circle>
                      <circle cx="15" cy="10" r="2"></circle>
                      <path d="M9 16h6"></path>
                    </>
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
              <p className="text-neutral-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
