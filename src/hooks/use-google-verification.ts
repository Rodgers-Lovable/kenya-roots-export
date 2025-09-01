import { useEffect } from "react";

export function useGoogleAnalytics() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "google-site-verification");
    meta.setAttribute("content", "dC0Tm4sXGBYVb3ThHpouwmB2t3AfRFq-TgQgA6Nn6eE");

    document.head.appendChild(meta);
  }, []);
}
