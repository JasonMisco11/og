import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OG & Associates Tech | EdTech, AV & Smart Classrooms",
  description:
    "Thoughtful classroom technology, interactive displays, AV integration and IT support for schools and organisations across West Africa.",
  openGraph: {
    title: "OG & Associates Tech | Make room for what’s next",
    description:
      "Smart classroom technology, education consultancy and IT solutions for learning and work.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
