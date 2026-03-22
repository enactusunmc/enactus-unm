import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PillNav, { PillNavItem } from "@/components/animations/PillNav";
import logoImage from "/logo.png";
import { useDragon } from "@/context/DragonContext";

const Navigation = () => {
  const location = useLocation();
  const [activeHref, setActiveHref] = useState(location.pathname);
  const { isDragonEnabled, toggleDragon } = useDragon();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setActiveHref(location.pathname);
  }, [location.pathname]);

  const navItems: PillNavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Our Team",
      href: "/team",
    },
    { label: "Life@Enactus", href: "/life" },
    {
      label: "Projects",
      href: "/projects",
    },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="relative">
      {isHomePage && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleDragon}
            className="bg-primary hover:bg-primary/80 text-foreground font-semibold px-3 py-2 rounded-full text-sm transition-colors"
            title={isDragonEnabled ? "Disable" : "Enable"}
          >
            {isDragonEnabled ? "🐻 ON" : "🐻 OFF"}
          </button>
        </div>
      )}
      <PillNav
        logo={logoImage}
        logoAlt="Enactus UNM"
        items={navItems}
        activeHref={activeHref}
        baseColor="#FDB913"
        pillColor="#FFFFFF"
        hoveredPillTextColor="#000000"
        pillTextColor="#000000"
      />
    </div>
  );
};

export default Navigation;
