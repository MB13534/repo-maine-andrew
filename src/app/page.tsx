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
  BadgeCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import { RepossessionForm } from "@/components/repossession-form";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import SectionHeader from "@/components/SectionHeader";
import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";
import SectionContainer from "@/components/SectionContainer";
import { HoverableAccordionTrigger } from "@/components/HoverableAccordionTrigger";

// Icon Mappings
const whyChooseIcons = {
  provenExperience: ShieldCheck,
  zeroRiskPricing: BadgeCheck,
  legalCompliance: FileSearch,
  fastResults: Clock,
} as const;

const serviceIcons = {
  carRepossession: Truck,
  boatRecovery: Anchor,
  rvRepossession: Clock,
  trailerRecovery: Menu,
  skipTracing: FileSearch,
  storageAuction: Landmark,
} as const;

const licensingIcons = {
  maineLicense: ShieldCheck,
  nmlsRegistration: BadgeCheck,
  uccCompliance: Gavel,
  title9ACompliance: FileSearch,
  fdpaCompliance: FileSearch,
  consumerProtection: ShieldCheck,
} as const;

// Data Arrays
const whyChooseRepoMaine: {
  title: string;
  description: string;
  iconKey: keyof typeof whyChooseIcons;
}[] = [
  {
    title: "Proven Experience",
    iconKey: "provenExperience",
    description:
      "With 10+ years in asset recovery, title processing, and auto lending, we’ve honed the strategies it takes to recover vehicles fast, safely, and legally.",
  },
  {
    title: "Zero-Risk Pricing",
    iconKey: "zeroRiskPricing",
    description:
      "You only pay if we successfully recover the asset. No hidden fees and no upfront costs—get in touch for a fully transparent fee structure.",
  },
  {
    title: "Legal & Compliance",
    iconKey: "legalCompliance",
    description:
      "We stay up-to-date with Maine laws and handle repossessions in full compliance—protecting you from legal and regulatory pitfalls.",
  },
  {
    title: "Fast Results",
    iconKey: "fastResults",
    description:
      "Our streamlined process ensures vehicles are located, recovered, and secured quickly—minimizing your losses.",
  },
];

const services: {
  title: string;
  description: string;
  iconKey: keyof typeof serviceIcons;
}[] = [
  {
    title: "Car Repossession",
    iconKey: "carRepossession",
    description:
      "Fast and legally compliant vehicle recovery for lenders and financial institutions.",
  },
  {
    title: "Boat & Marine Recovery",
    iconKey: "boatRecovery",
    description: "Secure retrieval of boats, yachts, and other marine vessels.",
  },
  {
    title: "RV & Camper Repossession",
    iconKey: "rvRepossession",
    description:
      "Efficient recovery of large recreational vehicles and campers.",
  },
  {
    title: "Trailer & Equipment Recovery",
    iconKey: "trailerRecovery",
    description:
      "Industrial and commercial asset recovery using specialized equipment.",
  },
  {
    title: "Skip Tracing & Asset Location",
    iconKey: "skipTracing",
    description:
      "Locate hidden or missing assets nationwide with advanced tracing tools.",
  },
  {
    title: "Storage & Auction Services",
    iconKey: "storageAuction",
    description:
      "Safe storage and legally conducted auctions to maximize asset value.",
  },
];

const licensing: {
  title: string;
  detail: string;
  iconKey: keyof typeof licensingIcons;
}[] = [
  {
    title: "Maine Repossession License",
    iconKey: "maineLicense",
    detail:
      "License #PRS-04592 (Issued by Maine Bureau of Consumer Credit Protection) – required for all repossession companies operating within Maine.",
  },
  {
    title: "NMLS Registration",
    iconKey: "nmlsRegistration",
    detail:
      "NMLS #1730027 (Nationwide Multistate Licensing System) – ensures federal compliance with consumer credit and debt collection laws.",
  },
  {
    title: "UCC Article 9 Compliance",
    iconKey: "uccCompliance",
    detail:
      "Repossession actions in Maine must follow Uniform Commercial Code (UCC) Article 9, which governs secured transactions, ensuring lawful repossession of collateral.",
  },
  {
    title: "Maine Title 9-A Compliance",
    iconKey: "title9ACompliance",
    detail:
      "Maine Consumer Credit Code (Title 9-A, Part 5) regulates default, repossession, and deficiency balances, ensuring legal compliance in all asset recoveries.",
  },
  {
    title: "Fair Debt Collection Practices Act (FDCPA)",
    iconKey: "fdpaCompliance",
    detail:
      "We adhere to all FDCPA guidelines to prevent unlawful debt collection practices and ensure consumer rights protection.",
  },
  {
    title: "Consumer Protection & Notification Requirements",
    iconKey: "consumerProtection",
    detail:
      "Repossession agencies in Maine must comply with notification rules, including the requirement to provide written post-repossession notices to consumers.",
  },
];

const faqs = [
  {
    question: "Who is legally allowed to perform repossessions in Maine?",
    answer: (
      <>
        In Maine, only licensed repossession agencies registered with the{" "}
        <strong>Maine Bureau of Consumer Credit Protection (BCCP)</strong> can
        legally recover vehicles or assets. Agents must also comply with UCC
        Article 9 and Maine Title 9-A.
      </>
    ),
  },
  {
    question: "What are Maine's ‘Breach of Peace’ repossession laws?",
    answer: (
      <>
        Under <strong>Maine Revised Statutes Title 9-A, Part 5</strong>, a
        repossession <strong>cannot</strong> occur if it results in a 'breach of
        the peace.' This means:
      </>
    ),
    bullets: [
      <>
        Repossessors{" "}
        <strong>
          cannot enter a locked garage or property without permission.
        </strong>
      </>,
      <>
        They <strong>cannot use force or threats</strong> during repossession.
      </>,
      <>
        They{" "}
        <strong>
          cannot impersonate law enforcement or government officials.
        </strong>
      </>,
      <>
        If a consumer verbally objects at the scene, the repossession{" "}
        <strong>must be stopped</strong> immediately.
      </>,
    ],
  },
  {
    question: "What notifications are required after repossession?",
    answer: (
      <>
        Maine law requires lenders to send a{" "}
        <strong>post-repossession notice</strong> within{" "}
        <strong>3 business days</strong>. This must inform the borrower of:
      </>
    ),
    bullets: [
      "Where their vehicle or asset is being stored.",
      "How they can reclaim their property by paying outstanding debts.",
      <>
        Whether the asset will be <strong>sold privately or at auction</strong>.
      </>,
    ],
  },
  {
    question: "Why is NMLS licensing important?",
    answer: (
      <>
        The <strong>Nationwide Multistate Licensing System (NMLS)</strong>{" "}
        ensures repossession agencies meet strict federal and state consumer
        protection laws. Holding an NMLS registration means we:
      </>
    ),
    bullets: [
      "Maintain proper insurance coverage",
      "Pass regular background checks",
      "Complete required training",
      <>
        Follow <strong>all</strong> Maine and federal repossession laws
      </>,
    ],
  },
  {
    question: "Are the Maine License # and NMLS # the same?",
    answer: (
      <>
        No. The <strong>Maine Repossession License</strong> (e.g., #PRS-04592)
        is issued by the{" "}
        <strong>Maine Bureau of Consumer Credit Protection (BCCP)</strong> and
        is required for operating in the state. The{" "}
        <strong>NMLS # (e.g., #1730027)</strong> is a federal registry ensuring
        compliance with consumer credit regulations.
      </>
    ),
  },
  {
    question: "How many licensed repo companies operate in Maine?",
    answer: (
      <>
        As of 2024, only about <strong>a dozen</strong> fully licensed
        repossession agencies operate statewide. We are among the few that
        maintain <strong>full compliance</strong> with all state and federal
        laws.
      </>
    ),
  },
  {
    question: "What risks come with using unlicensed operators?",
    answer: "Using unlicensed repossession agents can lead to:",
    bullets: [
      <>
        <strong>Invalidated security interests</strong>, making repossession
        illegal
      </>,
      <>
        <strong>Civil liability for wrongful repossession</strong>, leading to
        lawsuits
      </>,
      <>
        <strong>FDCPA violations</strong>, with fines up to $1,000 per violation
      </>,
      <>
        <strong>Potential criminal charges</strong> for trespassing or
        unauthorized vehicle recovery
      </>,
    ],
  },
  {
    question: "What happens after a vehicle is repossessed in Maine?",
    answer: (
      <>
        After repossession, the lender{" "}
        <strong>must send a post-repossession notice</strong> explaining the
        next steps. The borrower has a{" "}
        <strong>right to redeem the vehicle</strong> before it is sold at
        auction by paying off the outstanding loan balance plus any fees.
      </>
    ),
  },
  {
    question: "How can I verify the credentials of a repossession company?",
    answer: (
      <>You can verify a repossession agency’s licensing credentials through:</>
    ),
    bullets: [
      <>
        <strong>The Maine Bureau of Consumer Credit Protection</strong> – Check
        for an active state license.
      </>,
      <>
        <strong>The NMLS Consumer Access website</strong> – Search for the
        company’s NMLS number.
      </>,
    ],
  },
];

const processSteps = [
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

const partnershipSolutions = [
  "Fast asset recovery",
  "Secure vehicle storage & 24-hour surveillance",
  "Transparent reporting & compliance tracking",
  "Real-time status updates via online portal",
  "Nationwide skip tracing services",
];

// ---------------------
// MAIN HOME COMPONENT
// ---------------------
export default function Home() {
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
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-muted text-foreground"
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
            className="mb-6 p-2 bg-primary/40 text-primary-foreground border-primary"
          >
            <ShieldCheck className="mr-2 h-4 w-4" />
            Your Trusted Repossession Partner
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Asset Recovery Services
            <br className="hidden lg:block" />
            in Portland, Maine
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-primary-foreground max-w-3xl mx-auto">
            Fast, <strong>Risk-Free</strong> Repossession Solutions for Lenders
            &amp; Auto Finance Providers
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href={"#contact"}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                >
                  Request Repossession Now
                </Button>
              </Link>
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
        <SectionContainer className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center sm:text-left">
            <Badge variant="outline" className="text-primary p-2">
              A Division of A.C. Enterprises LLC
            </Badge>
            <SectionHeader
              title="About RepoMaine"
              align="left"
              className="mb-4"
            />
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">RepoMaine</strong> is the
              repossession division of{" "}
              <strong className="text-foreground">A.C. Enterprises LLC</strong>{" "}
              – founded and led by{" "}
              <strong className="text-foreground">Andrew Chaisson</strong>, an
              industry expert with over a decade of experience in auto finance,
              asset recovery, and title processing. We combine our deep
              understanding of Maine&apos;s repossession regulations with
              efficient, ethical practices to help lenders recover assets
              smoothly and safely.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is simple: deliver{" "}
              <strong>
                fast, cost-effective, and risk-free repossession solutions
              </strong>{" "}
              to financial institutions, dealers, and private lenders. We handle
              everything from skip tracing to secure storage—so you can focus on
              your core business while we handle recoveries.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-muted rounded-lg text-center">
                <div className="text-3xl font-bold text-primary">10+ Yrs</div>
                <div className="text-sm text-muted-foreground">
                  Industry Experience
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
        </SectionContainer>
      </motion.section>

      {/* WHY CHOOSE REPOMAINE SECTION */}
      <motion.section
        className="py-24 bg-muted text-center text-foreground"
        id="why-repomaine"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
      >
        <SectionContainer>
          <SectionHeader
            title="Why Choose RepoMaine?"
            description="Discover how we minimize your risk and maximize asset recoveries."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-3 sm:px-4 md:px-6 lg:px-8">
            {whyChooseRepoMaine.map((item) => {
              const IconComponent = whyChooseIcons[item.iconKey];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="flex"
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <IconComponent className="mx-auto h-12 w-12 text-primary mb-4" />
                      <CardTitle className="text-xl font-bold">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </SectionContainer>
      </motion.section>

      {/* PROCESS SECTION  */}
      <motion.section
        id="process"
        className="py-24 bg-background text-foreground"
        ref={processRef}
        initial="hidden"
        animate="visible"
        variants={slideInRight}
      >
        <SectionContainer>
          <SectionHeader
            title="Our Simple 4-Step Process"
            description="Our repossession process is straightforward and efficient."
          />
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-3 sm:px-4 md:px-6 lg:px-8 mt-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 border-2 rounded-lg border-primary hover:shadow-lg transition-shadow"
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
          <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
            We offer a <strong>risk-free, success-based model</strong>. If we do
            not recover your asset, you pay nothing.
            <br />
            Reach out for a <strong>fully transparent</strong> fee structure—no
            hidden costs.
          </p>
        </SectionContainer>
      </motion.section>

      {/* SERVICES SECTION */}
      <motion.section
        id="services"
        className="py-24 bg-muted text-foreground"
        ref={servicesRef}
        initial="hidden"
        animate={isServicesInView ? "visible" : "hidden"}
      >
        <SectionContainer>
          <motion.div variants={slideInRight}>
            <SectionHeader
              title="Services We Offer"
              description="Comprehensive asset recovery solutions tailored for financial institutions and lenders."
            />
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 sm:px-4 md:px-6 lg:px-8 mt-10"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.iconKey];
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <IconComponent className="h-8 w-8 text-primary mb-4" />
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
              );
            })}
          </motion.div>
        </SectionContainer>
      </motion.section>

      {/* SERVICE AREA MAP  */}
      <motion.section
        id="service-areas"
        className="py-24 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleIn}
      >
        <ServiceAreaSection />
      </motion.section>

      {/* PARTNERSHIPS SECTION  */}
      <motion.section
        id="partnership-services"
        className="py-24 bg-muted text-center text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
      >
        <SectionContainer>
          <SectionHeader
            title="Partnerships & Financial Institution Services"
            description="We’ve built long-term relationships with lenders, credit unions, and other institutions. Our specialized solutions include:"
          />
          <ul className="list-disc list-inside mx-auto max-w-xl text-muted-foreground space-y-2">
            {partnershipSolutions.map((solution) => (
              <li key={solution}>{solution}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href={"#contact"}>
              <Button className="bg-primary hover:bg-primary/80 px-6 py-3 text-lg text-primary-foreground transition">
                Partner With Us Today
              </Button>
            </Link>
          </div>
        </SectionContainer>
      </motion.section>

      {/* LICENSING & COMPLIANCE SECTION */}
      <section
        id="licensing"
        className="py-24 bg-background text-foreground text-center"
        ref={licensingRef}
      >
        <SectionContainer>
          <motion.div
            initial="hidden"
            animate={isLicensingInView ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <SectionHeader
              title="Licensing & Compliance"
              description="We adhere strictly to federal and state regulations to ensure
              every repossession follows proper legal procedures."
            />
            <Link
              href="https://nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1730027"
              className="ml-2 underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge
                variant="outline"
                className="mb-6 md:mb-12 text-lg py-2 px-4 bg-primary text-primary-foreground cursor-pointer transition-transform transform hover:scale-105"
              >
                <ShieldCheck className="mr-2 h-6 w-6" />
                Official NMLS #1730027 - Verify our license
              </Badge>
            </Link>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 sm:px-4 md:px-6 lg:px-8"
            initial="hidden"
            animate={isLicensingInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {licensing.map((item) => {
              const IconComponent = licensingIcons[item.iconKey];
              return (
                <motion.div
                  key={item.title}
                  variants={slideInRight}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 border rounded-lg border-border hover:shadow-lg transition-shadow"
                >
                  <IconComponent className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </SectionContainer>
      </section>

      <section
        id="licensing-faq"
        className="py-24 bg-muted text-center text-foreground"
      >
        <SectionContainer>
          <SectionHeader
            title="Licensing FAQ"
            description="Everything you need to know about repossession licensing in Maine and how it affects you."
          />
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-4xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <HoverableAccordionTrigger text={faq.question} />

                <AccordionContent className="pl-9 text-muted-foreground">
                  {faq.answer}
                  {faq.bullets && (
                    <ul className="list-inside mt-3 list-disc space-y-2">
                      {faq.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <Link
              href="https://nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1730027"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <FileSearch className="h-4 w-4" />
                Verify Our Credentials
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              All recoveries conducted under Maine PRS License #04592 and NMLS
              #1730027
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        className="py-24 bg-background text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleIn}
      >
        <SectionContainer className="text-center">
          <SectionHeader
            title="Ready to Recover Your Assets?"
            description="Fill out the form or call us to speak with one of our experts. Our team typically responds within 24 hours."
          />
          <Card className="shadow-md mt-8 bg-card border-2 border-border">
            <CardContent className="p-8">
              <RepossessionForm />
            </CardContent>
          </Card>
        </SectionContainer>
      </motion.section>

      {/* EMERGENCY SECTION  */}
      <motion.section
        id="emergency"
        className="py-24 bg-muted text-foreground text-center px-3 sm:px-4 md:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
      >
        <SectionContainer>
          <SectionHeader
            title="Emergency & 24-Hour Repossession Services"
            description="Need immediate assistance? We provide 24/7 emergency repossession services."
          />
          <Link href="tel:1234567890">
            <Button
              variant="destructive"
              size="lg"
              className="text-lg font-semibold"
            >
              <Phone className="h-5 w-5" />
              Call Us Now (24/7)
            </Button>
          </Link>
        </SectionContainer>
      </motion.section>

      {/* BOTTOM CTA SECTION  */}
      <motion.section
        className="py-10 bg-background text-foreground text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInRight}
      >
        <div className="container mx-auto max-w-2xl px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-lg">
            Our team is here to help you navigate all aspects of asset recovery.
            Reach out now to learn more about our process and how we can assist
            you.
          </p>
          <Link href="tel:1234567890">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg font-semibold"
            >
              <Phone className="h-5 w-5" />
              Speak With an Expert
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
