import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Clock, 
  BookOpen, 
  Calendar, 
  MessageCircle, 
  Award, 
  Users,
  ArrowLeft,
  CheckCircle
} from "lucide-react";

// Mock tutor data - in a real app, this would come from an API
const mockTutorData = {
  "1": {
    id: "1",
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616c22777dd?w=400&h=400&fit=crop&crop=face",
    subjects: ["Mathematics", "Physics", "Chemistry", "Algebra", "Calculus"],
    rating: 4.9,
    reviewsCount: 127,
    location: "New York, NY",
    experience: "5 years",
    hourlyRate: 45,
    bio: "Experienced math and science tutor with a passion for helping students overcome challenges and build confidence in STEM subjects. I hold a Master's degree in Mathematics and have been tutoring for over 5 years.",
    education: ["M.S. Mathematics - Columbia University", "B.S. Physics - NYU"],
    specialties: ["Test Prep", "Homework Help", "Advanced Mathematics"],
    availability: ["Weekdays 3-8 PM", "Weekends 9 AM-5 PM"],
    teachingStyle: "I believe in making complex concepts simple and relatable. My approach focuses on building strong foundations and developing problem-solving skills that students can apply independently.",
    achievements: ["Top 5% Tutor Rating", "500+ Hours Taught", "95% Student Improvement Rate"],
    languages: ["English", "Spanish"],
    verified: true
  }
};

export default function TutorProfile() {
  const { id } = useParams<{ id: string }>();
  const tutor = mockTutorData[id as keyof typeof mockTutorData];

  if (!tutor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tutor not found</h1>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Tutors
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="relative">
              <Avatar className="w-32 h-32 ring-4 ring-primary-foreground/20">
                <AvatarImage src={tutor.image} alt={tutor.name} />
                <AvatarFallback className="text-2xl">{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              {tutor.verified && (
                <div className="absolute -bottom-2 -right-2 bg-success text-success-foreground p-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{tutor.name}</h1>
                {tutor.verified && (
                  <Badge variant="secondary" className="bg-success text-success-foreground">
                    Verified
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-4 mb-4 text-primary-foreground/90">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-current text-accent" />
                  <span className="font-semibold">{tutor.rating}</span>
                  <span>({tutor.reviewsCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{tutor.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{tutor.experience} experience</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {tutor.subjects.map((subject) => (
                  <Badge key={subject} variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                    {subject}
                  </Badge>
                ))}
              </div>
              
              <div className="text-2xl font-bold text-accent">
                ${tutor.hourlyRate}/hour
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  About {tutor.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {tutor.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {tutor.teachingStyle}
                </p>
              </CardContent>
            </Card>
            
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tutor.education.map((degree, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>{degree}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Specialties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tutor.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="border-primary text-primary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message Tutor
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Trial Lesson
                  </Button>
                  
                  <div className="text-center pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Response time: Usually within 2 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {tutor.availability.map((time, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {tutor.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tutor.languages.map((language) => (
                    <Badge key={language} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}