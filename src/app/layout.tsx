"use client";

import "./globals.css";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/stores/store";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Header></Header>
          {children}
        </body>
      </html>
    </Provider>
  );
}
