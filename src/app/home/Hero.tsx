import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
      <div className="flex justify-center lg:justify-start mb-4 lg:mb-8">
          <Image
            src="/Images/NIT-LOGO.jpg" // Replace with your external logo URL
            alt="NIT Arunachal Pradesh Logo"
            className="h-12 w-auto"
            width={150} // Adjust based on the logo size
            height={50} // Adjust based on the logo size
            priority
          />
        </div>
        <h1 className="text-red-500 pb-2 text-4xl font-bold lg:text-5xl">
          NIT,
          <br />
          Arunachal Pradesh
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
        Official format of Resume
        </p>
        <Link href="/resume-import" className="btn-primary mt-6 lg:mt-14 bg-slate-900 text-white border-blue-500">
          Create Resume <span aria-hidden="true">→</span>
        </Link>
        <p className="ml-6 mt-3 text-sm text-gray-600">sign up required</p>
        <p className="mt-3 text-sm text-gray-600 lg:mt-36">
          Already have a resume? Test its ATS readability with the{" "}
          <Link href="/resume-parser" className="underline underline-offset-2">
            resume parser
          </Link>
        </p>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
