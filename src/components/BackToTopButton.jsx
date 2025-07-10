import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button on scroll
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

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        data-aos="fade-up"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-zinc-800 dark:text-zinc-800 dark:bg-gray-50  text-white p-4 rounded-2xl shadow-lg dark:hover:bg-white hover:bg-zinc-900 transition duration-1000 z-50"
      >
        <span className="material-symbols-rounded">arrow_warm_up</span>
      </button>
    )
  );
}
