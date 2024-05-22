"use client"
import React, { useState } from 'react';
import ContactForm from './contact/contactForm';
import ContactForm1 from './contact/contactForm1';
import ContactForm2 from './contact/contactForm2';

const FormToggleButton = () => {
  const [activeForm, setActiveForm] = useState<string|null>("contact");
  
  const handleToggleForm = (formName: string) => {
 
    setActiveForm(formName);
  };

  console.log(activeForm)

  return (
    <div className=' '>
      <div className='flex flex-cols-3 '>
      <button 
        className={` flex min-w-[100px] text-center w-[130px] justify-center sm:min-w-[150px] rounded-[10px] border shadow-lg bg-${activeForm === 'contact' ? 'white' : 'second'} text-${activeForm === 'contact' ? 'second' : 'white'} py-3 px-8 m-2 lg:m-5 text-center font-semibold transition-all hover:bg-white hover:text-second `}
        onClick={() => handleToggleForm('contact')}
      >
        Markam
      </button>
      <button 
        className={` flex justify-center min-w-[100px] w-[130px] tect-center sm:min-w-[150px] rounded-[10px] border shadow-lg bg-${activeForm === 'contact1' ? 'white' : 'second'} text-${activeForm === 'contact1' ? 'second' : 'white'} py-3 px-8 m-2 lg:m-5 text-center font-semibold transition-all hover:bg-white hover:text-second `}
        onClick={() => handleToggleForm('contact1')}
      >
        Partnerlik
      </button>
      <button 
        className={`flex justify-center min-w-[100px] w-[130px] text-center sm:min-w-[150px] rounded-[10px] border shadow-lg bg-${activeForm === 'contact2' ? 'white' : 'second'} text-${activeForm === 'contact2' ? 'second' : 'white'} py-3 px-8 m-2 lg:m-5 text-center font-semibold transition-all hover:bg-white hover:text-second `}
        onClick={() => handleToggleForm('contact2')}
      >
        Kariyer
      </button>
      </div>
      
      {activeForm === 'contact' && <ContactForm />}
      {activeForm === 'contact1' && <ContactForm1 />}
      {activeForm === 'contact2' && <ContactForm2 />}
    </div>
  );
};

export default FormToggleButton;
