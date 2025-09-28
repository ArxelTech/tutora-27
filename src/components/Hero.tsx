import { Button } from "@/components/ui/button";
import { Search, Users, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tutoring.jpg";

export function Hero() {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Find the Perfect Tutor for Your Child
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                Connect with qualified, experienced tutors who make learning engaging and effective. 
                Give your child the personalized attention they deserve.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => {
                  document.getElementById('browse-tutors')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Find a Tutor
              </Button>
              <Link to="/become-tutor">
                <Button variant="outline" size="xl" className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                  Become a Tutor
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-primary-foreground/80">Verified Tutors</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-primary-foreground/80">Subjects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm text-primary-foreground/80">Average Rating</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={heroImage}
                alt="Tutor helping student with homework"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-card">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs">Success Rate</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground p-4 rounded-xl shadow-card">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}