import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delicious Exposed",
  description: "Built with create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (

    <html lang="en">
    <meta name="description" content="Generated by create next app" />
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-next-app"/>
      <title>Delicious Exposed</title>
    </head>
    <body>
    <main>
        {children}
    </main>
   
    </body>
  </html>
);
};
