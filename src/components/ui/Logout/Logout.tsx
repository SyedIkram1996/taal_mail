"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const onAuthChanged = (e: any) => {
      if (e.key === "loggedOut" && e.newValue === "true") {
        localStorage.removeItem("loggedOut");
        window.location.reload();
      } else if (e.key === "loggedIn" && e.newValue === "true") {
        localStorage.removeItem("loggedIn");
        window.location.reload();
      }
    };

    window.addEventListener("storage", onAuthChanged);

    return () => {
      window.removeEventListener("storage", onAuthChanged);
    };
  }, [router]);

  return null;
};

export default Logout;
