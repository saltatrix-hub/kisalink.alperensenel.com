import type { Metadata } from 'next';import './globals.css';
const title='KısaLink — Hızlı Dijital Araçlar',description='Bağlantı kısaltma, güçlü parola üretme ve görsel dönüştürme araçları.';
export const metadata:Metadata={metadataBase:new URL('https://kisalink.alperensenel.com'),title,description,openGraph:{title,description,type:'website',images:['/og.png']},twitter:{card:'summary_large_image',title,description,images:['/og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
