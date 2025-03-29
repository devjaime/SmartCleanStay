import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function ThankYou() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t.thankYou.pageTitle}</title>
        <meta name="description" content={t.thankYou.description} />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 py-16">
        <Card className="w-full max-w-lg mx-4 shadow-lg">
          <CardContent className="pt-10 pb-8 px-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {t.thankYou.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {t.thankYou.message}
              </p>
              
              <Link href="/">
                <Button className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {t.thankYou.backButton}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
}
