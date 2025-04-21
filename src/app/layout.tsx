import type { Metadata } from "next";
import "./globals.css";

// Aggiungi il font Espanso tramite link nel <head>
export const metadata: Metadata = {
  title: "PromoKit",
  description: "Landing page editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Espanso&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-espanso antialiased">
        {children}
      </body>
    </html>
  );
}
