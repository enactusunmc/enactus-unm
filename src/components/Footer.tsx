import { Instagram, Linkedin } from "lucide-react";
import enactusLogo from "@/assets/enactus-logo-full.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <img src={enactusLogo} alt="Enactus UNM" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm text-background/80">
              Student Organisation on Social Enterprise
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Address</h3>
            <p className="text-sm text-background/80">
              University of Nottingham Malaysia<br />
              Jalan Broga, 43500 Semenyih<br />
              Selangor Darul Ehsan, Malaysia
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/enactusnottinghammalaysia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-primary hover:text-foreground rounded-full transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/enactus-unm/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-primary hover:text-foreground rounded-full transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Enactus UNM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
