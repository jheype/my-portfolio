"use client";
import { useEffect, useState } from "react";
import DarkVeil from "./DarkVeil";

export default function Background() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const mo = new MutationObserver(update);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-100 via-[#f7f0ff] to-[#f7f0ff] dark:hidden" />

      <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-[#0b0618] via-[#0a0714] to-[#090614]" />

      {isDark && (
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.06}
            scanlineIntensity={0.06}
            scanlineFrequency={3.0}
            warpAmount={0.04}
            speed={0.5}
            resolutionScale={1}
          />
        </div>
      )}

      <div className="bg-noise absolute inset-0" />
    </div>
  );
}
