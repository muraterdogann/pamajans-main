
import Home from "./home";

export const metadata = {
    title: 'Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı',
    description: 'Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin.',
    icons: {
        icon:'/images/pam-ajans-logo-siyah.svg',
    }
}

export default function Page () {
    return( 
        <>
        
        <Home/>
        </>
    )
}