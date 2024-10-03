"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";
import { Mail, Phone } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
       

        <div className="flex gap-4">
           <Link href="/">
          <span className="sr-only">nitarunachal@nitap.ac.in</span>
          <Image src={logoSrc} alt="NIT Logo" className="h-8 w-full" priority />
        </Link>
        <div className="flex items-center gap-2">
          <Mail size={16} /> {/* Lucide email icon with size 16 */}
          <span className="">nitarunachal@nitap.ac.in</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone size={16} /> {/* Lucide email icon with size 16 */}
          <span className="">0360-2284801</span>
        </div>
        </div>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-md p-2 pl-10 rounded-full border border-gray-300"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
          <div className="ml-1 mt-1">
            {/* <iframe
              src="https://ghbtns.com/github-btn.html?user=xitanggg&repo=open-resume&type=star&count=true"
              width="100"
              height="20"
              className="overflow-hidden border-none"
              title="GitHub"
            /> */}


          </div>

           <ul className='flex gap-4'>
           
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
};
