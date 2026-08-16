import { Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "./commons/footer";
import Header from "./commons/header";


const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

export const metadata = {
  title: "Cartea micii vrajitoare",
  description: "Carte cu tot ce trebuie sa stie o vrajitoare la inceput de drum. Plante, animale, vraji si potiuni, toate sunt aici.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzelDecorative.variable} ${cormorantGaramond.variable}`}>
      <body>

      <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
