import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RegisterModal from "./components/modals/RegisterModal";
import ClientOnly from "./components/navbar/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import { SearchModal } from "./components/modals/SearchModal";

export const metadata: Metadata = {
  title: "Aiibnb",
  description: "Aiibnb clone",
  icons: {
    icon: "/favicon.png",
  },
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-8'>{children}</div>
      </body>
    </html>
  );
}
