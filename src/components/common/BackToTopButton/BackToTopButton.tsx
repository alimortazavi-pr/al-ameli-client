"use client";

import { Button } from "@heroui/react";
import { ArrowUp } from "iconsax-react";
import { useState, useEffect } from "react";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      onPress={scrollToTop}
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-5 end-5 z-50 transition-opacity duration-300`}
      isIconOnly
      color="primary"
    >
      <ArrowUp size={24} />
    </Button>
  );
};
