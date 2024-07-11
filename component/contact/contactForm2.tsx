import Link from "next/link";
import React, { useState, FormEvent } from "react";
import { contactForm2Schema } from "../services/validationFront";
import { ZodError } from "zod";

const ContactForm2: React.FC = () => {
  const [namesurname, setNamesurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [careerposition, setCareerposition] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formStatus, setFormStatus] = useState<"success" | "error" | "">("");
  const [errors, setErrors] = useState<Record<string, string | null>>({
    namesurname: null,
    email: null,
    title: null,
    phone: null,
    careerposition: null,
    message: null,
  });
  const [isChecked, setIsChecked] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>, type: string) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('type', type);

    try {
      const validatedData = contactForm2Schema.parse({
        namesurname,
        email,
        title,
        phone,
        careerposition,
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
      setPhone("");
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

  function handleInputChange(inputName: string) {
    const newErrors = { ...errors };
    newErrors[inputName] = null;
    setErrors(newErrors);
  }

  return (
    <form id="contact-form" onSubmit={(event) => handleSubmit(event, type)}>
      <div className="block">
        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Ad Soyad<span className="text-red">*</span>
          </label>
          <input
            name="namesurname"
            className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            id="namesurname"
            value={namesurname}
            onChange={(e) => { setNamesurname(e.target.value); handleInputChange("namesurname") }}
            type="text"
          />
          {errors.namesurname && <span className="text-red text-xs">{errors.namesurname}</span>}
        </div>
        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Email<span className="text-red">*</span>
          </label>
          <input
            name="email"
            className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            id="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); handleInputChange("email") }}
            type="text"
          />
          {errors.email && <span className="text-red text-xs">{errors.email}</span>}
        </div>
        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Telefon <span className="text-red">*</span>
          </label>
          <input
            name="phone"
            className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            id="phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); handleInputChange("phone") }}
            type="text"
          />
          {errors.phone && <span className="text-red text-xs">{errors.phone}</span>}
        </div>
        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="adPrice">
            Pozisyon<span className="text-red">*</span>
          </label>
          <select 
            name="careerposition"
            id="careerposition"
            value={careerposition}
            onChange={(e) => { setCareerposition(e.target.value); handleInputChange("careerposition") }}
            className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
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
        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white" htmlFor="title">
            Ünvan<span className="text-red">*</span>
          </label>
          <select 
            name="title"
            id="title"
            value={title}
            onChange={(e) => { setTitle(e.target.value); handleInputChange("title") }}
            className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
          >
            <option value="">Lütfen bir seçim yapınız.</option>
            <option value="Reklam Uzmanı">Reklam Uzmanı</option>
            <option value="Grafik Tasarımcı">Grafik Tasarımcı</option>
            <option value="Front-end Devoloper">Front-end Devoloper</option>
            <option value="Back-end Devoloper">Back-end Devoloper</option>
            <option value="Full-stack Devoloper">Full-stack Devoloper</option>
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
          className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600 w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
          name="message"
          value={message}
          onChange={(e) => { setMessage(e.target.value); handleInputChange("message") }}
          rows={5}
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
        className={`bg-second shadow-second-volume drop-shadow-lg rounded-full py-3 px-8 text-center font-semibold text-white transition-all ${
          !isChecked && "cursor-not-allowed opacity-50"
        }`}
        id="contact-form-submit"
        disabled={!isChecked}
      >
        Submit
      </button>
      <div id="contact-form-notice" className="relative mt-4 hidden rounded-lg border border-transparent p-4"></div>
    </form>
  );
};

export default ContactForm2;