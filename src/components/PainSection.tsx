import { AlertTriangle } from "lucide-react";

const painPoints = [
  {
    title: "Manual Booking Nightmare",
    description: "Manually entering bookings, cancellations, and no-shows almost requires a full-time employee.",
  },
  {
    title: "Spreadsheet Hell",
    description: "Exporting data to Excel just to see revenue or class metrics feels like it's 1995.",
  },
  {
    title: "Frustrated Members",
    description: "Your members struggle with confusing apps and inconsistent booking flows — creating frustration and lost trust.",
  },
];

const PainSection = () => {
  return (
    <section id="pain" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Sound Familiar?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frustrated with messy bookings and lost revenue?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-destructive">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
        
        {/* Belief Deconstruction */}
        <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-subtle border border-border/50">
          <p className="text-muted-foreground italic text-lg leading-relaxed">
            "It's not your fault — other booking software often fails because they don't understand what it's like to actually run a studio. The problem isn't your effort; <strong className="text-foreground">it's the tool you're using.</strong>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
