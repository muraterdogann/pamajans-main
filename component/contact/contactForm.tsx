import React, { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { ZodError, z } from "zod";


const contactFormSchema = z.object({
  namesurname: z.string().min(1, { message: "Ad Soyad gerekli" }),
  email: z.string().email({ message: "Geçerli bir email adresi girin" }),
  phone: z.string().regex(/^0\d{10}$/, { message: "Geçerli bir telefon numarası girin" }),
  adPrice: z.string().min(1, { message: "Bütçe gerekli" }),
  message: z.string().min(100, { message: "Mesajınız en az 100 harf içermeli, lütfen daha fazla detay verin." }),
  businessName: z.string().min(1, { message: "Şirket Adı gerekli" }),
  website: z.string().url({ message: "Geçerli bir website adresi girin" }),
  socialMedia: z.string().min(1, { message: "Sosyal Medya bilgisi gerekli" }),
});

const ContactForm: React.FC<{ sharedData: any, onSharedDataChange: any }> = ({ sharedData, onSharedDataChange }) => {
  const [namesurname, setNamesurname] = useState(sharedData.namesurname || "");
  const [email, setEmail] = useState(sharedData.email || "");
  const [phone, setPhone] = useState<string>(sharedData.phone || "");
  const [adPrice, setAdPrice] = useState<string>(sharedData.adPrice || "");
  const [businessName, setBusinessName] = useState(sharedData.businessName || "");
  const [website, setWebsite] = useState(sharedData.website || "");
  const [socialMedia, setSocialMedia] = useState(sharedData.socialMedia || "");
  const [message, setMessage] = useState(sharedData.message || "");
  const [formStatus, setFormStatus] = useState<"success" | "error" | "">("");
  const [warning, setWarning] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string | null>>({
    namesurname: null,
    email: null,
    phone: null,
    adPrice: null,
    message: null,
    businessName: null,
    website: null,
    socialMedia: null
  });
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setNamesurname(sharedData.namesurname || "");
    setEmail(sharedData.email || "");
    setPhone(sharedData.phone || "");
    setAdPrice(sharedData.adPrice || "");
    setBusinessName(sharedData.businessName || "");
    setWebsite(sharedData.website || "");
    setSocialMedia(sharedData.socialMedia || "");
    setMessage(sharedData.message || "");
  }, [sharedData]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>, type: string) {
    event.preventDefault();

    if (adPrice === "0 - 40.000₺") {
      setWarning("Değerli ilginiz için çok teşekkür ederiz! Şu an için 40.000₺ üzerindeki bütçelerle çalışma sağlıyoruz.");
      return;
    }    

    try {
      const validatedData = contactFormSchema.parse({
        namesurname,
        email,
        phone,
        adPrice,
        message,
        businessName,
        website,
        socialMedia,
      });

      setWarning(null);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            NAMESURNAME: namesurname,
            PHONE: phone,
            ADPRICE: adPrice,
            MESSAGE: message,
            BUSINESSNAME: businessName,
            WEBSITE: website,
            SOCIALMEDIA: socialMedia,
          },
          listIds: [3],
          updateEnabled: false,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.message);
      setFormStatus("success");
      setNamesurname("");
      setEmail("");
      setPhone("0");
      setAdPrice("");
      setBusinessName("");
      setWebsite("");
      setSocialMedia("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setFormStatus("error");
      if (err instanceof ZodError) {
        const newErrors: Record<string, string | null> = {};
        err.errors.forEach(error => {
          newErrors[error.path[0]] = error.message;
        });
        setErrors(newErrors);
      }
    }
  }


  const type = 'brand';
  function handleInputChange(inputName: string, value: string) {
    const newErrors = { ...errors };
    newErrors[inputName] = null;
    setErrors(newErrors);

    if (inputName === 'namesurname') setNamesurname(value);
    if (inputName === 'email') setEmail(value);
    if (inputName === 'message') setMessage(value);
    if (inputName === 'phone') setPhone(value);
    if (inputName === 'adPrice') setAdPrice(value);
    if (inputName === 'businessName') setBusinessName(value);
    if (inputName === 'website') setWebsite(value);
    if (inputName === 'socialMedia') setSocialMedia(value);

    onSharedDataChange({ [inputName]: value });
  }

  return (
    <form id="contact-form" onSubmit={(event) => handleSubmit(event, type)}>
      <div className="block">
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="namesurname">
            Ad Soyad<span className="text-red">*</span>
          </label>
          <input
            name="namesurname"
            id="namesurname"
            value={namesurname}
            onChange={(e) => handleInputChange("namesurname", e.target.value)}
            type="text"
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          />
          {errors.namesurname && <span className="text-red text-xs">{errors.namesurname}</span>}
        </div>
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="email">
            E-posta<span className="text-red">*</span>
          </label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="email"
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          />
          {errors.email && <span className="text-red text-xs">{errors.email}</span>}
        </div>
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="phone">
            Telefon - 05xx xxx xx xx<span className="text-red">*</span>
          </label>
          <input
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); handleInputChange("phone", e.target.value) }}
            type="text"
            maxLength={11} // Set max length to 11
            pattern="^0\d{10}$" // Add pattern for validation
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          />
          {errors.phone && <span className="text-red text-xs">{errors.phone}</span>}
        </div>
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="businessName">
            Şirket Adı<span className="text-red">*</span>
          </label>
          <input
            name="businessName"
            id="businessName"
            value={businessName}
            onChange={(e) => handleInputChange("businessName", e.target.value)}
            type="text"
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          />
          {errors.businessName && <span className="text-red text-xs">{errors.businessName}</span>}
        </div>

        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="website">
            Website "https://www.website.com" şeklinde giriniz<span className="text-red">*</span>
          </label>
          <input
            name="website"
            id="website"
            value={website}
            onChange={(e) => handleInputChange("website", e.target.value)}
            type="text"
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          />
          {errors.website && <span className="text-red text-xs">{errors.website}</span>}
        </div>

        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="socialMedia">
            Sosyal Medya<span className="text-red">*</span>
          </label>
          <input
            name="socialMedia"
            id="socialMedia"
            value={socialMedia}
            onChange={(e) => handleInputChange("socialMedia", e.target.value)}
            type="text"
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          />
          {errors.socialMedia && <span className="text-red text-xs">{errors.socialMedia}</span>}
        </div>
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="adPrice">
            Reklam Bütçeniz (Aylık)<span className="text-red">*</span>
          </label>
          <select
            name="adPrice"
            id="adPrice"
            value={adPrice}
            onChange={(e) => { setAdPrice(e.target.value); handleInputChange("adPrice", e.target.value) }}
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          >
            <option value="">Lütfen bir miktar seçiniz</option>
            <option value="0 - 40.000₺">0 - 40.000₺</option>
            <option value="40.000₺ - 80.000₺">40.000₺ - 80.000₺</option>
            <option value="80.000₺ - 150.000₺">80.000₺ - 150.000₺</option>
            <option value="150.000₺ - 300.000₺">150.000₺ - 300.000₺</option>
            <option value="300.000₺ - 600.000₺">300.000₺ - 600.000₺</option>
            <option value="600.000₺ ve üstü" className="normal-case">600.000₺ ve üstü</option>
          </select>
          {errors.adPrice && <span className="text-red text-xs">{errors.adPrice}</span>}
        </div>
      </div>

      <div className="mb-4">
        <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="message">
          Mesajınız<span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          name="message"
          rows={5}
          className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
        ></textarea>
        {errors.message && <span className="text-red text-xs">{errors.message}</span>}
      </div>

      <div className="mb-6 flex items-center space-x-2">
        <input
          type="checkbox"
          id="checkbox"
          required
          name="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
          className="checked:bg-second dark:bg-jacarta-600 text-second border-jacarta-200 focus:ring-second/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0 cursor-pointer"
        />
        <label className="dark:text-jacarta-200 text-sm">
          <Link href="/kvkk" target="_blank" className="text-second">
            Hizmet Koşullarını
          </Link>{" "}
          Kabul Ediyorum
        </label>
      </div>
      {warning && (
        <div className="text-red font-bold mb-4 normal-case select-none">
          {warning}
        </div>
      )}
      {formStatus === "success" && (
        <div className="text-green font-bold mb-4 normal-case select-none esra">
          Bizimle iletişime geçtiğiniz için teşekkür ederiz
        </div>
      )}
      {formStatus === "error" && (
        <div className="text-red font-bold mb-4 normal-case select-none">
          Lütfen daha sonra tekrar deneyiniz
        </div>
      )}
      <button
        type="submit"
        className={`esra bg-second shadow-second-volume drop-shadow-lg rounded-full py-3 px-8 text-center font-semibold text-white transition-all ${!isChecked && "cursor-not-allowed opacity-50"
          }`}
        id="contact-form-submit"
        disabled={!isChecked}
      >
        Gönder
      </button>

      <div id="contact-form-notice" className="relative mt-4 hidden rounded-lg border border-transparent p-4"></div>
    </form>
  );
};

export default ContactForm;
