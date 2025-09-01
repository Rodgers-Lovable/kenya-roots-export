import { useEffect } from "react";

export function usePlausible(domain: string) {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("defer", "");
    script.setAttribute("data-domain", domain);
    script.src = "https://plausible.io/js/script.js";

    document.head.appendChild(script);
  }, [domain]);
}
