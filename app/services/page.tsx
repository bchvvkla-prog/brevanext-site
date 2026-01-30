import PrimaryHeading from "@/app/components/PrimaryHeading";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-32">
      <PrimaryHeading as="h1">
        Services
      </PrimaryHeading>

      <p className="mt-8 text-xl text-gray-600 max-w-3xl">
        We help businesses automate operations, build decision systems,
        and implement AI where it delivers real value.
      </p>

      <div className="mt-16 space-y-6 text-lg">
        <Link href="/services/ai-automation" className="block hover:underline">
          AI & Process Automation
        </Link>
        <Link href="/services/business-intelligence" className="block hover:underline">
          Business Intelligence & Dashboards
        </Link>
        <Link href="/services/custom-web-tools" className="block hover:underline">
          Custom Web & Internal Tools
        </Link>
        <Link href="/services/ai-advisory" className="block hover:underline">
          AI Advisory & Implementation
        </Link>
      </div>
    </main>
  );
}
