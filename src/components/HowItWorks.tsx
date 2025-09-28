import { Search, MessageCircle, Calendar, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Tutor",
    description: "Browse through our verified tutors and filter by subject, location, and availability."
  },
  {
    icon: MessageCircle,
    title: "Connect & Chat",
    description: "Message tutors directly to discuss your child's needs and learning goals."
  },
  {
    icon: Calendar,
    title: "Schedule Lessons",
    description: "Book convenient lesson times that work for your family's schedule."
  },
  {
    icon: Star,
    title: "Learn & Grow",
    description: "Watch your child thrive with personalized attention and expert guidance."
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these easy steps to find the perfect tutor for your child.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-soft">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}