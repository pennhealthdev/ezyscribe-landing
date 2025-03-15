import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import localFont from 'next/font/local'
import { Toaster } from "@/components/ui/sonner";


const resonate = localFont({
  src: [
    {
      path: '../fonts/Resonate-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Resonate-Extralight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Resonate-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Resonate-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Resonate-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Resonate-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Resonate-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Resonate-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Resonate-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

// const kanit = Kanit({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Ezyscribe",
  description: "Your AI-Powered Medical Scribing solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head> */}
      <body
        className={`${resonate.className} antialiased w-full`}
      >
        {/* {children} */}
        <Toaster />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
