import { Target, Eye, BookOpen, Users, Award, Sparkles } from "lucide-react";
import compoundImg from "@/assets/school-compound.jpg";
import dormImg from "@/assets/dormitories.jpg";

const values = [
  { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum that challenges and inspires every student." },
  { icon: Users, title: "Community", desc: "A close-knit school family that supports and uplifts each other." },
  { icon: Award, title: "Discipline", desc: "Building character through self-discipline and responsibility." },
  { icon: Sparkles, title: "Integrity", desc: "Honesty and strong moral principles in everything we do." },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="bg-hero py-16 md:py-24">
      <div className="container-main text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">About Bornwell Academy</h1>
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
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">Our Story</h2>
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
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-heading text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide a safe, nurturing, and academically rigorous environment where every child can discover their potential, develop strong character, and become a responsible citizen and future leader.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-heading text-2xl font-bold text-foreground">Our Vision</h3>
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
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold">
                <v.icon className="h-7 w-7" />
              </div>
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
  </>
);

export default About;
