import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SafeRepo Fixture: Baseline Safe",
  description: "Controlled clean fixture for false-positive validation in SafeRepo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
