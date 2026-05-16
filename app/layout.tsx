import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Business Backup — Payment Processor Backup & Migration Tool",
  description: "Automatically back up your Stripe data and migrate to alternative payment processors in one click. Protect your business from payment disruptions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c074e3d8-7291-4f49-a48b-bb879c5ca88d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
