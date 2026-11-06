import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // 1. Mark html as js-ready to activate reveal styles
    document.documentElement.classList.add("js-ready");

    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    if (!("IntersectionObserver" in window)) {
      // Fallback for browsers without IntersectionObserver
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => {
      // Check if already in viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-revealed");
      } else {
        observer.observe(el);
      }
    });

    // 1500ms safety timeout that reveals everything still hidden
    const safetyTimeout = setTimeout(() => {
      elements.forEach((el) => el.classList.add("is-revealed"));
    }, 1500);

    return () => {
      clearTimeout(safetyTimeout);
      observer.disconnect();
    };
  }, []);
}
