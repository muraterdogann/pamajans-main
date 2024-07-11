"use client"
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { ZodError, z } from "zod";
import { useRouter } from "next/navigation";

// Define the schema with Turkish phone number validation
const extendedContactFormSchema = z.object({
  namesurname: z.string().min(1, { message: "Ad Soyad gerekli" }),
  email: z.string().email({ message: "Geçerli bir email adresi girin" }),
  phone: z
    .string()
    .regex(/^0\d{10}$/, { message: "Geçerli bir telefon numarası girin" }),
  socialMedia: z.string().optional(),
  adPrice: z.string().min(1, { message: "Bütçe gerekli" }),
  message: z.string().min(100, { message: "Mesajınız en az 100 harf içermeli, lütfen daha fazla detay verin." }),
});

const ContactForm: React.FC = () => {
  const [namesurname, setNamesurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("0"); // Initialize phone state with "0"
  const [website, setWebsite] = useState<string>("");
  const [socialMedia, setSocialMedia] = useState<string>("");
  const [adPrice, setAdPrice] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formStatus, setFormStatus] = useState<"success" | "error" | "">("");
  const [errors, setErrors] = useState<Record<string, string | null>>({
    namesurname: null,
    email: null,
    phone: null,
    adPrice: null,
    socialMedia: null,
    website: null,
    message: null,
  });
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>, type: string) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('type', type);
  
    try {
      const validatedData = extendedContactFormSchema.parse({
        namesurname,
        email,
        phone,
        website,
        adPrice,
        socialMedia,
        message,
      });
  
      const response = await fetch('/api/submitContactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            NAMESURNAME: namesurname,
            PHONE: phone,
            WEBSITE: website,
            SOCIALMEDIA: socialMedia,
            BUDGET: adPrice,
            MESSAGE: message
          },
          listIds: [3], // List ID 3
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
      setEmail("");
      setMessage("");
      setAdPrice("");
      setNamesurname("");
      setPhone("0"); // Reset phone field to "0"
      setWebsite("");
      setSocialMedia("");
      router.push("/iletisim?gonderildi");
    } catch (err) {
      console.error(err);
      setFormStatus("error");
      if (err instanceof ZodError) {
        const newErrors: Record<string, string | null> = {};
        (err as ZodError).errors.forEach((error: any) => {
          newErrors[error.path[0]] = error.message;
        });
        setErrors(newErrors);
      }
    }
  }
  
  const type = "brand";
  function handleInputChange(inputName: string) {
    const newErrors = { ...errors };
    newErrors[inputName] = null;
    setErrors(newErrors);
  }

  return (
    <>
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
              onChange={(e) => { setNamesurname(e.target.value); handleInputChange("namesurname") }}
              type="text"
              className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
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
              onChange={(e) => { setEmail(e.target.value); handleInputChange("email") }}
              type="email"
              className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
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
              onChange={(e) => { setPhone(e.target.value); handleInputChange("phone") }}
              type="text"
              maxLength={11} // Set max length to 11
              pattern="^0\d{10}$" // Add pattern for validation
              className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            />
            {errors.phone && <span className="text-red text-xs">{errors.phone}</span>}
          </div>
          <div className="mb-6">
            <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="website">
              Web Siteniz
            </label>
            <input
              name="website"
              id="website"
              value={website}
              onChange={(e) => { setWebsite(e.target.value); handleInputChange("website") }}
              type="text"
              className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            />
            {errors.website && <span className="text-red text-xs">{errors.website}</span>}
          </div>
          <div className="mb-6">
            <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="socialMedia">
              Sosyal Medya Hesabınız
            </label>
            <input
              name="socialMedia"
              id="socialMedia"
              value={socialMedia}
              onChange={(e) => { setSocialMedia(e.target.value); handleInputChange("socialMedia") }}
              type="text"
              className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            />
            {errors.socialMedia && <span className="text-red text-xs">{errors.socialMedia}</span>}
          </div>
          <div className="mb-6">
            <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="adPrice">
              Bütçeniz<span className="text-red">*</span>
            </label>
            <select
              name="adPrice"
              id="adPrice"
              value={adPrice}
              onChange={(e) => { setAdPrice(e.target.value); handleInputChange("adPrice") }}
              className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
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
            onChange={(e) => { setMessage(e.target.value); handleInputChange("message") }}
            name="message"
            rows={5}
            className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
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
            <Link href="/kvkk" className="text-second">
              Hizmet Koşullarını
            </Link>{" "}
            Kabul Ediyorum
          </label>
        </div>
        {formStatus === "success" && (
          <div className="text-green font-bold mb-4 normal-case select-none esra" >Bizimle iletişime geçtiğiniz için teşekkür ederiz</div>
        )}
        {formStatus === "error" && (
          <div className="text-red font-bold mb-4 normal-case select-none" >Lütfen daha sonra tekrar deneyiniz</div>
        )}
        <button
          type="submit"
          className={`esra bg-second shadow-second-volume drop-shadow-lg rounded-full py-3 px-8 text-center font-semibold text-white transition-all ${
            !isChecked && "cursor-not-allowed opacity-50"
          }`}
          id="contact-form-submit"
          disabled={!isChecked}
        >
          Gönder
        </button>

        <div id="contact-form-notice" className="relative mt-4 hidden rounded-lg border border-transparent p-4"></div>
      </form>
    </>
  );
};

export default ContactForm;
