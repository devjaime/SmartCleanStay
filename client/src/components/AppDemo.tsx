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
            <div className="relative z-20">
              {/* Smartphone device frame */}
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden">
                <div className="w-[148px] h-[18px] bg-gray-800 absolute top-0 right-[70px] rounded-b-[1rem] z-20"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute top-[124px] left-[-17px] rounded-t-xl rounded-b-xl"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute top-[178px] left-[-17px] rounded-t-xl rounded-b-xl"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute top-[124px] right-[-17px] rounded-t-xl rounded-b-xl"></div>
                
                {/* App demo animation */}
                <div className="h-full w-full overflow-hidden relative">
                  <div className="h-full w-full animate-app-demo-slide">
                    {/* Screen 1: Dashboard */}
                    <div className="min-w-[272px] h-[572px] bg-white flex flex-col">
                      <div className="h-14 bg-primary-600 flex items-center px-4">
                        <div className="text-white font-bold">AseoSmart</div>
                        <div className="ml-auto flex space-x-2">
                          <div className="w-4 h-4 rounded-full bg-white opacity-60"></div>
                          <div className="w-4 h-4 rounded-full bg-white"></div>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto p-4">
                        <div className="text-lg font-bold mb-4">Resumen de hoy</div>
                        <div className="bg-green-100 rounded-lg p-3 border border-green-200 mb-4 flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                          <div>
                            <div className="font-medium">Limpieza completada</div>
                            <div className="text-xs text-green-700">Apt. 301 - 10:45 AM</div>
                          </div>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-3 border border-blue-200 mb-4 flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                          <div>
                            <div className="font-medium">Próxima limpieza</div>
                            <div className="text-xs text-blue-700">Apt. 502 - 15:30 PM</div>
                          </div>
                        </div>
                        <div className="text-lg font-bold mt-6 mb-3">Propiedades</div>
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="bg-gray-100 rounded-lg p-3 mb-3 border border-gray-200">
                            <div className="font-medium">Apartamento {item * 100 + Math.floor(Math.random() * 10)}</div>
                            <div className="flex justify-between items-center mt-2">
                              <div className="text-xs text-gray-500">Última limpieza: Ayer</div>
                              <div className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">Activo</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Screen 2: Notification */}
                    <div className="min-w-[272px] h-[572px] bg-white flex flex-col">
                      <div className="h-14 bg-primary-600 flex items-center px-4">
                        <div className="text-white font-bold">Notificaciones</div>
                      </div>
                      <div className="flex-1 overflow-y-auto p-4">
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white mr-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            </div>
                            <div className="font-bold text-lg">¡Nuevo checkout!</div>
                          </div>
                          <div className="mt-3">
                            <div className="font-medium">Apartamento 301</div>
                            <div className="text-sm text-gray-600 mb-2">Checkout registrado hace 5 minutos</div>
                            <div className="flex space-x-2 mt-4">
                              <button className="flex-1 bg-primary-500 text-white py-2 rounded-lg text-sm font-medium">Aceptar tarea</button>
                              <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-medium">Detalles</button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm font-medium text-gray-500 my-3">Anteriores</div>
                        
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="bg-gray-100 rounded-lg p-3 mb-3 border border-gray-200">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white mr-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                              </div>
                              <div>
                                <div className="font-medium">Apt. {item * 100 + Math.floor(Math.random() * 10)}</div>
                                <div className="text-xs text-gray-500">Hace {item} día{item > 1 ? 's' : ''}</div>
                              </div>
                              <div className="ml-auto text-xs bg-gray-200 px-2 py-1 rounded">Completada</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Screen 3: Checklist */}
                    <div className="min-w-[272px] h-[572px] bg-white flex flex-col">
                      <div className="h-14 bg-primary-600 flex items-center px-4">
                        <div className="text-white font-bold">Limpieza en progreso</div>
                      </div>
                      <div className="flex-1 overflow-y-auto p-4">
                        <div className="text-lg font-bold mb-2">Apt. 301</div>
                        <div className="text-sm text-gray-600 mb-4">Checklist de limpieza</div>
                        
                        <div className="mb-6">
                          <div className="flex items-center mb-2">
                            <div className="w-5 h-5 rounded border border-primary-500 flex items-center justify-center bg-primary-500 mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div className="text-gray-700 line-through">Habitación principal</div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="w-5 h-5 rounded border border-primary-500 flex items-center justify-center bg-primary-500 mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div className="text-gray-700 line-through">Habitación de invitados</div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="w-5 h-5 rounded border border-primary-500 flex items-center justify-center bg-primary-500 mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div className="text-gray-700 line-through">Baño principal</div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="w-5 h-5 rounded border border-primary-500 mr-3"></div>
                            <div className="text-gray-700">Cocina</div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="w-5 h-5 rounded border border-primary-500 mr-3"></div>
                            <div className="text-gray-700">Sala de estar</div>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="w-5 h-5 rounded border border-primary-500 mr-3"></div>
                            <div className="text-gray-700">Terraza</div>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-4 mt-4">
                          <div className="text-sm font-medium mb-2">Tomar foto</div>
                          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center mb-4">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          </div>
                        </div>
                        
                        <button className="w-full bg-primary-500 text-white py-3 rounded-lg text-sm font-medium mt-2">
                          Completar limpieza
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background glow effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-300 rounded-full opacity-20 filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
