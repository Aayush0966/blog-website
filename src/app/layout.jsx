import { Roboto_Mono } from 'next/font/google';
import NavBar from "@/components/NavBar";
import '@/styles/global.css'

const inter = Roboto_Mono({ subsets: ['latin'] }); // Customize as needed

export const metadata = {
  title: "My App",
  description: "A sample Next.js app",
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
