import founderImg from "@/assets/Founder of BW.jpg";
import principalImg from "@/assets/principal.jpg";
import chairladyImg from "@/assets/chairlady.jpg";

const leaders = [
  {
    name: "Mr. Deng Athoi",
    title: "Founder & Director",
    bio: "A visionary leader who established Bornwell Academy with the mission of providing quality education to the children of South Sudan. His dedication has transformed the school into one of Juba's most respected institutions.",
    image: founderImg,
  },
  {
    name: "Board Chairlady",
    title: "Chairlady, Board of Directors",
    bio: "An advocate for quality education and child development, she provides strategic oversight to ensure Bornwell Academy maintains the highest standards of academic and organizational excellence.",
    image: chairladyImg,
  },
  {
    name: "School Principal",
    title: "Principal",
    bio: "An experienced educator leading the academic and administrative operations of Bornwell Academy. He is committed to fostering a culture of discipline, excellence, and continuous improvement.",
    image: principalImg,
  },
];

const Leadership = () => (
  <>
    <section className="bg-hero py-16 md:py-24">
      <div className="container-main text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">Our Leadership</h1>
        <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
          Meet the dedicated leaders guiding Bornwell Academy's mission of excellence.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid gap-8 md:grid-cols-3">
          {leaders.map((leader) => (
            <div key={leader.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">{leader.name}</h3>
                <p className="mb-3 text-sm font-medium text-white">{leader.title}</p>
                <p className="text-sm text-muted-foreground">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Leadership;
