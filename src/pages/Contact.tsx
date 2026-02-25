import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Missing Fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll respond shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 pl-11 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <>
      <section className="bg-hero py-16 md:py-24">
        <div className="container-main text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+211 911 315 000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">bornwellacademy2023@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-gold-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Juba, South Sudan</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/211913113000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-body font-semibold text-secondary-foreground transition-all hover:brightness-110"
              >
                <MessageSquare className="h-5 w-5" /> Chat on WhatsApp
              </a>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Bornwell Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772072847!2d31.5310504!3d4.8516927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171480e2a6354b29%3A0x6e6e5e54ae19a850!2sJuba%2C%20South%20Sudan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Your Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                      maxLength={100}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className={inputClass}
                      maxLength={255}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Phone (Optional)</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+211 xxx xxx xxx"
                      className={inputClass}
                      maxLength={20}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={4}
                      className={inputClass + " resize-none"}
                      maxLength={1000}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-body font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110"
                >
                  <Send className="h-5 w-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
