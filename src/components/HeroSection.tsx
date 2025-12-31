import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Keep track of every class and student automatically.",
  "Never lose a spot again with automated waitlists.",
  "See your studio's KPIs instantly without messy spreadsheets.",
  "Reliable platform — no crashes, no downtime.",
];

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            Early Access Now Open
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            No more booking chaos.{" "}
            <span className="text-gradient">Smooth flow</span> for your studio.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            BookFlow helps studio owners like you manage classes, waitlists, and KPIs effortlessly — reliable, simple, and stress-free.
          </p>
          
          {/* Benefits */}
          <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-10 animate-fade-up animation-delay-300">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/80">{benefit}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA */}
          <div className="animate-fade-up animation-delay-400">
            <Button variant="hero" size="xl" onClick={scrollToCTA} className="group">
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Join 100+ studio owners already on the waitlist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
