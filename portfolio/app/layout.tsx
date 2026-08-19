import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Thamizhvanan G — Python Developer",
  description:
    "Python & Django developer with experience in LMS content development, digital assessments, and educational technology. Open to software engineering roles.",
  keywords: [
    "Python Developer", "Django Developer", "Software Engineer",
    "Machine Learning", "LMS Development", "EdTech", "Thamizhvanan",
    "Web Developer", "Agentic AI", "Full Stack Python",
  ],
  authors: [{ name: "Thamizhvanan G" }],
  openGraph: {
    title: "Thamizhvanan G — Python Developer",
    description: "Building scalable web applications and solving real-world problems through Python and Django.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Blocking script: sets dark/light class before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else if(t==='dark'){document.documentElement.classList.add('dark')}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip navigation for accessibility */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}