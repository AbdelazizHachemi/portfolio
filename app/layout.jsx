import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Software Enginner | Portfolio Abdelaziz Hachemi",
  description: "Portfolio of Abdelaziz Hachemi, a software engineer specializing in web development and mobile applications and DevOps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ThemeProvider
          attribute="class"
          disableTransitionOnChange
          enableSystem
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      
      </body>
    </html>
  );
}
