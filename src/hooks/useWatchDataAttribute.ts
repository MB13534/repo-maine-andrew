import { useState, useEffect, RefObject } from "react";

export default function useWatchDataAttribute<T extends HTMLElement>(
  ref: RefObject<T | null>,
  attribute: string,
): string | null {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    setValue(ref.current.getAttribute(attribute) ?? null);
    const observer = new MutationObserver(() => {
      setValue(ref.current?.getAttribute(attribute) ?? null);
    });
    observer.observe(ref.current, {
      attributes: true,
      attributeFilter: [attribute],
    });
    return () => observer.disconnect();
  }, [ref, attribute]);

  return value;
}
