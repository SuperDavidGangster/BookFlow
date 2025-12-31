import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when BookFlow is ready.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="cta" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              You're on the list!
            </h2>
            <p className="text-lg text-muted-foreground">
              We'll be in touch soon with exclusive early access to BookFlow. Get ready to transform your studio management!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Early Access
            </h2>
            <p className="text-lg text-muted-foreground">
              Join other studio owners in smoothing your booking flow today!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border/50 shadow-medium">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@yourstudio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-foreground mb-2">
                  What's your biggest booking frustration? (Optional)
                </label>
                <Textarea
                  id="feedback"
                  placeholder="Tell us about your current challenges with managing your studio..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  disabled={isSubmitting}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Your feedback helps us build a better product for you.
                </p>
              </div>
              
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Get Early Access
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              No spam, ever. We'll only email you about BookFlow updates.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
