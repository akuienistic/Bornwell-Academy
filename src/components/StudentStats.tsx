import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

const stats = [
  { 
    icon: Users, 
    value: "500+", 
    label: "Students Enrolled",
    description: "Across all levels"
  },
  { 
    icon: GraduationCap, 
    value: "50+", 
    label: "Qualified Teachers",
    description: "Dedicated educators"
  },
  { 
    icon: Award, 
    value: "95%", 
    label: "Pass Rate",
    description: "Academic excellence"
  },
  { 
    icon: BookOpen, 
    value: "3", 
    label: "Education Levels",
    description: "Nursery to Secondary"
  },
];

const StudentStats = () => {
  return (
    <section className="bg-hero py-16">
      <div className="container-main">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/80">
            Building a strong foundation for the future leaders of South Sudan
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center transition-all hover:bg-white/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold transition-transform group-hover:scale-110">
                <stat.icon className="h-8 w-8" />
              </div>
              <p className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-lg font-semibold text-gold">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStats;
