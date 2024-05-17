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
        className={`min-w-[100px] text-center lg:min-w-[150px] rounded-[10px] border shadow-lg bg-${activeForm === 'contact' ? 'white' : 'second'} text-${activeForm === 'contact' ? 'second' : 'white'} py-3 px-8 m-2 lg:m-5 text-center font-semibold transition-all hover:bg-white hover:text-second `}
        onClick={() => handleToggleForm('contact')}
      >
        Markam
      </button>
      <button 
        className={`min-w-[100px] tect-center lg:min-w-[150px] rounded-[10px] border shadow-lg bg-${activeForm === 'contact1' ? 'white' : 'second'} text-${activeForm === 'contact1' ? 'second' : 'white'} py-3 px-8 m-2 lg:m-5 text-center font-semibold transition-all hover:bg-white hover:text-second `}
        onClick={() => handleToggleForm('contact1')}
      >
        Partnerlik
      </button>
      <button 
        className={`min-w-100px text-center lg:min-w-[150px] rounded-[10px] border shadow-lg bg-${activeForm === 'contact2' ? 'white' : 'second'} text-${activeForm === 'contact2' ? 'second' : 'white'} py-3 px-8 m-2 lg:m-5 text-center font-semibold transition-all hover:bg-white hover:text-second `}
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
