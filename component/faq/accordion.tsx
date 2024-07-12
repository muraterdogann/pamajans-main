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
     className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 "
     open={open === 1}
     icon={<Icon id={1} open={open} />}
     placeholder="Your placeholder value"
     onPointerEnterCapture={() => {/* Your handler function */}}
     onPointerLeaveCapture={() => {/* Your handler function */}}
>
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left text-jacarta-700"
          onClick={() => handleOpen(1)}
          placeholder="Your placeholder value"
          onPointerEnterCapture={() => {/* Your handler function */}}
          onPointerLeaveCapture={() => {/* Your handler function */}}
        >
         Neden Pam Ajans ile Çalışmalıyım?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 normal-case bg-white p-4 text-sm h-full">
        Pam Ajans, 2016 yılından bu yana dijital pazarlama sektöründe lider konumda olup, yenilikçi yaklaşımları ve performansa dayalı stratejileriyle müşterilerine en iyi hizmeti sunmaktadır. Yurt içi ve yurt dışında kazandığımız deneyim ve bilgi birikimi sayesinde, markanızı en hızlı büyüten ve sektöründe ilkleri hayata geçiren bir ajans olarak fark yaratıyoruz. Profesyonel ekibimizle karşılaşabileceğiniz tüm sorunlara etkin çözümler sunarak, işinizi bir adım öne taşıyoruz. Pam Ajans'ı seçin ve farkı deneyimleyin.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 "
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left text-jacarta-700 text-md"
          onClick={() => handleOpen(2)}
          placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Çalışma Yönteminiz Nasıl?
        </AccordionHeader>
        <AccordionBody className="accordion-body normal-case border-t border-jacarta-100 bg-white p-4 h-full text-sm">
        Markanız için en uygun ekip üyelerimizi belirleyerek, sizinle ortak bir WhatsApp grubunda bir araya getiriyoruz. Bu sayede, anlık iletişim kurarak her an destek alabileceğiniz dinamik bir çalışma ortamı oluşturuyoruz. Sürekli iletişim halinde kalarak, ihtiyaçlarınıza hızlı ve etkili çözümler üretiyoruz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 "
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left text-jacarta-700 text-md"
          onClick={() => handleOpen(3)}
          placeholder="Your placeholder value"
            onPointerEnterCapture={() => {/* Your handler function */}}
            onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Reklam Bütçesi Ne Kadar Olmalı?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 h-full text-sm">
        Reklam bütçenizi belirlerken, markanızın mevcut durumu ve rekabet ortamını göz önünde bulundurmalısınız. Bizimle paylaştığınız bilgiler doğrultusunda, size en uygun bütçeyi birlikte belirleyebiliriz. Bu sayede, maksimum geri dönüş sağlayacak stratejiler oluşturabiliriz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100"
        open={open === 5}
        icon={<Icon id={5} open={open} />}
        placeholder="Your placeholder value"
        onPointerEnterCapture={() => {/* Your handler function */}}
        onPointerLeaveCapture={() => {/* Your handler function */}}     
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left text-jacarta-700 text-md"
          onClick={() => handleOpen(5)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          ROAS, ROI ve Ciro Garantisi Sunuyor Musunuz?
        </AccordionHeader>
        <AccordionBody className="accordion-body normal-case border-t border-jacarta-100 bg-white p-4 h-full text-sm">
        Her markanın performansı ve dinamikleri farklıdır. Bu nedenle, ön çalışma yapmadan ROAS, ROI veya ciro garantisi vermemiz mümkün değildir. Markanızın mevcut durumunu ve hedeflerini detaylı bir şekilde analiz ettikten sonra, daha kesin tahminler ve stratejiler sunabiliriz. Başarı garantisi verebilmek için markanızın iç dinamiklerini yakından incelememiz gerekmektedir.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100"
        open={open === 6}
        icon={<Icon id={6} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left text-jacarta-700 text-md"
          onClick={() => handleOpen(6)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Hangi Hizmetleri Sunuyorsunuz?
        </AccordionHeader>
        <AccordionBody className="accordion-body normal-case border-t border-jacarta-100 bg-white p-4 h-full text-sm">
        Pam Ajans olarak, dijital marka performansı alanında kapsamlı hizmetler sunmaktayız. Dijital reklam yönetimi, web sitesi kurulumu ve tasarımı, web sitesi yönetimi, entegrasyon çözümleri, e-ihracat çözümleri ve daha pek çok konuda, markanızın tüm dijital ihtiyaçlarını tek merkezden karşılıyoruz. Her aşamada profesyonel destek sağlayarak, markanızı dijital dünyada daha görünür ve başarılı kılıyoruz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100"
        open={open === 7}
        icon={<Icon id={7} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left text-jacarta-700 text-md"
          onClick={() => handleOpen(7)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Hizmet Ücretleriniz Ne Kadar?
        </AccordionHeader>
        <AccordionBody className="accordion-body normal-case border-t border-jacarta-100 bg-white p-4 h-full text-sm">
        Hizmet ücretlerimiz, projenizin kapsamına ve almak istediğiniz hizmetlere göre değişiklik göstermektedir. Daha detaylı bilgi ve size özel fiyat teklifi almak için bizimle iletişime geçebilirsiniz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100"
        open={open === 8}
        icon={<Icon id={8} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left text-jacarta-700 text-md"
          onClick={() => handleOpen(8)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Nerede Bulunuyorsunuz?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 h-full text-sm">
        Pam Ajans olarak, Ankara/Çankaya'da yer almaktayız ve Türkiye'nin her noktasına aktif olarak hizmet sunmaktayız. İhtiyaç duyduğunuz her an bizimle iletişime geçebilirsiniz.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100"
        open={open === 9}
        icon={<Icon id={9} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left text-jacarta-700 text-md"
          onClick={() => handleOpen(9)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Ofisime veya İşyerime Gelebilir Misiniz?
        </AccordionHeader>
        <AccordionBody className="accordion-body normal-case border-t border-jacarta-100 bg-white p-4 h-full text-sm">
        Pam Ajans olarak, şu an için ofisinize veya işyerinize gelme imkanımız bulunmamaktadır. Ancak, sizi ofisimizde ağırlamaktan memnuniyet duyarız.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 "
        open={open === 10}
        icon={<Icon id={10} open={open} />}
        placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left text-jacarta-700  text-md"
          onClick={() => handleOpen(10)}
          placeholder="Your placeholder value"
  onPointerEnterCapture={() => {/* Your handler function */}}
  onPointerLeaveCapture={() => {/* Your handler function */}}
        >
          Ne Kadar Sürede İstediğim Ciroya Ulaşırım?
        </AccordionHeader>
        <AccordionBody className="accordion-body normal-case border-t border-jacarta-100 bg-white p-4  h-full text-sm">
        İstediğiniz ciroya ulaşmanız, sadece bizim sağladığımız hizmetlerle sınırlı değildir. Başarılı olmanız için ürün seçimi, fiyatlandırma stratejisi, ekibinizin performansı ve altyapınızın sağlamlığı gibi birçok faktör önemlidir. Biz, yol gösterici olarak ve marka performansınızı artıracak stratejiler geliştirerek size destek oluyoruz. Başarıya ulaşma süreci, markanızın mevcut durumu ve sektörünüzdeki rekabet koşullarına bağlı olarak değişiklik gösterebilir.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;