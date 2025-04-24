import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import localFont from 'next/font/local'
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from '@next/third-parties/google'


const resonate = localFont({
  src: [
    {
      path: './fonts/Resonate-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Resonate-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Resonate-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Resonate-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Resonate-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Resonate-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Resonate-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Resonate-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Resonate-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

// const kanit = Kanit({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "EzyScribe: The Ultimate AI Medical Scribe Software Solution",
  description: "Discover EzyScribe, the advanced AI Medical Scribe software by Pennhealth Informatics. Enhance your clinical workflow with real-time, accurate documentation, allowing you to focus more on patient care and less on paperwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K6SV6M38" />
      {/* <Head> */}
     {/* <!-- Google Tag Manager --> */}
     {/* <script>(function(w,d,s,l,i){w[l] = w[l] || [];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K6SV6M38')</script>
      </Head> */}
      <body
        className={`${resonate.className} antialiased w-full`}
      >
        
        {/* <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6SV6M38" height="0" width="0" style="display:none;visibility:hidden"></iframe>
          </noscript> */}
        {/* {children} */}
        <Toaster />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
