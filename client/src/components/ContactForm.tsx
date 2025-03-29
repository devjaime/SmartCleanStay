import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { insertLeadSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Extend the insertLeadSchema with additional validation
const formSchema = insertLeadSchema.extend({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  privacy: z.boolean().refine(val => val === true, {
    message: "You must accept the privacy policy",
  })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      properties: "",
      message: "",
      privacy: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Remove privacy field as it's not part of our DB schema
      const { privacy, ...leadData } = data;
      
      await apiRequest("POST", "/api/leads", leadData);
      
      toast({
        title: t.contactForm.success.title,
        description: t.contactForm.success.message,
      });
      
      // Redirect to thank you page
      setLocation("/gracias");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: t.contactForm.error.title,
        description: t.contactForm.error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-primary-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contactForm.title}</h2>
            <p className="text-xl opacity-90">{t.contactForm.subtitle}</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-800 font-medium">
                        {t.contactForm.fields.name.label}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t.contactForm.fields.name.placeholder} 
                          {...field} 
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-800 font-medium">
                        {t.contactForm.fields.email.label}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder={t.contactForm.fields.email.placeholder} 
                          {...field} 
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-800 font-medium">
                        {t.contactForm.fields.phone.label}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder={t.contactForm.fields.phone.placeholder} 
                          {...field} 
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="properties"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-800 font-medium">
                        {t.contactForm.fields.properties.label}
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder={t.contactForm.fields.properties.placeholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {t.contactForm.fields.properties.options.map((option, index) => (
                            <SelectItem key={index} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-neutral-800 font-medium">
                        {t.contactForm.fields.message.label}
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t.contactForm.fields.message.placeholder} 
                          rows={4} 
                          {...field} 
                          className="rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-primary-500"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-neutral-700">
                            {t.contactForm.fields.privacy.label}{" "}
                            <a href="#" className="text-primary-500 hover:underline">
                              {t.contactForm.fields.privacy.linkText}
                            </a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-primary-500 py-4 px-6 rounded-lg font-medium text-lg hover:bg-primary-600 transition-colors"
                  >
                    {isSubmitting ? t.contactForm.submitting : t.contactForm.submitButton}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
