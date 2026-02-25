import { useState, useEffect, useRef } from "react";
import { GraduationCap, Users, Award, BookOpen, TrendingUp, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { 
    icon: Users, 
    value: 500,
    suffix: "+",
    label: "Students Enrolled",
    description: "Across all levels",
    badge: "Growing",
    badgeVariant: "default" as const,
    trend: "+12% this year"
  },
  { 
    icon: GraduationCap, 
    value: 50,
    suffix: "+",
    label: "Qualified Teachers",
    description: "Dedicated educators",
    badge: "Expert Faculty",
    badgeVariant: "secondary" as const,
    trend: "Certified staff"
  },
  { 
    icon: Award, 
    value: 95,
    suffix: "%",
    label: "Pass Rate",
    description: "Academic excellence",
    badge: "Performance",
    badgeVariant: "secondary" as const,
    trend: "Above national avg"
  },
  { 
    icon: BookOpen, 
    value: 3,
    suffix: "",
    label: "Education Levels",
    description: "Nursery to Secondary",
    badge: "Complete Path",
    badgeVariant: "default" as const,
    trend: "Full curriculum"
  },
];

// Counter component with animation
const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [isVisible, value]);
  
  return (
    <span>
      {count}{suffix}
    </span>
  );
};

const StudentStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-hero py-16 md:py-20">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
      
      <div className="container-main relative z-10">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-gold/20 text-gold hover:bg-gold/30">
            <TrendingUp className="mr-1 h-3 w-3" /> Our Impact
          </Badge>
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
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 text-center transition-all hover:bg-white/20 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top badge */}
              <div className="absolute right-3 top-3">
                <Badge variant={stat.badgeVariant} className="text-xs">
                  {stat.badge}
                </Badge>
              </div>
              
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold transition-transform group-hover:scale-110 group-hover:rotate-6">
                <stat.icon className="h-8 w-8" />
              </div>
              
              {/* Animated value */}
              <p className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </p>
              
              {/* Label */}
              <p className="mt-2 font-body text-lg font-semibold text-gold">
                {stat.label}
              </p>
              
              {/* Description */}
              <p className="mt-1 text-sm text-primary-foreground/70">
                {stat.description}
              </p>
              
              {/* Trend indicator */}
              <div className="mt-4 flex items-center justify-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-primary-foreground/80">
                <Star className="h-3 w-3 text-gold" />
                {stat.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStats;
