"use client";

import { Button } from "@heroui/react";
import { useState, useEffect } from "react";

export const BackToTopButton = () => {
  //States
  const [isVisible, setIsVisible] = useState(false);

  //Lifecycle
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //Functions
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      onPress={scrollToTop}
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-5 start-5 z-50 transition-opacity duration-300`}
      isIconOnly
      color="primary"
    >
      <span className="material-symbols-outlined">north</span>
    </Button>
  );
};
