import { z } from "zod";

const formDataSchema = z.object({
  type: z.enum(["brand","career","business"]),
  namesurname: z.string().min(3,{message:"Lütfen isim ve soyisminizi doğru giriniz."}),
  email: z.string().email().min(5, {message:"Lütfen geçerli bir eposta giriniz."}),
  message: z.string().max(255).optional(),
  website: z.string().min(4 ,{message:"Lütfen geçerli bir website adresi giriniz"}).optional(),
  careerposition: z.string().optional(),
  title: z.string().optional(),
  socialMedia: z.string().min(2).optional(),
  adPrice: z.string().optional(),
  phone: z.string().min(10).max(13).optional(), // Changed from number to string
  position: z.string().min(3).optional(),
  businesname: z.string().min(2).optional(),
});

// export function generateMailOptions(formData: any): any {
//   const parsedFormData = formDataSchema.parse(formData);

//   const {
//     type,
//     namesurname,
//     email,
//     message,
//     website,
//     careerposition,
//     title,
//     socialMedia,
//     adPrice,
//     phone,
//     position,
//     businesname,
//   } = parsedFormData;

//   switch (type) {
//     case 'brand':
//       return {
//         subject: 'Markam İçin Başvuru Formu',
//         html: `
//         <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//         <!DOCTYPE html>
//         <html dir="ltr" lang="en">
        
//           <head>
//             <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
//             <meta name="x-apple-disable-message-reformatting" />
//             <title>Pam Dijital Reklam Ajansı | Markam</title>
//           </head>
//           <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Pam Ajans İletişim</div> 

        
//           <body style="border-top-width:2px;border-top-style:solid;background-color:rgb(245,248,250);border-color:rgb(55,200,174);padding-top:1.5rem;padding-bottom:1.5rem">
//             <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:rgb(3,10,23);padding:1rem;color:rgb(255,255,255);border-radius:0.375rem;width:66.666667%;box-shadow:0 0 #0000, 0 0 #0000, 0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)">
//               <tbody>
//                 <tr>
//                   <td>
//                     <p style="font-size:1.5rem;line-height:normal;margin:16px 0;font-weight:700;margin-bottom:0.5rem;text-align:center;margin-top:1rem"> Markam İçin</p>
//                     <p style="font-size:14px;line-height:24px;margin:16px 0;border-top-width:2px;border-top-style:solid;border-color:white;margin-top:2rem;display:flex;width:30%;margin-left:auto;margin-right:auto"></p>
//                     <p class="text-md " style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Ad Soyad: ${namesurname} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Email: ${email} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Web site: ${website} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Sosyal Medya Adı: ${socialMedia}</p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Bütçe: ${adPrice} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem;margin-bottom:3rem">Mesaj: ${message} </p>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </body>
        
//         </html>
//         `
//       };
//     case 'business':
//       return {
//         subject: 'Partnerlik Başvuru Formu',
//         html: `
//         <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//         <!DOCTYPE html>
//         <html dir="ltr" lang="en">
        
//           <head>
//             <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
//             <meta name="x-apple-disable-message-reformatting" />
//             <title>Pam Dijital Reklam Ajansı | Partner</title>
//           </head>
//           <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Pam Ajans Partnerlik
//           </div>
        
//           <body style="border-top-width:2px;border-top-style:solid;background-color:rgb(245,248,250);border-color:rgb(55,200,174);padding-top:1.5rem;padding-bottom:1.5rem">
//             <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:rgb(3,10,23);padding:1rem;color:rgb(255,255,255);border-radius:0.375rem;width:66.666667%;box-shadow:0 0 #0000, 0 0 #0000, 0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)">
//               <tbody>
//                 <tr>
//                   <td>
//                     <p style="font-size:1.5rem;line-height:normal;margin:16px 0;font-weight:700;margin-bottom:0.5rem;text-align:center;margin-top:1rem"> Partnerlik İçin</p>
//                     <p style="font-size:14px;line-height:24px;margin:16px 0;border-top-width:2px;border-top-style:solid;border-color:white;margin-top:2rem;display:flex;width:30%;margin-left:auto;margin-right:auto"></p>
//                     <p class="text-md " style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Ad Soyad: ${namesurname} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Email: ${email} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Şirket Adı: ${businesname} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Telefon: ${phone} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Şirketteki Pozisyonu: ${position} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem;margin-bottom:3rem">Mesaj: ${message} </p>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </body>
        
//         </html>
//         `
//       };
//     case 'career':
//       return {
//         subject: 'Kariyer Başvuru Formu',
//         html: `
//         <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//         <!DOCTYPE html>
//         <html dir="ltr" lang="en">
        
//           <head>
//             <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
//             <meta name="x-apple-disable-message-reformatting" />
//             <title>Pam Dijital Reklam Ajansı | Kariyer</title>
//           </head>
//           <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Pam Ajans Kariyer
//           </div>
        
//           <body style="border-top-width:2px;border-top-style:solid;background-color:rgb(245,248,250);border-color:rgb(55,200,174);padding-top:1.5rem;padding-bottom:1.5rem">
//             <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:rgb(3,10,23);padding:1rem;color:rgb(255,255,255);border-radius:0.375rem;width:66.666667%;box-shadow:0 0 #0000, 0 0 #0000, 0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)">
//               <tbody>
//                 <tr>
//                   <td>
//                     <p style="font-size:1.5rem;line-height:normal;margin:16px 0;font-weight:700;margin-bottom:0.5rem;text-align:center;margin-top:1rem"> Kariyer İçin</p>
//                     <p style="font-size:14px;line-height:24px;margin:16px 0;border-top-width:2px;border-top-style:solid;border-color:white;margin-top:2rem;display:flex;width:30%;margin-left:auto;margin-right:auto"></p>
//                     <p class="text-md " style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Ad Soyad: ${namesurname} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Email: ${email} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Telefon: ${phone} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Pozisyon: ${careerposition} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem">Ünvanı: ${title} </p>
//                     <p class="text-md" style="font-size:14px;line-height:24px;margin:16px 0;padding-left:1rem;padding-right:1rem;margin-bottom:3rem">Mesaj: ${message} </p>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </body>
        
//         </html>
//         `
//       };

//     default:
//       throw new Error('Invalid type');
//   }
// }
