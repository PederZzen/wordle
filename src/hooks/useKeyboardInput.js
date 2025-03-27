import { useEffect } from "react";

export const useKeyboardInput = (enabled, onKey) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e) => {
      onKey(e.key.toUpperCase());
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, onKey]);
};
