import { Sparkles, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const outcomes = [
  {
    icon: Users,
    title: "Classes Always Full",
    description: "Spots never lost, thanks to automated waitlists that work 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Instant Insights",
    description: "Revenue, attendance, and KPIs at your fingertips — no spreadsheets needed.",
  },
  {
    icon: CheckCircle2,
    title: "Happy Members",
    description: "Smooth operations because your booking system just works.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            The Future Is Here
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Imagine a studio that <span className="text-gradient">just works.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6 shadow-soft">
                <outcome.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{outcome.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>
        
        {/* New Paradigm */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-foreground font-medium p-6 rounded-2xl bg-primary/5 border border-primary/20">
            BookFlow replaces frustration with effortless studio management — <span className="text-primary">the smarter, reliable way</span> to run your classes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
