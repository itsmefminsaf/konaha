import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Hidden Leaf Village",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
