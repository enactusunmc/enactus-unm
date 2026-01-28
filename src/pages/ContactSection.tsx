import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-foreground mb-4">
                  CONTACT US
                </h2>
                <p className="text-xl text-muted-foreground">
                  Get in touch with us to learn more or get involved
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <Mail className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        enactus@nottingham.edu.my
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <Phone className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        +60 3-8924 8000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <MapPin className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        University of Nottingham Malaysia<br />
                        Jalan Broga, 43500 Semenyih<br />
                        Selangor, Malaysia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-background"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-background"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="bg-background"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="bg-background min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-foreground font-bold"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map Section */}
              <div className="mt-12">
                <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px] border-4 border-black">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5729658934727!2d101.87156647475732!3d2.9423971970394917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdca81a0c2bcb7%3A0xa6c64ca9440e10e6!2sUniversity%20of%20Nottingham%20Malaysia!5e0!3m2!1sen!2smy!4v1738056000000!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="University of Nottingham Malaysia Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactSection;
