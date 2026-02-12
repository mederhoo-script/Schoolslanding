import type { Metadata } from "next";
import { getSchoolData } from "@/lib/schoolData";
import "@/styles/globals.css";

const school = getSchoolData();

export const metadata: Metadata = {
  title: `${school.name} - ${school.motto}`,
  description: school.description,
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
