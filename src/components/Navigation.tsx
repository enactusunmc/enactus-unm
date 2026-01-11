import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PillNav, { PillNavItem } from "@/components/PillNav";

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
      children: [
        { label: "Meet the Team", href: "/team" },
        { label: "Leadership", href: "/team#leadership" },
      ]
    },
    { label: "Life@Enactus", href: "/life" },
    {
      label: "Projects",
      href: "/projects",
      children: [
        { label: "NoteBook 2.0", href: "/notebook" },
        { label: "EcoNow 2.0", href: "/econow" },
        { label: "Events", href: "/events" },
        { label: "Sell-on-Notts", href: "/sell-on-notts" },
        { label: "Maison", href: "/maison" },
        { label: "Marketing Master Class", href: "/marketing-master-class" },
      ]
    },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <PillNav
      logo="/logo.png"
      logoAlt="Enactus UNM"
      items={navItems}
      activeHref={activeHref}
      baseColor="#FDB913"
      pillColor="#FFFFFF"
      hoveredPillTextColor="#000000"
      pillTextColor="#000000"
      navScale={1.5}
    />
  );
};

export default Navigation;
