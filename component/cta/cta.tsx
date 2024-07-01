import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Cta = () => {
	return (
		<div>
			{/* <!-- CTA --> */}
			<div className="relative -mt-[19rem] lg:-mt-[27rem] z-10 dark:bg-jacarta-900 ">
				<div className="container">
					<div className="relative overflow-hidden rounded-2.5xl px-16 pt-16 pb-8 shadow-md lg:px-24">
						<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
							<img src="/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
						</picture>
						<picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
							<img src="/images/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
						</picture>
						<div className="items-center justify-between md:flex">
							<div className="mb-6 md:w-1/2">
								<h2 className="mb-4 font-display text-2xl text-jacarta-700 dark:text-white sm:text-3xl">
									Mutlu markalarımızın arasına katıl
								</h2>
								<p className="mb-8 text-lg ">
								Markanın potansiyelini ortaya çıkaralım ve büyüme hedeflerine ulaşmanı sağlayacak stratejiler sunalım. İletişime geç, başarının kapılarını birlikte açalım.
								</p>
								<Link href="/iletisim" className="inline-block rounded-[10px] bg-second text-white py-3 px-8 text-center font-semibold text-white transition-all hover:bg-main">
									Hemen İletişime Geç
								</Link>
							</div>
							<Image src="/images/pam-ajans-v2/iletisime-gec.png" width={340} height={300} alt="" />
						</div>
					</div>
				</div>
				
			</div>
			{/* <!-- end cta --> */}
		</div>
	);
};

export default Cta;