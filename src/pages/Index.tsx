import { Link } from "react-router-dom";
import {
  GraduationCap,
  Shield,
  FlaskConical,
  Monitor,
  Heart,
  Star,
  ArrowRight,
  Calendar,
  Sparkles,
} from "lucide-react";
import studentsImg from "@/assets/students.jpg";
import compoundImg from "@/assets/school-compound.jpg";
import studentSpeakingImg from "@/assets/student-speaking.jpg";
import StudentStats from "@/components/StudentStats";

const highlights = [
  { icon: Shield, title: "Safe Environment", desc: "A secure and nurturing campus for every child." },
  { icon: GraduationCap, title: "Qualified Teachers", desc: "Experienced educators passionate about learning." },
  { icon: FlaskConical, title: "Science & Computer Labs", desc: "Modern facilities for hands-on learning." },
  { icon: Heart, title: "Holistic Education", desc: "Developing mind, body, and character." },
];

const levels = [
  {
    title: "Nursery",
    ages: "Ages 3–5",
    desc: "A warm, playful environment that builds a strong foundation for lifelong learning.",
  },
  {
    title: "Elementary",
    ages: "Ages 6–12",
    desc: "Rigorous academics combined with creative exploration and character development.",
  },
  {
    title: "Secondary",
    ages: "Ages 13–18",
    desc: "Preparing students for university and career success with excellence and discipline.",
  },
];

const news = [
  {
    date: "Feb 2026",
    title: "Term 1 Examinations Begin",
    desc: "Students prepare for the first round of assessments this academic year.",
  },
  {
    date: "Jan 2026",
    title: "New Computer Lab Opened",
    desc: "A state-of-the-art computer lab with 30 workstations is now available.",
  },
  {
    date: "Dec 2025",
    title: "Annual Prize Giving Day",
    desc: "Celebrating outstanding academic and extracurricular achievements.",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        {/* Sparkle decorations */}
        <Sparkles className="absolute left-[10%] top-[20%] h-6 w-6 text-gold opacity-60 animate-float" />
        <Sparkles className="absolute right-[15%] top-[30%] h-4 w-4 text-gold opacity-40 sparkle" />
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
                <Link
                  to="/registration"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-body font-semibold text-gold-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                >
                  Register Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-body font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={studentsImg}
                alt="Bornwell Academy students in uniform"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg md:-bottom-6 md:-left-6">
                <p className="font-heading text-2xl font-bold text-primary">500+</p>
                <p className="text-xs text-muted-foreground">Students enrolled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stats */}
      <StudentStats />

      {/* School Levels */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="mb-12 text-center">
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
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <GraduationCap className="h-6 w-6" />
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
              <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">Our Campus</h2>
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
            <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">Latest News & Events</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {news.map((n) => (
              <article
                key={n.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2 text-sm text-gold">
                  <Calendar className="h-4 w-4" /> {n.date}
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
            <img
              src={studentSpeakingImg}
              alt="Student speaking at Bornwell Academy"
              className="rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero py-16">
        <div className="container-main text-center">
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-gold animate-float" />
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Join Bornwell Academy?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
            Enroll your child today and give them the gift of quality education, discipline, and holistic development.
          </p>
          <Link
            to="/registration"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 font-body font-semibold text-gold-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110"
          >
            Register Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
