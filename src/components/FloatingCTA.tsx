"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const FloatingCTA = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = 100;
      const bottom = document.documentElement.scrollHeight - threshold;
      setIsAtBottom(scrollPosition >= bottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ bottom: 24 }}
      animate={{ bottom: isAtBottom ? 150 : 24 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="hidden md:block fixed right-6 z-50"
    >
      <div className="flex space-x-5">
        <motion.div
          initial={{ scale: 0.9, rotate: 0 }}
          animate={{
            scale: [1, 1.1, 1, 1.05, 1],
            rotate: [0, 5, -5, 3, -3, 0],
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <Link href={"#contact"}>
            <Button size="lg" className=" hover:bg-primary/90">
              Request Repossession
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, rotate: 0 }}
          animate={{
            scale: [1, 1.1, 1, 1.05, 1],
            rotate: [0, 5, -5, 3, -3, 0],
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <Button
            variant="destructive"
            size="lg"
            className="rounded-full p-3"
            asChild
          >
            <a href="tel:2072227202" aria-label="Call Us" title="Call Us Now">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
