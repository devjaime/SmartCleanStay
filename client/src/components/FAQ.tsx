import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function FAQ() {
  const { language } = useLanguage();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{t.faq.title}</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">{t.faq.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {t.faq.items.map((faqItem, index) => (
            <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-6 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors" 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg text-neutral-900">{faqItem.question}</span>
                <ChevronDown 
                  className={`text-primary-500 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              <div className={`p-6 bg-white border-t border-neutral-200 ${openIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-neutral-700">{faqItem.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
