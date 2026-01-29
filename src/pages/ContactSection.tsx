import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FaultyTerminal from "@/components/FaultyTerminal";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Replace with your actual credentials from https://www.emailjs.com/
      const serviceId = 'service_tmcgvlj';
      const templateId = 'template_bu4qqyl';
      const publicKey = 'fju6dCej2a1hDCmUJ';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'enactus.unmc@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="py-20 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <FaultyTerminal
              brightness={0.3}
              tint="#f8ffc2"
              glitchAmount={0.1}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl text-white md:text-5xl font-bold text-foreground mb-8 text-center animate-in fade-in duration-1000">
              CONTACT US
            </h1>
            <p className="text-lg md:text-xl font-semibold bg-[#fcf9e6] px-5 py-5 rounded-3xl text-center text-muted-foreground max-w-3xl mx-auto animate-in fade-in duration-1000 delay-300">
              Get in touch with us to learn more or get involved
            </p>
          </div>
        </section>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
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
                        enactus.unmc@gmail.com
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
                  {submitStatus === 'success' && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                      Message sent successfully!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                      Failed to send message. Please try again or email us directly.
                    </div>
                  )}
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-background"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="bg-background"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="bg-background"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="bg-background min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-foreground font-bold disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
