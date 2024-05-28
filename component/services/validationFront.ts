
import { z } from 'zod';

const commonFields = {
  namesurname: z.string().min(1, { message: "Lütfen isim ve soyisminizi giriniz." }),
  email: z.string().email({ message: "Lütfen geçerli bir e-posta giriniz." }).min(1, { message: "Lütfen E-posta adresinizi giriniz" }),
  message: z.string().max(255).min(1, { message: "Lütfen mesajınızı giriniz." })
};

export const contactForm2Schema = z.object({
  ...commonFields,
  title: z.enum(["Reklam Uzmanı","Grafik Tasarımcı","Front-end Devoloper","Back-end Devoloper","Full-stack Devoloper"],{message:"Lütfen bir seçim yapınız."}),
  phone: z.string().max(10,{message:"Lütfen geçerli bir telefon numarası giriniz."}).min(1,{message:"Lütfen telefon numaranızı giriniz."}),
  careerposition: z.enum(["Zorunlu Staj","Gönüllü Staj","Junior","Intermediate","Senior"],{message:"Lütfen bir seçim yapınız."}),
});

export const contactForm1Schema = z.object({
  ...commonFields,
  businesname: z.string().min(1,{message:"Lütfen şirket adınızı giriniz."}),
  phone: z.string().max(20,{message:"Lütfen geçerli bir telefon numarası giriniz."}).min(1,{message:"Lütfen telefon numaranızı giriniz."}),
  position: z.string().min(1,{message:"Lütfen şirketteki pozisyonunuzu giriniz."}), 
});

export const contactFormSchema = z.object({
 ...commonFields,
  website: z.string().regex(/^(https?:\/\/(www\.)?)?([\w-]+\.)+([a-zA-Z]{2,})(\.[a-zA-Z]{2})?$/,{message:"Lütfen Geçerli bir web sitesi giriniz."}).min(1,{message:"Lütfen web sitenizi giriniz."}),
  socialMedia: z.string().min(1,{message:"Lütfen sosyal medya adınızı giriniz."}),
  adPrice: z.enum(["0 - 40.000₺","40.000₺ - 80.000₺","80.000₺ - 150.000₺","150.000₺ - 300.000₺","300.000₺ - 600.000₺","600.000₺ ve üstü"],{message:"Lütfen bir seçim yapınız"}),
});

