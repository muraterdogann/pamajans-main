"use client"
import React, { useState } from 'react';
import ContactForm from './contact/contactForm';
import ContactForm1 from './contact/contactForm1';
import ContactForm2 from './contact/contactForm2';

const FormToggleButton = () => {
  const [activeForm, setActiveForm] = useState<string|null>("contact");
  const [sharedData, setSharedData] = useState({
    namesurname: "",
    email: "",
    message: "",
    phone: "",
  });
  
  const handleToggleForm = (formName: string) => {
    setActiveForm(formName);
  };

  const handleSharedDataChange = (data: { namesurname?: string; email?: string; message?: string ;phone?:string}) => {
    setSharedData(prevData => ({ ...prevData, ...data }));
  };

  return (
    <div className=' '>
      <div className='flex flex-cols-3 flex-wrap justify-center'>
        <button 
          className={` flex justify-center rounded-[10px] border shadow-lg bg-${activeForm === 'contact' ? 'white' : 'second'} text-${activeForm === 'contact' ? 'second' : 'white'} py-3 px-8 m-2 lg:m-5 text-center font-semibold transition-all hover:bg-white hover:text-second text-sm min-w-[150px]`}
          onClick={() => handleToggleForm('contact')}
        >
          Markam İçin
        </button>
        <button 
          className={` flex justify-center rounded-[10px] border shadow-lg bg-${activeForm === 'contact1' ? 'white' : 'second'} text-${activeForm === 'contact1' ? 'second' : 'white'} py-3 px-8 m-2 lg:m-5 text-center font-semibold transition-all hover:bg-white hover:text-second text-sm min-w-[150px]`}
          onClick={() => handleToggleForm('contact1')}
        >
          Partnerlik
        </button>
        <button 
          className={`flex justify-center rounded-[10px] border shadow-lg bg-${activeForm === 'contact2' ? 'white' : 'second'} text-${activeForm === 'contact2' ? 'second' : 'white'} py-3 px-8 m-2 lg:m-5 text-center font-semibold transition-all hover:bg-white hover:text-second text-sm min-w-[150px]`}
          onClick={() => handleToggleForm('contact2')}
        >
          Kariyer
        </button>
      </div>
      
      {activeForm === 'contact' && <ContactForm sharedData={sharedData} onSharedDataChange={handleSharedDataChange} />}
      {activeForm === 'contact1' && <ContactForm1 sharedData={sharedData} onSharedDataChange={handleSharedDataChange} />}
      {activeForm === 'contact2' && <ContactForm2 sharedData={sharedData} onSharedDataChange={handleSharedDataChange} />}
    </div>
  );
};

export default FormToggleButton;
