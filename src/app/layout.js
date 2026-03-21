import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "CipherShield | Elite Cybersecurity Solutions",
  description:
    "CipherShield provides enterprise-grade cybersecurity solutions, threat intelligence, and zero-trust security frameworks for organizations worldwide.",
  keywords: "cybersecurity, threat intelligence, zero trust, network security, penetration testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[#020407] text-[#f0fff4] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
