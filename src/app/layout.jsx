import { Roboto_Mono } from 'next/font/google';
import NavBar from "@/components/NavBar";
import '@/styles/global.css'

const inter = Roboto_Mono({ subsets: ['latin'] }); // Customize as needed

export const metadata = {
  title: "DevBlogs",
  description: "DevBlogsWorld is a developer-oriented blog site fetching posts dynamically from Dev.to.",
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
