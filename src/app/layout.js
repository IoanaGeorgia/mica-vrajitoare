import { Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "../components/commons/footer";
import Header from "../components/commons/header";

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
  description:
    "Carte cu tot ce trebuie sa stie o vrajitoare la inceput de drum. Plante, animale, vraji si potiuni, toate sunt aici.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧹</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ro"
      className={`${cinzelDecorative.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}