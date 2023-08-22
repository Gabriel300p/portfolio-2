import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import { Metadata } from "next";
import { useLocale } from "next-intl";
import { Exo_2, Raleway } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body
        className={`${raleway.variable} ${exo2.variable} bg-neutral-950 text-neutral-200 min-h-screen antialiased flex font-body`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="container max-w-7xl mx-auto h-full flex-1 flex flex-col gap-40 p-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
