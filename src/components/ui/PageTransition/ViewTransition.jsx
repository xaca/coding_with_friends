import { useEffect } from "react";
import { useLocation } from "react-router";

export function ViewTransitionWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (!mainContent) return;

    // Reset y aplicar animación
    mainContent.style.animation = "none";
    void mainContent.offsetHeight; // Forzar reflow
    
    // Animación más suave
    mainContent.style.animation = "slideIn 0.4s ease-out both";

  }, [location.pathname]);

  return <>{children}</>;
}