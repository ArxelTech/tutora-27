import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface TutorCardProps {
  id: string;
  name: string;
  image: string;
  subjects: string[];
  rating: number;
  reviewsCount: number;
  location: string;
  experience: string;
  hourlyRate: number;
  bio: string;
}

export function TutorCard({
  id,
  name,
  image,
  subjects,
  rating,
  reviewsCount,
  location,
  experience,
  hourlyRate,
  bio,
}: TutorCardProps) {
  return (
    <Card className="group hover:shadow-card transform hover:-translate-y-1 transition-smooth overflow-hidden bg-gradient-card">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={image}
            alt={`${name} - Tutor`}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              ${hourlyRate}/hr
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewsCount})</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{experience} experience</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>{subjects.length} subjects</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {subjects.slice(0, 3).map((subject) => (
            <Badge key={subject} variant="secondary" className="text-xs">
              {subject}
            </Badge>
          ))}
          {subjects.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{subjects.length - 3} more
            </Badge>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">{bio}</p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to={`/tutor/${id}`} className="w-full">
          <Button variant="default" className="w-full">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}