"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function Home() {
  // Refs for sections that need in-view triggers
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const licensingRef = useRef(null);
  const processRef = useRef(null);

  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-50px",
  });
  const isLicensingInView = useInView(licensingRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <div className="flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center bg-muted text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.9)] to-[hsl(var(--background)/0.6)] dark:from-[hsl(var(--primary)/0.95)] dark:to-[hsl(var(--background)/0.8)]" />
          <Image
            src="/hero-bg.jpg"
            alt="Professional Repossession Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-6xl w-full px-8 text-center">
          <Badge
            variant="outline"
            className="mb-6 bg-primary/40 text-primary-foreground border-primary"
          >
            <ShieldCheck className="mr-2 h-4 w-4" />
            Licensed &amp; Insured
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Professional Asset Repossession
            <br className="hidden lg:block" /> Services in Portland, ME
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-primary-foreground max-w-3xl mx-auto">
            Fast, Compliant Repossession Solutions for Financial Institutions
            &amp; Lenders
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Request Repossession Now
              </Button>
            </motion.div>
            <Link href={"#about"}>
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
      </motion.section>

      {/* ABOUT US SECTION */}
      <motion.section
        id="about"
        className="py-24 bg-background text-foreground"
        ref={aboutRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
      >
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center px-8">
          <div className="space-y-6 text-center sm:text-left">
            <Badge variant="outline" className="text-primary">
              Since 2010
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Trusted Repossession Experts
            </h2>
            <p className="text-lg text-muted-foreground">
              With over a decade of experience, <strong>RepoCoMaine</strong> has
              established itself as Maine&apos;s premier asset recovery service.
              Our licensed professionals combine cutting-edge technology with
              strict legal compliance to deliver efficient, ethical repossession
              services.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to provide secure and fully compliant repossession
              services that protect both our clients and debtors under all
              applicable laws. We value integrity, transparency, and efficiency
              in every recovery.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg text-center">
                <div className="text-3xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground">
                  Successful Recoveries
                </div>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Emergency Service
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video bg-muted rounded-xl overflow-hidden">
            <Image
              src="/about-us.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* SERVICE AREA MAP */}
      <motion.section
        className="py-24 bg-muted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleIn}
      >
        <ServiceAreaSection />
      </motion.section>

      {/* LICENSING & COMPLIANCE SECTION */}
      <section
        id="licensing"
        className="py-24 bg-background px-8 sm:px-6 lg:px-8 text-center text-foreground"
        ref={licensingRef}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-12"
            initial="hidden"
            animate={isLicensingInView ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Licensing &amp; Compliance
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              We adhere strictly to federal and state regulations, ensuring
              every repossession follows proper legal procedures.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isLicensingInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {licensing.map((item) => (
              <motion.div
                key={item.title}
                variants={slideInRight}
                className="text-center p-6 border rounded-lg border-border hover:shadow-lg transition-shadow"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION  */}
      <motion.section
        id="services"
        className="py-24 bg-muted"
        ref={servicesRef}
        initial="hidden"
        animate={isServicesInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={slideInRight} className="text-center mb-12 ">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Services We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive asset recovery solutions tailored for financial
              institutions and lenders.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="mb-4 text-primary">{service.icon}</div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* PARTNERSHIPS SECTION */}
      <motion.section
        id="partnerships"
        className="py-24 bg-background px-8 sm:px-6 lg:px-8 text-center text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Partnerships &amp; Financial Institution Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We’ve built long-term relationships with Landmarks, credit unions,
            and other lenders. Our specialized solutions include:
          </p>
          <ul className="list-disc list-inside mx-auto max-w-xl text-muted-foreground space-y-2 mt-4">
            <li>Fast asset recovery</li>
            <li>Secure vehicle storage &amp; 24-hour surveillance</li>
            <li>Transparent reporting &amp; compliance tracking</li>
            <li>Real-time status updates via online portal</li>
            <li>Nationwide skip tracing services</li>
          </ul>
          <div className="mt-8">
            <Link href={"#contact"}>
              <Button className="bg-primary hover:bg-primary/80 px-6 py-3 text-lg text-primary-foreground transition">
                Partner With Us Today
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* PROCESS SECTION */}
      <motion.section
        id="process"
        className="py-24 bg-muted"
        ref={processRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInRight}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Our repossession process is straightforward and efficient.
            </p>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8"
            variants={staggerContainer}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 border rounded-lg border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        className="py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleIn}
      >
        <div className="container mx-auto max-w-6xl px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Contact Our Recovery Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to start? Fill out the form or call us to speak with one of
              our experts. Our team typically responds within 24 hours.
            </p>
          </div>
          <Card className="shadow-md mt-8">
            <CardContent className="p-8">
              <RepossessionForm />
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* EMERGENCY SECTION */}
      <motion.section
        id="emergency"
        className="py-24 bg-muted px-8 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Emergency &amp; 24-Hour Repossession Services
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Need immediate assistance? We provide 24/7 emergency repossession
            services.
          </p>
          <Link href="tel:1234567890">
            <Button
              variant="destructive"
              size="lg"
              className="text-lg inline-flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Us Now (24/7)
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* BOTTOM CTA SECTION  */}
      <motion.section
        className="py-10 bg-background text-foreground text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInRight}
      >
        <div className="container mx-auto max-w-2xl px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-lg">
            Our team is here to help you navigate all aspects of asset recovery.
            Reach out now to learn more about our process and how we can assist
            you.
          </p>
          <Link href={"#contact"}>
            <Button
              variant="secondary"
              size="lg"
              className="text-lg font-semibold inline-flex items-center gap-2"
            >
              Speak With an Expert
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

const licensing = [
  {
    title: "Maine Licensed",
    icon: <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4" />,
    detail: "License #PRS-04592",
  },
  {
    title: "UCC Article 9",
    icon: <Gavel className="mx-auto h-12 w-12 text-primary mb-4" />,
    detail: "Compliant with secured transaction laws",
  },
  {
    title: "FDCPA",
    icon: <FileSearch className="mx-auto h-12 w-12 text-primary mb-4" />,
    detail: "Fair Debt Collection Practices Act compliance",
  },
  {
    title: "Consumer Protection",
    icon: <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4" />,
    detail: "State & Federal Regulations",
  },
];

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

const steps = [
  {
    title: "Request Submission",
    description:
      "Submit your repossession request with complete asset details.",
  },
  {
    title: "Asset Tracking",
    description:
      "Use advanced tracking and skip tracing to locate the asset quickly.",
  },
  {
    title: "Legal Recovery",
    description:
      "Execute the recovery with full legal compliance and authorization.",
  },
  {
    title: "Transfer & Documentation",
    description:
      "Securely transfer the asset and provide detailed documentation.",
  },
];
