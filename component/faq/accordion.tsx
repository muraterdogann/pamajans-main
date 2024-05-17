/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


type IconType ={
    id:number,
    open:number,
}


function Icon({ id, open }:IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const FaqAccordion:React.FC = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value:number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="mb-14">
     <Accordion
     className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
     open={open === 1}
     icon={<Icon id={1} open={open} />}
     placeholder="Your placeholder value"
     onPointerEnterCapture={() => {/* Your handler function */}}
     onPointerLeaveCapture={() => {/* Your handler function */}}
>
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(1)}
          placeholder="Your placeholder value"
          onPointerEnterCapture={() => {/* Your handler function */}}
          onPointerLeaveCapture={() => {/* Your handler function */}}
        >
         Neden Pam Ajans ile Çalışmalıyım?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 text-base h-full">
        Pam Ajans olarak 2016'dan beri sektörde sürekli gelişerek tecrübe ve bilgi birikimi edindik. Yurt içi ve yurt dışında elde ettiğimiz deneyimlerle, karşılaşabileceğiniz tüm sorunların çözümlerini sunabilecek bir ekibe sahibiz. Stratejilerimizi performansa dayalı olarak oluşturarak, sizlere en iyi hizmeti sunmak için çalışıyoruz. Deneyin ve farkı görün.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(2)}
          placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Çalışma Yönteminiz Nasıl?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
        Markanız için en uygun ekibimizi, ortak bir WhatsApp grubunda sizinle bir araya getiriyoruz. Bu sayede, her an destek alabileceğiniz bir ortam sağlıyoruz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(3)}
          placeholder="Your placeholder value"
            onPointerEnterCapture={() => {/* Your handler function */}}
            onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Reklam Bütçesi Ne Kadar Olmalı?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
        Reklam bütçenizi, mevcut rekabet ortamında markanızın konumuna göre belirlemelisiniz. Markanızın bilgilerini bizimle paylaşarak, uygun bütçeyi birlikte belirleyebiliriz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 4}
        icon={<Icon id={4} open={open} />}
        placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(4)}
          placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Referanslarınız Gerçek mi?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
        Evet, web sitemizde yer alan tüm referanslar gerçektir. Şu anda ya da geçmişte hizmet sunduğumuz iş ortaklarımızdır.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 5}
        icon={<Icon id={5} open={open} />}
        placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}     
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(5)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          ROAS, ROI ve Ciro Garantisi Sunuyor Musunuz?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
        Her markanın performansı farklı olduğu için, ön çalışma yapmadan ve markanın mevcut durumunu analiz etmeden ROAS, ROI ya da ciro garantisi veremeyiz. Garanti sunabilmek için önce markanızın iç dinamiklerini detaylı bir şekilde incelememiz gerekmektedir.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 6}
        icon={<Icon id={6} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(6)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Hangi Hizmetleri Sunuyorsunuz?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
        Dijital marka performansı alanında akla gelen tüm hizmetleri sunuyoruz. Dijital reklam yönetimi, web site kurulumu ve tasarımı, web site yönetimi, entegrasyon çözümleri, e-ihracat çözümleri ve daha pek çok konuda, markanıza tek merkezden destek sağlıyoruz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 7}
        icon={<Icon id={7} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(7)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Hizmet Ücretleriniz Ne Kadar?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
        Hizmet ücretlerimiz, projeden projeye ve almak istediğiniz hizmete göre değişiklik göstermektedir. Daha detaylı bilgi için bizimle iletişime geçebilirsiniz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 8}
        icon={<Icon id={8} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(8)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Nerede Bulunuyorsunuz?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
        Pam Ajans ekibi olarak Ankara/Çukurambar'dan hizmet vermekteyiz. Türkiye'nin her noktasına aktif olarak hizmet sunabilmekteyiz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 9}
        icon={<Icon id={9} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(9)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Ofisime veya İşyerime Gelebilir Misiniz?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
        Pam Ajans olarak, ne yazık ki ofisinize veya işyerinize gelme imkanımız bulunmamaktadır. Ancak dilediğiniz zaman bizi ziyaret edebilirsiniz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 10}
        icon={<Icon id={10} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(10)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Ne Kadar Sürede İstediğim Ciroya Ulaşırım?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
        İstediğiniz ciroya ulaşmanız, sadece bizim elimizde olan bir durum değildir. Başarılı olmak için ürün seçimi, fiyatlandırma politikası, ekibiniz ve temel altyapınızın sağlamlığı önemlidir. Biz sizlere yol göstererek ve marka performansınızı arttıracak çalışmalar gerçekleştirerek size destek oluyoruz. Başarıya ulaşma süreci, markanızın genel durumuna ve sektörünüzdeki rekabete bağlı olarak değişiklik gösterebilir.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;