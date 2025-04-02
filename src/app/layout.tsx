"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import AuthProvider from "./provider/AuthProvider";
import { UserProvider } from "./provider/User-Provider";
import { CategoryProvider } from "./provider/Category-Provider";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <CategoryProvider>
              <UserProvider>
                {children}
                <ToastContainer />
              </UserProvider>
            </CategoryProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
