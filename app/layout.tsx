import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import { cn } from "@/lib/utils";
import ModalProviders from "@/components/Providers/modal-providers";
import { SocketProvider } from "@/components/Providers/socket-provider";
import { QueryProvider } from "@/components/Providers/reactquery-provider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord - Teams",
  description: "Connect.Chat.Call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(openSans.className, "bg-white dark:bg-[#313338]")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="discrod-theme"
          >
            <SocketProvider>
              <ModalProviders />
              <QueryProvider>
                {children}
              </QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
