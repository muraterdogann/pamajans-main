import React, { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { ZodError, z } from "zod";

const contactForm2Schema = z.object({
  namesurname: z.string().min(1, { message: "Ad Soyad gerekli" }),
  email: z.string().email({ message: "Geçerli bir email adresi girin" }),
  phone: z
    .string()
    .regex(/^0\d{10}$/, { message: "Geçerli bir telefon numarası girin" }),
  title: z.string().min(1, { message: "Ünvan gerekli" }),
  careerposition: z.string().min(1, { message: "Pozisyon gerekli" }),
  message: z.string().min(100, { message: "Mesaj en az 100 harf içermeli" }),
});

const ContactForm2: React.FC<{ sharedData: any, onSharedDataChange: any }> = ({ sharedData, onSharedDataChange }) => {
  const [namesurname, setNamesurname] = useState<string>(sharedData.namesurname || "");
  const [email, setEmail] = useState<string>(sharedData.email || "");
  const [title, setTitle] = useState<string>("");
  const [phone, setPhone] = useState<string>(sharedData || "");
  const [careerposition, setCareerposition] = useState<string>("");
  const [message, setMessage] = useState<string>(sharedData.message || "");
  const [formStatus, setFormStatus] = useState<"success" | "error" | "duplicate" | "">("");
  const [errors, setErrors] = useState<Record<string, string | null>>({
    namesurname: null,
    email: null,
    title: null,
    phone: null,
    careerposition: null,
    message: null,
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setNamesurname(sharedData.namesurname || "");
    setEmail(sharedData.email || "");
    setMessage(sharedData.message || "");
    setPhone(sharedData.phone || "");
  }, [sharedData]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>, type?: string) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('type', type || "");

    try {
      const validatedData = contactForm2Schema.parse({
        namesurname,
        email,
        title,
        phone,
        careerposition,
        message,
      });

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
            POSITION: title,
            CAREERPOSITION: careerposition,
            MESSAGE: message,
          },
          listIds: [5],
          updateEnabled: false,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setFormStatus("success");
      setEmail("");
      setMessage("");
      setTitle("");
      setNamesurname("");
      setPhone("0");
      setCareerposition("");
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

  const type = "career";

  function handleInputChange(inputName: string, value: string) {
    const newErrors = { ...errors };
    newErrors[inputName] = null;
    setErrors(newErrors);

    if (inputName === 'namesurname') setNamesurname(value);
    if (inputName === 'email') setEmail(value);
    if (inputName === 'message') setMessage(value);
    if (inputName === 'phone') setPhone(value);

    onSharedDataChange({ [inputName]: value });
  }

  return (
    <form id="contact-form" onSubmit={(event) => handleSubmit(event, type)}>
      <div className="block">
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Ad Soyad<span className="text-red">*</span>
          </label>
          <input
            name="namesurname"
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
            id="namesurname"
            value={namesurname}
            onChange={(e) => handleInputChange("namesurname", e.target.value)}
            type="text"
          />
          {errors.namesurname && <span className="text-red text-xs">{errors.namesurname}</span>}
        </div>
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Email<span className="text-red">*</span>
          </label>
          <input
            name="email"
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
            id="email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="email"
          />
          {errors.email && <span className="text-red text-xs">{errors.email}</span>}
        </div>
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Telefon <span className="text-red">*</span>
          </label>
          <input
            name="phone"
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
            id="phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); handleInputChange("phone", e.target.value) }}
            type="text"
            maxLength={11}
            pattern="^0\d{10}$"
          />
          {errors.phone && <span className="text-red text-xs">{errors.phone}</span>}
        </div>
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="careerposition">
            Pozisyon<span className="text-red">*</span>
          </label>
          <select
            name="careerposition"
            id="careerposition"
            value={careerposition}
            onChange={(e) => { setCareerposition(e.target.value); handleInputChange("careerposition", e.target.value) }}
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          >
            <option value="">Lütfen bir seçim yapınız.</option>
            <option value="Zorunlu Staj">Zorunlu Staj</option>
            <option value="Gönüllü Staj">Gönüllü Staj</option>
            <option value="Junior">Junior</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Senior">Senior</option>
          </select>
          {errors.careerposition && <span className="text-red text-xs">{errors.careerposition}</span>}
        </div>
        <div className="mb-6">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="title">
            Ünvan<span className="text-red">*</span>
          </label>
          <select
            name="title"
            id="title"
            value={title}
            onChange={(e) => { setTitle(e.target.value); handleInputChange("title", e.target.value) }}
            className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          >
            <option value="">Lütfen bir seçim yapınız.</option>
            <option value="Reklam Uzmanı">Reklam Uzmanı</option>
            <option value="Grafik Tasarımcı">Grafik Tasarımcı</option>
            <option value="Front-end Developer">Front-end Developer</option>
            <option value="Back-end Developer">Back-end Developer</option>
            <option value="Full-stack Developer">Full-stack Developer</option>
          </select>
          {errors.title && <span className="text-red text-xs">{errors.title}</span>}
        </div>
      </div>
      <div className="mb-4">
        <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
          Mesajınız<span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          className="contact-form-input normal-case dark:bg-jacarta-700 bg-gray-50 border border-jacarta-100 hover:border-accent focus:border-second w-full rounded-lg py-3 px-4 text-sm sm:text-base dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-second transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
          name="message"
          value={message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          rows={5}
          minLength={100}
        ></textarea>
        {errors.message && <span className="text-red text-xs">{errors.message}</span>}
      </div>
      <div className="mb-6 flex items-center space-x-2">
        <input
          type="checkbox"
          id="contact-form-consent-input"
          name="agree-to-terms"
          onChange={(e) => setIsChecked(e.target.checked)}
          required
          className="checked:bg-second dark:bg-jacarta-600 text-second border-jacarta-200 focus:ring-second/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0 cursor-pointer"
        />
        <label className="dark:text-jacarta-200 text-sm">
          <Link href="/tarms" className="text-second">
            Hizmet Koşullarını
          </Link>{" "} Kabul Ediyorum
        </label>
      </div>
      {formStatus === "success" && (
        <div className="text-green font-bold mb-4 normal-case select-none">Bizimle iletişime geçtiğiniz için teşekkür ederiz</div>
      )}
      {formStatus === "error" && (
        <div className="text-red font-bold mb-4 normal-case select-none">Lütfen daha sonra tekrar deneyiniz</div>
      )}
      <button
        type="submit"
        className={`bg-second shadow-second-volume drop-shadow-lg rounded-full py-3 px-8 text-center font-semibold text-white transition-all ${!isChecked && "cursor-not-allowed opacity-50"
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

export default ContactForm2;
