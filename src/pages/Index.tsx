import {
  GraduationCap,
  Shield,
  FlaskConical,
  Heart,
  Star,
  ArrowRight,
  Calendar,
  Sparkles,
  Target,
  Eye,
  BookOpen,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  User,
  ClipboardList,
  School,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import studentsImg from "@/assets/students.jpg";
import compoundImg from "@/assets/school-compound.jpg";
import studentSpeakingImg from "@/assets/student-speaking.jpg";
import dormImg from "@/assets/dormitories.jpg";
import founderImg from "@/assets/Founder of BW.jpg";
import principalImg from "@/assets/principal.jpg";
import chairladyImg from "@/assets/chairlady.jpg";
import StudentStats from "@/components/StudentStats";

const highlights = [
  { icon: Shield, title: "Safe Environment", desc: "A secure and nurturing campus for every child.", badge: "Certified Safe" },
  { icon: GraduationCap, title: "Qualified Teachers", desc: "Experienced educators passionate about learning.", badge: "Expert Faculty" },
  { icon: FlaskConical, title: "Science & Computer Labs", desc: "Modern facilities for hands-on learning.", badge: "Modern Facilities" },
  { icon: Heart, title: "Holistic Education", desc: "Developing mind, body, and character.", badge: "Well-Rounded" },
];

const levels = [
  {
    title: "Nursery",
    ages: "Ages 3–5",
    desc: "A warm, playful environment that builds a strong foundation for lifelong learning.",
    badge: "Foundation",
    badgeVariant: "secondary" as const,
  },
  {
    title: "Elementary",
    ages: "Ages 6–12",
    desc: "Rigorous academics combined with creative exploration and character development.",
    badge: "Core Learning",
    badgeVariant: "default" as const,
  },
  {
    title: "Secondary",
    ages: "Ages 13–18",
    desc: "Preparing students for university and career success with excellence and discipline.",
    badge: "University Prep",
    badgeVariant: "outline" as const,
  },
];

const news = [
  {
    date: "Feb 2026",
    title: "Term 1 Examinations Begin",
    desc: "Students prepare for the first round of assessments this academic year.",
    badge: "Upcoming",
    badgeVariant: "secondary" as const,
  },
  {
    date: "Jan 2026",
    title: "New Computer Lab Opened",
    desc: "A state-of-the-art computer lab with 30 workstations is now available.",
    badge: "New",
    badgeVariant: "default" as const,
  },
  {
    date: "Dec 2025",
    title: "Annual Prize Giving Day",
    desc: "Celebrating outstanding academic and extracurricular achievements.",
    badge: "Event",
    badgeVariant: "outline" as const,
  },
];

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Rigorous curriculum that challenges and inspires every student.",
    badge: "Core Value",
  },
  { icon: Users, title: "Community", desc: "A close-knit school family that supports and uplifts each other.", badge: "Core Value" },
  { icon: Award, title: "Discipline", desc: "Building character through self-discipline and responsibility.", badge: "Core Value" },
  { icon: Sparkles, title: "Integrity", desc: "Honesty and strong moral principles in everything we do.", badge: "Core Value" },
];

const leaders = [
  {
    name: "Mr. Deng Athoi",
    title: "Founder & Director",
    bio: "A visionary leader who established Bornwell Academy with the mission of providing quality education to the children of South Sudan. His dedication has transformed the school into one of Juba's most respected institutions.",
    image: founderImg,
    badge: "Founder",
    badgeVariant: "default" as const,
    experience: "15+ Years",
    specialty: "Educational Leadership",
  },
  {
    name: "Board Chairlady",
    title: "Chairlady, Board of Directors",
    bio: "An advocate for quality education and child development, she provides strategic oversight to ensure Bornwell Academy maintains the highest standards of academic and organizational excellence.",
    image: chairladyImg,
    badge: "Board Chair",
    badgeVariant: "secondary" as const,
    experience: "12+ Years",
    specialty: "Strategic Planning",
  },
  {
    name: "School Principal",
    title: "Principal",
    bio: "An experienced educator leading the academic and administrative operations of Bornwell Academy. He is committed to fostering a culture of discipline, excellence, and continuous improvement.",
    image: principalImg,
    badge: "Principal",
    badgeVariant: "default" as const,
    experience: "10+ Years",
    specialty: "Academic Excellence",
  },
];

const Index = () => {
  const { toast } = useToast();
  const [regForm, setRegForm] = useState({
    studentName: "",
    dob: "",
    gender: "",
    level: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
    previousSchool: "",
    notes: "",
  });
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleRegChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setRegForm({ ...regForm, [e.target.name]: e.target.value });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required = ["studentName", "dob", "gender", "level", "parentName", "phone", "email", "address"];
    const missing = required.filter((f) => !regForm[f as keyof typeof regForm].trim());
    if (missing.length > 0) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regForm.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    toast({ title: "Registration Submitted!", description: "Thank you! We will contact you shortly." });
    setRegForm({
      studentName: "",
      dob: "",
      gender: "",
      level: "",
      parentName: "",
      phone: "",
      email: "",
      address: "",
      previousSchool: "",
      notes: "",
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      toast({ title: "Missing Fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll respond shortly." });
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 pl-11 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const labelClass = "mb-1 block font-body text-sm font-medium text-foreground";

  return (
    <>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        <Sparkles
          className="absolute left-[60%] bottom-[20%] h-5 w-5 text-gold opacity-50 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="container-main relative z-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="animate-fade-up">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold">
                <Star className="h-4 w-4" /> For Quality Education & Excellence
              </div>
              <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
                Shaping Future <span className="text-gradient-gold">Leaders</span> at Bornwell Academy
              </h1>
              <p className="mb-8 max-w-lg font-body text-lg text-primary-foreground/80">
                A premier nursery, elementary, and secondary school in Juba, South Sudan — nurturing academic
                excellence, discipline, and holistic development.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#registration"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-body font-semibold text-gold-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                >
                  Register Now <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-body font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {/* Decorative elements */}
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
              <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-secondary/30 blur-2xl" />
              
              {/* Main image container with decorative border */}
              <div className="relative rounded-2xl border-4 border-gold/30 p-1 shadow-2xl">
                <img
                  src={studentsImg}
                  alt="Bornwell Academy students in uniform"
                  className="rounded-xl"
                  loading="lazy"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 rounded-b-xl bg-gradient-to-t from-primary/60 to-transparent p-4">
                  <p className="font-heading text-lg font-bold text-primary-foreground">Excellence in Education</p>
                  <p className="text-sm text-primary-foreground/80">Building tomorrow's leaders today</p>
                </div>
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-card p-4 shadow-lg border border-gold/20 md:-bottom-6 md:-right-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                    <GraduationCap className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-heading text-xl font-bold text-primary">500+</p>
                    <p className="text-xs text-muted-foreground">Students enrolled</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -right-2 top-4 rounded-lg bg-gold px-3 py-2 shadow-lg md:-right-4">
                <p className="text-xs font-bold text-gold-foreground">Est. 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stats */}
      <StudentStats />

      {/* School Levels */}
      <section id="levels" className="section-padding bg-background">
        <div className="container-main">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30">Academic Programs</Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">Our School Levels</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From nursery through secondary, we provide a continuous pathway of excellence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {levels.map((level, i) => (
              <div
                key={level.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <Badge variant={level.badgeVariant}>{level.badge}</Badge>
                </div>
                <h3 className="mb-1 font-heading text-xl font-bold text-foreground">{level.title}</h3>
                <p className="mb-3 text-sm font-medium text-gold">{level.ages}</p>
                <p className="text-sm text-muted-foreground">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-secondary/20 text-secondary hover:bg-secondary/30">Why Choose Us</Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">Why Bornwell Academy?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We provide a complete environment for your child's growth and success.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-2xl bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <h.icon className="h-7 w-7" />
                </div>
                <Badge variant="outline" className="mb-2 text-xs">{h.badge}</Badge>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Image */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img
              src={compoundImg}
              alt="Bornwell Academy school compound"
              className="rounded-2xl shadow-xl"
              loading="lazy"
            />
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Our Facilities</Badge>
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">Our Compound</h2>
              <p className="mb-4 text-muted-foreground">
                Bornwell Academy sits on a spacious and well-maintained campus in Juba, South Sudan. Our facilities
                include modern classrooms, science and computer labs, boarding dormitories, and ample outdoor space for
                sports and recreation.
              </p>
              <p className="text-muted-foreground">
                Each classroom block is named after states of South Sudan, celebrating our national diversity and unity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30">Stay Updated</Badge>
            <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">Latest News & Events</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <article
                key={n.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gold">
                    <Calendar className="h-4 w-4" /> {n.date}
                  </div>
                  <Badge variant={n.badgeVariant}>{n.badge}</Badge>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{n.title}</h3>
                <p className="text-sm text-muted-foreground">{n.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-secondary/20 text-secondary hover:bg-secondary/30">Our Community</Badge>
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Diversity & Community
              </h2>
              <p className="mb-4 text-muted-foreground">
                Bornwell Academy welcomes students from diverse backgrounds, fostering an international and inclusive
                learning environment. Our students grow together, learning respect, collaboration, and mutual
                understanding.
              </p>
              <div className="rounded-xl border border-border bg-muted p-6">
                <p className="italic text-muted-foreground">
                  "Bornwell Academy gave my child a safe and excellent learning environment. The teachers truly care
                  about each student's growth."
                </p>
                <p className="mt-3 font-medium text-foreground">— Parent, Class of 2025</p>
              </div>
            </div>
            <div className="relative">
              <img
                src={studentSpeakingImg}
                alt="Abraham Teme, Eritrean student speaking at Bornwell Academy"
                className="rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -right-3 rounded-xl bg-card p-3 shadow-lg md:-bottom-4 md:-right-4">
                <p className="font-heading text-sm font-bold text-primary">Abraham Teme</p>
                <p className="text-xs text-muted-foreground">Eritrean National</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-hero py-16 md:py-24">
        <div className="container-main text-center">
          <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30">About Us</Badge>
          <h2 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">About Bornwell Academy</h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            A legacy of quality education, discipline, and excellence in Juba, South Sudan.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Our Story</Badge>
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">History & Foundation</h2>
              <p className="mb-4 text-muted-foreground">
                Bornwell Academy was founded with a vision to provide quality education to the children of South Sudan. Located in Juba, the school has grown from a small institution into one of the most respected nursery, elementary, and secondary schools in the region.
              </p>
              <p className="text-muted-foreground">
                Over the years, we have remained committed to academic excellence, discipline, and the holistic development of every child who walks through our doors. Our campus features modern classrooms named after the states of South Sudan, symbolizing our commitment to national unity and diversity.
              </p>
            </div>
            <img src={compoundImg} alt="Bornwell Academy campus" className="rounded-2xl shadow-xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Target className="h-6 w-6" />
                </div>
                <Badge>Our Mission</Badge>
              </div>
              <p className="text-muted-foreground">
                To provide a safe, nurturing, and academically rigorous environment where every child can discover their potential, develop strong character, and become a responsible citizen and future leader.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Eye className="h-6 w-6" />
                </div>
                <Badge variant="secondary">Our Vision</Badge>
              </div>
              <p className="text-muted-foreground">
                To be the leading center of academic excellence in South Sudan, producing well-rounded graduates who contribute positively to their communities and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30">What We Stand For</Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <v.icon className="h-7 w-7" />
                </div>
                <Badge variant="outline" className="mb-2 text-xs">{v.badge}</Badge>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img src={dormImg} alt="Boarding dormitories at Bornwell Academy" className="rounded-2xl shadow-xl" loading="lazy" />
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Why Choose Us</Badge>
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">Why Choose Bornwell?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><Award className="mt-1 h-5 w-5 text-gold" /> Qualified and experienced teaching staff</li>
                <li className="flex items-start gap-3"><Award className="mt-1 h-5 w-5 text-gold" /> Modern science and computer laboratories</li>
                <li className="flex items-start gap-3"><Award className="mt-1 h-5 w-5 text-gold" /> Safe and supportive boarding facilities</li>
                <li className="flex items-start gap-3"><Award className="mt-1 h-5 w-5 text-gold" /> Focus on character development and discipline</li>
                <li className="flex items-start gap-3"><Award className="mt-1 h-5 w-5 text-gold" /> Diverse and inclusive community</li>
                <li className="flex items-start gap-3"><Award className="mt-1 h-5 w-5 text-gold" /> Strong academic track record</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="bg-hero py-16 md:py-24">
        <div className="container-main text-center">
          <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30">Our Team</Badge>
          <h2 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">Our Leadership</h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Meet the dedicated leaders guiding Bornwell Academy's mission of excellence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-3">
            {leaders.map((leader) => (
              <div key={leader.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                {/* Image with overlay badge */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant={leader.badgeVariant} className="mb-2">{leader.badge}</Badge>
                    <h3 className="font-heading text-xl font-bold text-primary-foreground">{leader.name}</h3>
                    <p className="text-sm font-medium text-gold">{leader.title}</p>
                  </div>
                </div>
                {/* Info section */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-gold" />
                      <span className="text-sm font-medium text-foreground">{leader.experience}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">{leader.specialty}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="bg-hero py-16 md:py-24">
        <div className="container-main text-center">
          <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30">Enroll Now</Badge>
          <h2 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">Student Registration</h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Start your child's journey at Bornwell Academy. Fill out the form below.
          </p>
        </div>
      </section>

      {/* Admission guidance */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            {[
              { level: "Nursery", ages: "Ages 3–5", desc: "Birth certificate and immunization records required.", badge: "Ages 3-5" },
              { level: "Elementary", ages: "Ages 6–12", desc: "Previous school report card and birth certificate required.", badge: "Ages 6-12" },
              { level: "Secondary", ages: "Ages 13–18", desc: "Transfer letter, report card, and birth certificate required.", badge: "Ages 13-18" },
            ].map((l) => (
              <div key={l.level} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary">{l.badge}</Badge>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{l.level}</h3>
                <p className="text-sm font-medium text-gold">{l.ages}</p>
                <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-background">
        <div className="container-main max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Registration Form</h2>
            </div>
            <form onSubmit={handleRegSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                {/* Student Name */}
                <div>
                  <label className={labelClass}>Student Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="studentName" value={regForm.studentName} onChange={handleRegChange} placeholder="Full name" className={inputClass} maxLength={100} />
                  </div>
                </div>
                {/* DOB */}
                <div>
                  <label className={labelClass}>Date of Birth *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input type="date" name="dob" value={regForm.dob} onChange={handleRegChange} className={inputClass} />
                  </div>
                </div>
                {/* Gender */}
                <div>
                  <label className={labelClass}>Gender *</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <select name="gender" value={regForm.gender} onChange={handleRegChange} className={inputClass}>
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                {/* Level */}
                <div>
                  <label className={labelClass}>Applying For *</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <select name="level" value={regForm.level} onChange={handleRegChange} className={inputClass}>
                      <option value="">Select level</option>
                      <option value="nursery">Nursery</option>
                      <option value="elementary">Elementary</option>
                      <option value="secondary">Secondary</option>
                    </select>
                  </div>
                </div>
                {/* Parent Name */}
                <div>
                  <label className={labelClass}>Parent/Guardian Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="parentName" value={regForm.parentName} onChange={handleRegChange} placeholder="Parent/Guardian name" className={inputClass} maxLength={100} />
                  </div>
                </div>
                {/* Phone */}
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="phone" value={regForm.phone} onChange={handleRegChange} placeholder="+211 xxx xxx xxx" className={inputClass} maxLength={20} />
                  </div>
                </div>
                {/* Email */}
                <div>
                  <label className={labelClass}>Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input type="email" name="email" value={regForm.email} onChange={handleRegChange} placeholder="email@example.com" className={inputClass} maxLength={255} />
                  </div>
                </div>
                {/* Address */}
                <div>
                  <label className={labelClass}>Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="address" value={regForm.address} onChange={handleRegChange} placeholder="Home address" className={inputClass} maxLength={200} />
                  </div>
                </div>
              </div>

              {/* Previous School */}
              <div>
                <label className={labelClass}>Previous School (Optional)</label>
                <div className="relative">
                  <School className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <input name="previousSchool" value={regForm.previousSchool} onChange={handleRegChange} placeholder="Previous school name" className={inputClass} maxLength={150} />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className={labelClass}>Additional Notes (Optional)</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <textarea name="notes" value={regForm.notes} onChange={handleRegChange} placeholder="Any additional information..." rows={3} className={inputClass + " resize-none"} maxLength={1000} />
                </div>
              </div>

              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-body font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110 md:w-auto">
                <CheckCircle2 className="h-5 w-5" /> Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-hero py-16 md:py-24">
        <div className="container-main text-center">
          <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30">Get in Touch</Badge>
          <h2 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">Contact Us</h2>
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
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Contact Information</Badge>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+211 912 345 678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground"><Mail className="h-5 w-5" /></div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@bornwellacademy.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-gold-foreground"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Juba, South Sudan</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/211912345678"
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
              <div className="mb-6">
                <Badge variant="outline" className="mb-2">Send Message</Badge>
                <h2 className="font-heading text-2xl font-bold text-foreground">Send a Message</h2>
              </div>
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Your Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="name" value={contactForm.name} onChange={handleContactChange} placeholder="Your full name" className={inputClass} maxLength={100} />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} placeholder="email@example.com" className={inputClass} maxLength={255} />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Phone (Optional)</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <input name="phone" value={contactForm.phone} onChange={handleContactChange} placeholder="+211 xxx xxx xxx" className={inputClass} maxLength={20} />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block font-body text-sm font-medium text-foreground">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                    <textarea name="message" value={contactForm.message} onChange={handleContactChange} placeholder="How can we help you?" rows={4} className={inputClass + " resize-none"} maxLength={1000} />
                  </div>
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-body font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110">
                  <Send className="h-5 w-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero py-16">
        <div className="container-main text-center">
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-gold animate-float" />
          <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30">Join Us Today</Badge>
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Join Bornwell Academy?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
            Enroll your child today and give them the gift of quality education, discipline, and holistic development.
          </p>
          <a
            href="#registration"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 font-body font-semibold text-gold-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110"
          >
            Register Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;
