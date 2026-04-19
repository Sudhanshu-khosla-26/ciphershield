import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Using Inter as body font — reusing the same CSS var name so all components stay compatible
const inter = Inter({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Aritaro Pvt Limited | Elite Cybersecurity Services",
  description:
    "Aritaro Pvt Limited is a next-generation AI-powered cybersecurity and automation platform specialising in penetration testing, threat intelligence, and intelligent process automation for enterprises worldwide.",
  keywords: "cybersecurity, AI automation, penetration testing, SOC, incident response, cloud security, compliance, chatbot development, aritaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body
        className="min-h-screen antialiased overflow-x-hidden"
        style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background 0.5s ease, color 0.5s ease' }}
      >
        {children}
      </body>
    </html>
  );
}
