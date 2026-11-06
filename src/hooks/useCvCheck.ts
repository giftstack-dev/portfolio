import { useEffect, useState } from "react";
import { siteData } from "../data/siteData";

export function useCvCheck() {
  const [cvAvailable, setCvAvailable] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function checkCv() {
      try {
        const response = await fetch(siteData.cvPath, { method: "HEAD" });
        if (isMounted) {
          // If status is 200 or 304, file is available
          setCvAvailable(response.ok);
        }
      } catch {
        if (isMounted) {
          setCvAvailable(false);
        }
      } finally {
        if (isMounted) {
          setIsChecking(false);
        }
      }
    }

    checkCv();

    return () => {
      isMounted = false;
    };
  }, []);

  return { cvAvailable, isChecking, cvPath: siteData.cvPath };
}
