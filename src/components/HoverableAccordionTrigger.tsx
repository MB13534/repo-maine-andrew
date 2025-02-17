import { ComponentPropsWithoutRef, useRef, useState } from "react";
import { AccordionTrigger } from "@/components/ui/accordion";
import useWatchDataAttribute from "@/hooks/useWatchDataAttribute";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

interface HoverableAccordionTriggerProps
  extends Omit<ComponentPropsWithoutRef<typeof AccordionTrigger>, "children"> {
  text: string;
}

export function HoverableAccordionTrigger({
  text,
  ...props
}: HoverableAccordionTriggerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dataState = useWatchDataAttribute(triggerRef, "data-state");
  const isOpen = dataState === "open";

  const shouldAnimate = !isOpen && isHovered;

  return (
    <AccordionTrigger
      ref={triggerRef}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group text-left hover:no-underline relative ${props.className ?? ""}`}
    >
      <div className="flex items-center space-x-4">
        <Info className="h-5 w-5 text-primary" />
        <motion.h3
          className="text-lg font-semibold"
          animate={shouldAnimate ? { x: [0, 8, -4, 0] } : { x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {text}
        </motion.h3>
      </div>
    </AccordionTrigger>
  );
}
