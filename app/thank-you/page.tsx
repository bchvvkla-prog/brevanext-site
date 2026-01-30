import Link from "next/link";
import PrimaryHeading from "@/app/components/PrimaryHeading";

export const metadata = {
  title: "Thank You – BrevaNext",
  description: "Thanks for contacting BrevaNext. We'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-10">

        <PrimaryHeading
          as="h1"
          className="
            bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
            bg-clip-text text-transparent
          "
        >
          Thank you!
        </PrimaryHeading>

        <p className="mt-4 text-white/80 leading-relaxed">
          Your message has been received successfully.  
          Our team will review it and get back to you shortly.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold
              bg-white/10 hover:bg-white/20 transition"
          >
            Back to Home
          </Link>

          <Link
            href="/case-studies"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold
              bg-[linear-gradient(to_right,#5DF0FF,#3FA9F5,#9A5CF5,#FF4FD8)]
              text-white hover:opacity-90 transition"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </main>
  );
}
