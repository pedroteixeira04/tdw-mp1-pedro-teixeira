import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";

export const metadata = {
  title: `Blog de Viagens`,
  description: `Este blog foi desenvolvido com Next.js e ${CMS_NAME}.`,
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 border-[#5EFF8C]">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-[#5EFF8C]">
            Criado com Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs"
              className="mx-3 bg-[#5EFF8C] hover:border-2 hover:border-[#5EFF8C] hover:bg-[#214889] hover:text-[#5EFF8C] text-[#214889] font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded-lg"
            >
              Saber mais sobre Next.js
            </a>
            <a
              href={`https://github.com/TDW-2025/MP1`}
              className="mx-3 font-bold hover:underline text-[#5EFF8C]"
            >
              Ver exemplo no GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body suppressHydrationWarning={true} className="bg-[#214889]">
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
