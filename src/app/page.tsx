import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ShieldCheck,
  CheckCircle,
  Phone,
  Menu,
  Anchor,
  FileSearch,
  Truck,
  Landmark,
  Gavel,
  Clock,
} from "lucide-react";
import { RepossessionForm } from "@/components/repossession-form";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/*
        ┌─────────────────────────┐
        │ 1. HERO SECTION         │
        └─────────────────────────┘
      */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white">
        {/* Background Image with gradient overlay (dark mode included) */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/60 dark:from-blue-950/90 dark:to-gray-950/60" />
          <Image
            src="/hero-bg.jpg"
            alt="Professional Repossession Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <Badge
            variant="outline"
            className="mb-6 bg-blue-800/40 text-blue-100 border-blue-700"
          >
            <ShieldCheck className="mr-2 h-4 w-4" />
            Licensed &amp; Insured
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15]">
            Professional Asset Repossession <br className="hidden lg:block" />
            Services in Portland, ME
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
            Fast, Compliant Repossession Solutions for Financial Institutions
            &amp; Lenders
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request Repossession Now
            </Button>
            <Link href="#about">
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/*
        ┌─────────────────────────┐
        │ 2. ABOUT US             │
        └─────────────────────────┘
      */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center px-4">
          {/* Left side: text (center on mobile, left on larger screens) */}
          <div className="space-y-6 text-center sm:text-left">
            <Badge variant="outline" className="text-blue-600">
              Since 2010
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight dark:text-white">
              Trusted Repossession Experts
            </h2>
            <p className="text-lg dark:text-gray-300 text-gray-600">
              With over a decade of experience, <strong>RepoCoMaine</strong> has
              established itself as Maine&apos;s premier asset recovery service.
              Our team of licensed professionals combines cutting-edge
              technology with strict legal compliance to deliver efficient,
              ethical repossession services.
            </p>
            <p className="text-lg dark:text-gray-300 text-gray-600">
              Our mission is to provide secure and fully compliant repossession
              services that protect both our clients and debtors under all
              applicable laws. We value integrity, transparency, and efficiency
              in every asset recovery we undertake.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">2,500+</div>
                <div className="text-sm dark:text-gray-300 text-gray-600">
                  Successful Recoveries
                </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm dark:text-gray-300 text-gray-600">
                  Emergency Service
                </div>
              </div>
            </div>
          </div>
          {/* Right side: image */}
          <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
            <Image
              src="/about-us.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/*
        ┌───────────────────────────────┐
        │ 3. SERVICES WE OFFER         │
        └───────────────────────────────┘
      */}
      <section
        id="services"
        className="py-24 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white">
              Services We Offer
            </h2>
            <p className="max-w-2xl mx-auto text-lg dark:text-gray-300 text-gray-600">
              Comprehensive asset recovery solutions tailored for financial
              institutions and lenders
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mb-4 text-blue-600">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="dark:text-gray-300 text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*
        ┌─────────────────────────────────┐
        │ 4. LICENSING & COMPLIANCE      │
        └─────────────────────────────────┘
      */}
      <section
        id="licensing"
        className="py-24 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white">
              Licensing &amp; Compliance
            </h2>
            <p className="max-w-xl mx-auto text-lg dark:text-gray-300 text-gray-600">
              We prioritize strict adherence to federal and state regulations,
              ensuring every repossession follows proper legal procedures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border rounded-lg dark:border-gray-700">
              <ShieldCheck className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Maine Licensed
              </h3>
              <p className="dark:text-gray-300 text-gray-600">
                License #PRS-04592
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg dark:border-gray-700">
              <Gavel className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                UCC Article 9
              </h3>
              <p className="dark:text-gray-300 text-gray-600">
                Compliant with secured transaction laws
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg dark:border-gray-700">
              <FileSearch className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                FDCPA
              </h3>
              <p className="dark:text-gray-300 text-gray-600">
                Fair Debt Collection Practices Act compliance
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg dark:border-gray-700">
              <ShieldCheck className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Consumer Protection
              </h3>
              <p className="dark:text-gray-300 text-gray-600">
                State &amp; Federal Regulations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*
        ┌────────────────────────────────────────────────────────┐
        │ 5. PARTNERSHIPS & FINANCIAL INSTITUTION SERVICES       │
        └────────────────────────────────────────────────────────┘
      */}
      <section
        id="partnerships"
        className="py-24 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 dark:text-white">
            Partnerships &amp; Financial Institution Services
          </h2>
          <p className="mb-12 max-w-3xl mx-auto text-lg dark:text-gray-300 text-gray-600">
            We’ve built long-term relationships with Landmarks, credit unions,
            and other lenders. Our specialized solutions include:
          </p>
          <ul className="list-disc list-inside text-left mx-auto max-w-xl dark:text-gray-300 text-gray-700 space-y-2">
            <li>Fast asset recovery</li>
            <li>Secure vehicle storage &amp; 24-hour surveillance</li>
            <li>Transparent reporting &amp; compliance tracking</li>
            <li>Real-time status updates via online portal</li>
            <li>Nationwide skip tracing services</li>
          </ul>
          <div className="mt-8">
            <Link href="#contact">
              <Button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 text-lg text-white transition">
                Partner With Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/*
        ┌─────────────────────────────────────────────┐
        │ 6. HOW THE REPOSSESSION PROCESS WORKS       │
        └─────────────────────────────────────────────┘
      */}
      <section
        id="process"
        className="py-24 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white">
              How the Repossession Process Works
            </h2>
            <p className="text-lg dark:text-gray-300 text-gray-600">
              We follow a streamlined, step-by-step approach to asset recovery,
              ensuring fast service and full compliance at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm dark:text-gray-300 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        ┌─────────────────────────────────┐
        │ 7. EMERGENCY & 24-HR SERVICES  │
        └─────────────────────────────────┘
      */}
      <section
        id="emergency"
        className="py-24 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 dark:text-white">
            Emergency &amp; 24-Hour Repossession Services
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg dark:text-gray-300 text-gray-600">
            Need Immediate Assistance? We provide 24/7 emergency repossession
            services.
          </p>
          <Link href="tel:1234567890">
            <Button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 text-lg transition inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Us Now (24/7)
            </Button>
          </Link>
        </div>
      </section>

      {/*
        ┌─────────────────────────┐
        │ 8. SERVICE AREA MAP     │
        └─────────────────────────┘
      */}
      <ServiceAreaSection />

      {/*
        ┌────────────────────────┐
        │ 9. CONTACT US          │
        └────────────────────────┘
      */}
      <section
        id="contact"
        className="py-24 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold dark:text-white">
              Contact Our Recovery Team
            </h2>
            <p className="text-lg dark:text-gray-300 text-gray-600">
              Ready to start? Fill out the form or call us to speak with one of
              our experts. Our team typically responds within 24 hours.
            </p>
            <div className="space-y-4 dark:text-gray-300 text-gray-700">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold dark:text-white">
                    24/7 Emergency Line
                  </p>
                  <p className="text-lg dark:text-gray-300 text-gray-600">
                    (207) 555-REPO
                  </p>
                </div>
              </div>
              {/* Additional contact info can be added here */}
            </div>
            <Separator />
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">
                Additional Service Areas
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm dark:text-gray-300 text-gray-600">
                {otherAreas.map((city) => (
                  <div key={city} className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-md">
            <CardContent className="p-8">
              <RepossessionForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/*
        ┌────────────────────────────────────────────────┐
        │ (Optional) BOTTOM CTA or Repeated CTA Section │
        └────────────────────────────────────────────────┘
      */}
      <section className="py-10 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-lg text-gray-300">
            Our team is here to help you navigate all aspects of asset recovery.
            Reach out now to learn more about our process and how we can assist
            you.
          </p>
          <Link href="#contact">
            <Button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 text-lg font-semibold inline-flex items-center gap-2">
              Speak With an Expert
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * Example Data for Services, Steps, & Service Areas
 * (These can be moved to separate config files as needed)
 */
const services = [
  {
    title: "Car Repossession",
    icon: <Truck className="h-8 w-8" />,
    description:
      "Fast and legally compliant vehicle recovery for Landmarks & lenders.",
  },
  {
    title: "Boat & Marine Recovery",
    icon: <Anchor className="h-8 w-8" />,
    description: "Secure retrieval of boats, yachts, and other marine vessels.",
  },
  {
    title: "RV & Camper Repossession",
    icon: <Clock className="h-8 w-8" />,
    description:
      "Efficient recovery of large recreational vehicles and campers.",
  },
  {
    title: "Trailer & Equipment Recovery",
    icon: <Menu className="h-8 w-8" />,
    description:
      "Industrial and commercial asset recovery using specialized equipment.",
  },
  {
    title: "Skip Tracing & Asset Location",
    icon: <FileSearch className="h-8 w-8" />,
    description:
      "Locate hidden or missing assets nationwide with advanced tracing tools.",
  },
  {
    title: "Storage & Auction Services",
    icon: <Landmark className="h-8 w-8" />,
    description:
      "Safe storage and legally conducted auctions to maximize asset value.",
  },
];

const processSteps = [
  {
    title: "Submit a Request",
    description: "Online form or direct call with asset & debtor info.",
  },
  {
    title: "Skip Tracing & Location",
    description: "We use advanced methods to find missing assets fast.",
  },
  {
    title: "Legally-Compliant Recovery",
    description:
      "Trained agents secure vehicles, boats, RVs, etc. by the book.",
  },
  {
    title: "Storage & Auction",
    description: "Assets are stored or auctioned per lender instructions.",
  },
  {
    title: "Final Resolution",
    description:
      "Detailed reports and documentation provided for each repossession.",
  },
];

const otherAreas = [
  "Yarmouth",
  "Cumberland",
  "Freeport",
  "Brunswick",
  "Biddeford",
  "Saco",
  "Old Orchard Beach",
];
