"use client"
import Link from "next/link";
import React, { FormEvent,useState } from "react";
import { submitContactForm } from "../services/contactService";
import { ZodError } from "zod";
import { contactForm1Schema } from "../services/validationFront";

const ContactForm:React.FC = () => {

  const [namesurname, setNamesurname] = useState("");
  const [email, setEmail] = useState("");
  const [businesname, setBusinesname] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>, type: string) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('type', type);
  
    try {
      const validatedData = contactForm1Schema.parse({
        namesurname,
        email,
        position,
        phone,
        businesname,
        message,
      });

      const responseMessage = await submitContactForm(formData, type);
      console.log(responseMessage);
      setFormStatus("success");
    setEmail("");
    setMessage("");
    setBusinesname("");
    setNamesurname("");
    setPhone("");
    setPosition("");
  } catch (err) {
      console.error(err);
      setFormStatus("error");
      if (err instanceof ZodError) {
        // Zod hatası varsa
        const newErrors: Record<string, string | null> = {};
        err.errors.forEach(error => {
          // Her bir hatayı ilgili input alanına göre atanacak hale getir
          newErrors[error.path[0]] = error.message;
        });
        setErrors(newErrors);
      }
    }
}

   


const type = 'business';
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
            onChange={(e) => {setNamesurname(e.target.value);handleInputChange("namesurname")}}
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
            onChange={(e) => {setEmail(e.target.value);handleInputChange("email")}}
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
            onChange={(e) => {setBusinesname(e.target.value);handleInputChange("businesname")}}
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
            onChange={(e) => {setPhone(e.target.value);handleInputChange("phone")}}
            type="tel"
            
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
            onChange={(e) => {setPosition(e.target.value);handleInputChange("position")}}
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
          onChange={(e) => {setMessage(e.target.value);handleInputChange("message")}}
          rows={5}
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
       className={`bg-second shadow-second-volume drop-shadow-lg rounded-full py-3 px-8 text-center font-semibold text-white transition-all ${
         !isChecked && "cursor-not-allowed opacity-50"
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

export default ContactForm;
