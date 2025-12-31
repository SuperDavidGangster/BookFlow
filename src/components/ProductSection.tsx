import { ClipboardList, Zap, BarChart3, Quote } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Sign up and list your classes",
    description: "Get started in minutes with an intuitive setup process.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Automate everything",
    description: "Bookings, waitlists, and notifications run on autopilot.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Track and grow",
    description: "Watch your KPIs and grow your studio without manual work.",
  },
];

const ProductSection = () => {
  return (
    <section id="product" className="py-20 md:py-28 bg-card">
      <div className="container">
        {/* Product intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Introducing <span className="text-gradient">BookFlow</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The all-in-one studio booking and management platform designed to solve the pains other software ignores.
          </p>
        </div>
        
        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Step number */}
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-muted/30">
                {item.step}
              </span>
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 shadow-soft">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Founder Message */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-subtle border border-border/50">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />
            <div className="pl-8">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                "I built BookFlow after seeing countless studio owners struggle with broken software. My mission is simple: <strong className="text-primary">make studio management effortless</strong> so you can focus on your members, not spreadsheets."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg">
                  A
                </div>
                <div>
                  <p className="font-semibold text-foreground">Alex Chen</p>
                  <p className="text-sm text-muted-foreground">Founder, BookFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
