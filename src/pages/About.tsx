import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            About TutorConnect
          </h1>
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-xl mb-6">
              TutorConnect is a platform that bridges the gap between passionate educators and students seeking personalized learning experiences.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Our Mission</h2>
            <p>
              We believe that every student deserves access to quality education tailored to their unique learning style. Our mission is to connect qualified tutors with students and families, creating meaningful educational relationships that foster academic success and personal growth.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Choose TutorConnect?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Carefully vetted and qualified tutors</li>
              <li>Flexible scheduling to fit your lifestyle</li>
              <li>Personalized learning approaches</li>
              <li>Competitive pricing and transparent fees</li>
              <li>Safe and secure platform</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Our Story</h2>
            <p>
              Founded by educators and parents who understand the importance of quality education, TutorConnect was created to make finding the right tutor simple and accessible for everyone.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;