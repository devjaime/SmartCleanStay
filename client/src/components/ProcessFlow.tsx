import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProcessFlow() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="como-funciona" className="py-20 bg-neutral-100 relative">
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
          background: "rgb(243 244 246)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{t.processFlow.title}</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">{t.processFlow.subtitle}</p>
        </div>
        
        <div className="relative process-line">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="inline-block bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t.processFlow.steps[0].title}</h3>
                <p className="text-neutral-700 mb-4">{t.processFlow.steps[0].description}</p>
                <div className="flex items-center text-primary-500 font-medium">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>{t.processFlow.steps[0].benefit}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={t.processFlow.steps[0].imageAlt} 
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
                width="500" 
                height="300"
              />
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-16 md:mb-24">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="inline-block bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t.processFlow.steps[1].title}</h3>
                <p className="text-neutral-700 mb-4">{t.processFlow.steps[1].description}</p>
                <div className="flex items-center text-primary-500 font-medium">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>{t.processFlow.steps[1].benefit}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={t.processFlow.steps[1].imageAlt} 
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
                width="500" 
                height="300"
              />
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="inline-block bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t.processFlow.steps[2].title}</h3>
                <p className="text-neutral-700 mb-4">{t.processFlow.steps[2].description}</p>
                <div className="flex items-center text-primary-500 font-medium">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>{t.processFlow.steps[2].benefit}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={t.processFlow.steps[2].imageAlt} 
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
                width="500" 
                height="300"
              />
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="inline-block bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">4</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t.processFlow.steps[3].title}</h3>
                <p className="text-neutral-700 mb-4">{t.processFlow.steps[3].description}</p>
                <div className="flex items-center text-primary-500 font-medium">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>{t.processFlow.steps[3].benefit}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={t.processFlow.steps[3].imageAlt} 
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
                width="500" 
                height="300"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* We use inline styles for the process line */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .process-line::before {
          content: '';
          position: absolute;
          top: 40px;
          left: 50%;
          width: 3px;
          height: calc(100% - 80px);
          background-color: hsl(var(--primary));
          z-index: -1;
        }
        
        @media (max-width: 768px) {
          .process-line::before {
            left: 25px;
            top: 50px;
            height: calc(100% - 80px);
          }
        }
      `}} />
    </section>
  );
}
