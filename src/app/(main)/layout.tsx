import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - Just Ben UK",
    default: "Just Ben UK",
  },
  description:
    "Freelance, solo web developer based in the midlands. I never claim to be a designer. But I can build what ever you need",

  openGraph: {
    title: "Ben Andrews",
    description:
      "Freelance, solo web developer based in the midlands. I never claim to be a designer. But I can build what ever you need",
    siteName: "Just Ben UK",

    images: [
      {
        url: "/assets/profile.png",
        width: 1200,
        height: 630,
        alt: "My Image",
      },
    ],
  },
};

type LayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
