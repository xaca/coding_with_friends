import { useEffect } from "react";
import { useLocation } from "react-router";

export function ViewTransitionWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.style.animation = "none";
      mainContent.offsetHeight;
      mainContent.style.animation = "slide-in 0.3s ease-out";
    }
  }, [location.pathname]);

  return <>{children}</>;
}
