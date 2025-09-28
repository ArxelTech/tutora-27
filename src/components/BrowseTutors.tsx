import { TutorCard } from "@/components/TutorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

type Tutor = {
  id: string;
  name: string;
  image: string | null;
  subjects: string[];
  rating: number;
  reviewsCount: number;
  location: string;
  experience: string;
  hourlyRate: number;
  bio: string | null;
};

const TutorCardSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-48 w-full rounded-lg" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

const popularSubjects = [
  "Mathematics", "English", "Science", "History", "Languages", "Computer Science", "Art", "Music"
];

export function BrowseTutors() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [filteredTutors, setFilteredTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchTutors();
  }, []);

  useEffect(() => {
    filterTutors();
  }, [tutors, searchQuery]);

  const fetchTutors = async () => {
    try {
      const { data: coaches, error } = await supabase
        .from('Coach')
        .select('*')
        .eq('is_approved', true);

      if (error) {
        console.error('Error fetching tutors:', error);
        return;
      }

      const formattedTutors: Tutor[] = coaches?.map(coach => ({
        id: coach.id,
        name: coach.name,
        image: coach.profile_image,
        subjects: Array.isArray(coach.subjects) ? (coach.subjects as string[]) : [],
        rating: coach.rating || 0,
        reviewsCount: 0, // This field doesn't exist in Coach table
        location: coach.location || '',
        experience: coach.years_of_experience ? `${coach.years_of_experience} years` : '0 years',
        hourlyRate: coach.fee || 0,
        bio: coach.about
      })) || [];

      setTutors(formattedTutors);
    } catch (error) {
      console.error('Error fetching tutors:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterTutors = () => {
    if (!searchQuery.trim()) {
      setFilteredTutors(tutors);
      return;
    }

    const filtered = tutors.filter(tutor =>
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some(subject => 
        subject.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      tutor.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredTutors(filtered);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

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
                value={searchQuery}
                onChange={handleSearchChange}
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
                  onClick={() => setSearchQuery(subject)}
                >
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <TutorCardSkeleton key={index} />
            ))
          ) : filteredTutors.length > 0 ? (
            filteredTutors.map((tutor) => (
              <TutorCard key={tutor.id} {...tutor} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">
                {searchQuery ? 'No tutors found matching your search.' : 'No tutors available at the moment.'}
              </p>
            </div>
          )}
        </div>
        
        {/* Load More */}
        {!loading && filteredTutors.length > 0 && (
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Tutors
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}