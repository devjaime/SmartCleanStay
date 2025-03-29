import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function AppDemo() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              {t.appDemo.title}
            </h2>
            <p className="text-xl text-neutral-700 mb-8">
              {t.appDemo.subtitle}
            </p>
            
            <div className="space-y-6">
              {t.appDemo.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <svg className="text-primary-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {feature.icon === "mobile" && (
                        <>
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                          <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        </>
                      )}
                      {feature.icon === "sync" && (
                        <polyline points="23 4 23 10 17 10"></polyline>
                      )}
                      {feature.icon === "sync" && (
                        <polyline points="1 20 1 14 7 14"></polyline>
                      )}
                      {feature.icon === "sync" && (
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                      )}
                      {feature.icon === "plug" && (
                        <>
                          <path d="M16 13v-2a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9"></path>
                          <path d="M22 10 A2 2 0 0 1 20 12 A2 2 0 0 1 18 10 A2 2 0 0 1 22 10 z"></path>
                          <path d="M6 10 A2 2 0 0 1 4 12 A2 2 0 0 1 2 10 A2 2 0 0 1 6 10 z"></path>
                          <path d="M14 10 A2 2 0 0 1 12 12 A2 2 0 0 1 10 10 A2 2 0 0 1 14 10 z"></path>
                          <path d="M18 19a2 2 0 0 1 2 2"></path>
                          <path d="M22 19h-4"></path>
                        </>
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-black text-white px-5 py-3 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.34-3.14-2.57C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                </svg>
                <div>
                  <div className="text-xs">{t.appDemo.appStore.downloadOn}</div>
                  <div className="text-sm font-bold">{t.appDemo.appStore.label}</div>
                </div>
              </a>
              <a href="#" className="bg-black text-white px-5 py-3 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-11c-.83 0-1.5-.67-1.5-1.5zm16 0v-17c0-.83-.67-1.5-1.5-1.5-.83 0-1.5.67-1.5 1.5v17c0 .83.67 1.5 1.5 1.5.83 0 1.5-.67 1.5-1.5zM6.5 18c-.28 0-.5.22-.5.5s.22.5.5.5h6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-6zm0-14c-.28 0-.5.22-.5.5s.22.5.5.5h6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-6z"></path>
                </svg>
                <div>
                  <div className="text-xs">{t.appDemo.googlePlay.availableOn}</div>
                  <div className="text-sm font-bold">{t.appDemo.googlePlay.label}</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-20 transform -rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={t.appDemo.mainImageAlt} 
                className="rounded-xl shadow-2xl" 
                width="500" 
                height="350"
              />
              <div className="absolute -bottom-20 -right-10 w-3/4">
                <img 
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt={t.appDemo.secondaryImageAlt} 
                  className="rounded-xl shadow-2xl transform rotate-12" 
                  width="350" 
                  height="250"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-300 rounded-full opacity-10 filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
