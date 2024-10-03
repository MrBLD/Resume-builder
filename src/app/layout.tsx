import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "components/Footer";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { Loader } from "lucide-react";

export const metadata = {
  title: "OpenResume - Free Open-source Resume Builder and Parser",
  description:
    "OpenResume is a free, open-source, and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, OpenResume also provides a resume parser to help test and confirm its ATS readability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body>
        <ClerkLoading>
          <Loader/>
        </ClerkLoading>
        <ClerkLoaded>
        <TopNavBar />
        {children}
        </ClerkLoaded>
        
        <Analytics />
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
