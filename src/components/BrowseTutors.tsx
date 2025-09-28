import { TutorCard } from "@/components/TutorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

// Mock data for tutors
const mockTutors = [
  {
    id: "1",
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616c22777dd?w=400&h=300&fit=crop&crop=face",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    rating: 4.9,
    reviewsCount: 127,
    location: "New York, NY",
    experience: "5 years",
    hourlyRate: 45,
    bio: "Experienced math and science tutor with a passion for helping students overcome challenges and build confidence in STEM subjects."
  },
  {
    id: "2",
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
    subjects: ["English", "Literature", "Writing"],
    rating: 4.8,
    reviewsCount: 89,
    location: "Los Angeles, CA",
    experience: "8 years",
    hourlyRate: 40,
    bio: "English literature specialist with expertise in creative writing and essay composition. Published author and former English teacher."
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
    subjects: ["Spanish", "French", "ESL"],
    rating: 4.9,
    reviewsCount: 156,
    location: "Miami, FL",
    experience: "6 years",
    hourlyRate: 35,
    bio: "Multilingual educator specializing in language acquisition and cultural immersion techniques for effective language learning."
  },
  {
    id: "4",
    name: "David Kim",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
    subjects: ["Computer Science", "Programming", "Math"],
    rating: 4.9,
    reviewsCount: 93,
    location: "Seattle, WA", 
    experience: "4 years",
    hourlyRate: 55,
    bio: "Software engineer turned educator, specializing in programming fundamentals and computer science concepts for all ages."
  },
  {
    id: "5",
    name: "Lisa Thompson",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=300&fit=crop&crop=face",
    subjects: ["Biology", "Chemistry", "Environmental Science"],
    rating: 4.8,
    reviewsCount: 74,
    location: "Chicago, IL",
    experience: "7 years",
    hourlyRate: 42,
    bio: "Biology PhD with extensive research experience, passionate about making complex scientific concepts accessible and engaging."
  },
  {
    id: "6",
    name: "Robert Martinez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
    subjects: ["History", "Social Studies", "Geography"],
    rating: 4.7,
    reviewsCount: 68,
    location: "Austin, TX",
    experience: "9 years",
    hourlyRate: 38,
    bio: "History professor with a knack for bringing the past to life through engaging storytelling and interactive lessons."
  }
];

const popularSubjects = [
  "Mathematics", "English", "Science", "History", "Languages", "Computer Science", "Art", "Music"
];

export function BrowseTutors() {
  return (
    <section id="browse-tutors" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Browse Our Amazing Tutors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover qualified educators who are passionate about helping your child succeed
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search by subject, name, or location..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          
          {/* Popular Subjects */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">Popular subjects:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSubjects.map((subject) => (
                <Badge
                  key={subject}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockTutors.map((tutor) => (
            <TutorCard key={tutor.id} {...tutor} />
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Tutors
          </Button>
        </div>
      </div>
    </section>
  );
}