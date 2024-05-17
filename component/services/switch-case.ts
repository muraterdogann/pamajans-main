
import {  z } from "zod";

const formDataSchema = z.object({
  type: z.enum(["brand","career","business"]),
  namesurname: z.string().min(3,{message:"Lütfen isim ve soyisminizi doğru giriniz."}).nullable(),
  email: z.string().email().min(5, {message:"Lütfen geçerli bir eposta giriniz."}).nullable(),
  message: z.string().max(255).nullable(),
  website: z.string().min(4 ,{message:"Lütfen geçerli bir website adresi giriniz"}).nullable(),
  careerposition: z.string().nullable(),
  title: z.string().nullable(),
  socialMedia: z.string().min(2).nullable(),
  adPrice: z.string().nullable(),
  phone: z.number({required_error:"Telefon numarası kısmı boş bırakılamaz", invalid_type_error: "Telefon numarası sadece sayı içermelidir."}).min(10).max(13).nullable(),
  position: z.string().min(3).nullable(),
  businesname: z.string().min(2).nullable(),
});

export function generateMailOptions(formData: FormData): any {
  const parsedFormData = formDataSchema.parse({
    type: formData.get('type'),
    namesurname: formData.get('namesurname'),
    email: formData.get('email'),
    message: formData.get('message'),
    website: formData.get('website'),
    careerposition: formData.get('careerposition'),
    title: formData.get('title'),
    socialMedia: formData.get('socialMedia'),
    adPrice: formData.get('adPrice'),
    phone: formData.get('phone'),
    position: formData.get('position'),
    businesname: formData.get('businesname'),
  });

  const {
    type,
    namesurname,
    email,
    message,
    website,
    careerposition,
    title,
    socialMedia,
    adPrice,
    phone,
    position,
    businesname,
  } = parsedFormData;

  switch (type) {
    case 'brand':
      return {
        subject: 'Markam İçin Başvuru Formu',
        html: `
        <table>
          <tr>
            <td><h3>Ad Soyad:</h3></td>
            <td><p>${namesurname}</p></td>
          </tr> 
          <tr>
            <td><h3>Email:</h3></td>
            <td><p>${email}</p></td>
          </tr>
          <tr>
            <td><h3>Web Sitesi:</h3></td>
            <td><p>${website}</p></td>
          </tr>
          <tr>
            <td><h3>Sosyal Medya:</h3></td>
            <td><p>${socialMedia}</p></td>
          </tr>
          <tr>
            <td><h3>Bütçe:</h3></td>
            <td><p>${adPrice}</p></td>
          </tr>
          <tr>
            <td><h3>Mesaj:</h3></td>
            <td><p>${message}</p></td>
          </tr>
        </table> 
        `
      };
    case 'business':
      return {
        subject: 'Partnerlik Başvuru Formu',
        html: `
        <table>
          <tr>
            <td><h2>Ad Soyad:</h2></td>
            <td><p>${namesurname}</p></td>
          </tr>
          <tr>
            <td><h2>Email:</h2></td>
            <td><p>${email}</p></td>
          </tr>
          <tr>
            <td><h2>Şirket Adı:</h2></td>
            <td><p>${businesname}</p></td>
          </tr>
          <tr>
            <td><h2>Telefon Numarası:</h2></td>
            <td><p>${phone}</p></td>
          </tr>
          <tr>
            <td><h2>Şirketteki Pozisyonu:</h2></td>
            <td><p>${position}</p></td>
          </tr>
          <tr>
            <td><h2>Mesaj:</h2></td>
            <td><p>${message}</p></td>
          </tr>
        </table>
        `
      };
    case 'career':
      return {
        subject: 'Kariyer Başvuru Formu',
        html: `
        <table>
          <tr>
            <td><h2>Ad Soyad:</h2></td>
            <td><p>${namesurname}</p></td>
          </tr>
          <tr>
            <td><h2>Email:</h2></td>
            <td><p>${email}</p></td>
          </tr>
          <tr>
            <td><h2>Telefon:</h2></td>
            <td><p>${phone}</p></td>
          </tr>
          <tr>
            <td><h2>Pozisyon:</h2></td>
            <td><p>${careerposition}</p></td>
          </tr>
          <tr>
            <td><h2>Ünvan:</h2></td>
            <td><p>${title}</p></td>
          </tr>
          <tr>
            <td><h2>Mesaj:</h2></td>
            <td><p>${message}</p></td>
          </tr>
        </table>
        `
      };

    default:
      throw new Error('Invalid type');
  }
}
