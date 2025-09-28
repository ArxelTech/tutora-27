import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="bg-primary/5 rounded-xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest tips on education and updates about new tutors in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="flex-1 bg-background text-foreground"
              />
              <Button variant="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-background">TutorConnect</span>
            </div>
            <p className="text-background/80">
              Connecting passionate tutors with eager learners to create exceptional educational experiences.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* For Parents */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">For Parents</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/find-tutor" className="hover:text-primary transition-colors">Find a Tutor</Link></li>
              <li><Link to="/subjects" className="hover:text-primary transition-colors">Browse Subjects</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/safety" className="hover:text-primary transition-colors">Safety & Trust</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors">Parent Reviews</Link></li>
            </ul>
          </div>
          
          {/* For Tutors */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">For Tutors</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/become-tutor" className="hover:text-primary transition-colors">Become a Tutor</Link></li>
              <li><Link to="/tutor-resources" className="hover:text-primary transition-colors">Teaching Resources</Link></li>
              <li><Link to="/tutor-support" className="hover:text-primary transition-colors">Support Center</Link></li>
              <li><Link to="/tutor-success" className="hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link to="/earnings" className="hover:text-primary transition-colors">Earnings Guide</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Contact Us</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@tutorconnect.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 TutorConnect. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}