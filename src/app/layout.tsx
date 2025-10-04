import { geistMono, geistSans } from "@/lib/fonts";
import "@/styles/globals.css";
import "@/lib/orpc/orpc.server";
import { ORPCProvider } from "@/lib/orpc/provider";

export { metadata } from "@/lib/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ORPCProvider>{children}</ORPCProvider>
      </body>
    </html>
  );
}
