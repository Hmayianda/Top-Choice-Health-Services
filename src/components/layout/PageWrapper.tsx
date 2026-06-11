import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CTABanner } from "@/components/ui/CTABanner";

interface Props {
  children: ReactNode;
  showCTA?: boolean;
}

export function PageWrapper({ children, showCTA = true }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      {showCTA && <CTABanner />}
      <Footer />
    </div>
  );
}
