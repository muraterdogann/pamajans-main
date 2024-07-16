import React, { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { ZodError, z } from "zod";

const contactForm1Schema = z.object({
  namesurname: z.string().min(1, { message: "Ad Soyad gerekli" }),
  email: z.string().email({ message: "Geçerli bir email adresi girin" }),
  phone: z
    .string()
    .regex(/^0\d{10}$/, { message: "Geçerli bir telefon numarası girin" }),
  businesname: z.string().min(1, { message: "Şirket Adı gerekli" }),
  position: z.string().min(1, { message: "Pozisyon gerekli" }),
  message: z.string().min(100, { message: "Mesaj en az 100 harf içermeli" }),
});

const ContactForm1: React.FC<{ sharedData: any, onSharedDataChange: any }> = ({ sharedData, onSharedDataChange }) => {
  const [namesurname, setNamesurname] = useState(sharedData.namesurname || "");
  const [email, setEmail] = useState(sharedData.email || "");
  const [businesname, setBusinesname] = useState<string>("");
  const [phone, setPhone] = useState<string>(sharedData.phone || ""); // Initialize phone state with "0"
  const [position, setPosition] = useState<string>("");
  const [message, setMessage] = useState(sharedData.message || "");
  const [formStatus, setFormStatus] = useState<"success" | "error" | "">("");
  const [errors, setErrors] = useState<Record<string, string | null>>({
    namesurname: null,
    email: null,
    businesname: null,
    phone: null,
    position: null,
    message: null,
  });
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setNamesurname(sharedData.namesurname || "");
    setEmail(sharedData.email || "");
    setMessage(sharedData.message || "");
  }, [sharedData]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>, type: string) {
    event.preventDefault();

    try {
      const validatedData = contactForm1Schema.parse({
        namesurname,
        email,
        position,
        phone,
        businesname,
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
            BUSINESNAME: businesname,
            PHONE: phone,
            POSITION: position,
            MESSAGE: message
          },
          listIds: [4],
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
      setBusinesname("");
      setNamesurname("");
      setPhone("0"); // Reset phone field to "0"
      setPosition("");
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

  const type = 'business';
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
        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Ad Soyad<span className="text-red">*</span>
          </label>
          <input
            name="namesurname"
            className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            id="namesurname"
            value={namesurname}
            onChange={(e) => handleInputChange("namesurname", e.target.value)}
            type="text"
          />
          {errors.namesurname && <span className="text-red text-xs">{errors.namesurname}</span>}
        </div>

        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            E-posta<span className="text-red">*</span>
          </label>
          <input
            name="email"
            className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            id="email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="email"
          />
          {errors.email && <span className="text-red text-xs">{errors.email}</span>}
        </div>

        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Şirket Adı<span className="text-red">*</span>
          </label>
          <input
            name="businesname"
            className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            id="businesname"
            value={businesname}
            onChange={(e) => { setBusinesname(e.target.value); handleInputChange("businesname", e.target.value) }}
            type="text"
          />
          {errors.businesname && <span className="text-red text-xs">{errors.businesname}</span>}
        </div>

        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Telefon <span className="text-red">*</span>
          </label>
          <input
            name="phone"
            className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            id="phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); handleInputChange("phone", e.target.value) }}
            type="tel"
            maxLength={11} // Set max length to 11
            pattern="^0\d{10}$" // Add pattern for validation
          />
          {errors.phone && <span className="text-red text-xs">{errors.phone}</span>}
        </div>

        <div className="mb-6 ">
          <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
            Şirketteki Pozisyonunuz <span className="text-red">*</span>
          </label>
          <input
            name="position"
            className="contact-form-input normal-case dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600  w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
            id="position"
            value={position}
            onChange={(e) => { setPosition(e.target.value); handleInputChange("position", e.target.value) }}
            type="text"
          />
          {errors.position && <span className="text-red text-xs">{errors.position}</span>}
        </div>

      </div>

      <div className="mb-4">
        <label className="font-display text-jacarta-700 mb-1 block text-sm dark:text-white">
          Mesajınız<span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          className="contact-form-input dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-second dark:border-jacarta-600 w-full rounded-lg py-3 drop-shadow-lg sm:drop-shadow-[0px_1px_1px_#000000] hover:ring-2 dark:text-white"
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
          required
          name="agree-to-terms"
          onChange={(e) => setIsChecked(e.target.checked)}
          className="checked:bg-second dark:bg-jacarta-600 text-second border-jacarta-200 focus:ring-second/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0 cursor-pointer"
        />
        <label className="dark:text-jacarta-200 text-sm">
          <Link href="/tarms" className="text-second">
            Hizmet Koşullarını
          </Link>{" "} Kabul Ediyorum
        </label>
      </div>
      {formStatus === "success" && (
        <div className="text-green font-bold mb-4 normal-case select-none" >Bizimle iletişime geçtiğiniz için teşekkür ederiz</div>
      )}
      {formStatus === "error" && (
        <div className="text-red font-bold mb-4 normal-case select-none" >Lütfen daha sonra tekrar deneyiniz</div>
      )}
      <button
        type="submit"
        className={`bg-second shadow-second-volume drop-shadow-lg rounded-full py-3 px-8 text-center font-semibold text-white transition-all ${!isChecked && "cursor-not-allowed opacity-50"
          }`}
        id="contact-form-submit"
        disabled={!isChecked}
      >
        Submit
      </button>
      {/* <BidsModal>
      </BidsModal> */}

      <div
        id="contact-form-notice"
        className="relative mt-4 hidden rounded-lg border border-transparent p-4"
      ></div>
    </form>
  );
};

export default ContactForm1;
