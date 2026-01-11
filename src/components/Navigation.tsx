import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PillNav, { PillNavItem } from "@/components/PillNav";
import logoImage from "/logo.png";

const Navigation = () => {
  const location = useLocation();
  const [activeHref, setActiveHref] = useState(location.pathname);

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
  );
};

export default Navigation;
