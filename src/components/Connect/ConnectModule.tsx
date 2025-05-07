
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ConnectIcon, CalendarIcon, ChatIcon, ProfileIcon } from "../ui/Icons";
import { Calendar, MessageSquare, Star, User } from "lucide-react";

const experts = [
  {
    id: 1,
    name: "Dr. Ahmad Hassan",
    title: "Halal Food Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.8,
    reviews: 56,
    specialties: ["Food Processing", "Ingredient Analysis"],
    availability: "Available next week",
  },
  {
    id: 2,
    name: "Sarah Abdullah",
    title: "Halal Cosmetics Consultant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.9,
    reviews: 42,
    specialties: ["Cosmetics", "Personal Care"],
    availability: "Available tomorrow",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    title: "Halal Certification Auditor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4.7,
    reviews: 38,
    specialties: ["Audit Preparation", "Compliance"],
    availability: "Available in 3 days",
  },
];

const ConnectModule: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <ConnectIcon size={24} className="text-halal-green" />
          Expert Network
        </h1>
        <p className="text-muted-foreground mt-1">
          Connect with halal industry experts for guidance and consultation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-halal-green/5 border-halal-green/20">
          <CardHeader>
            <div className="w-12 h-12 bg-halal-green/10 rounded-full flex items-center justify-center">
              <CalendarIcon className="text-halal-green" size={24} />
            </div>
            <CardTitle className="mt-2">Book a Consultation</CardTitle>
            <CardDescription>
              Schedule one-on-one time with halal certification experts
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full bg-halal-green hover:bg-halal-green-light">
              View Calendar
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-halal-blue/5 border-halal-blue/20">
          <CardHeader>
            <div className="w-12 h-12 bg-halal-blue/10 rounded-full flex items-center justify-center">
              <ChatIcon className="text-halal-blue" size={24} />
            </div>
            <CardTitle className="mt-2">Ask a Question</CardTitle>
            <CardDescription>
              Post your questions to our community of experts
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Go to Forum
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-halal-gold/5 border-halal-gold/20">
          <CardHeader>
            <div className="w-12 h-12 bg-halal-gold/10 rounded-full flex items-center justify-center">
              <ProfileIcon className="text-halal-gold" size={24} />
            </div>
            <CardTitle className="mt-2">Expert Directory</CardTitle>
            <CardDescription>
              Browse our network of verified halal experts
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" variant="outline">
              View Directory
            </Button>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Featured Experts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <Card key={expert.id} className="overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="p-6 pb-3 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{expert.name}</h3>
                  <p className="text-sm text-muted-foreground">{expert.title}</p>
                  <div className="flex items-center mt-1">
                    <Star size={14} className="text-halal-gold fill-halal-gold" />
                    <span className="text-sm ml-1">{expert.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">
                      ({expert.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="py-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  {expert.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="bg-halal-green/5">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-green-600">
                  {expert.availability}
                </p>
              </CardContent>
              <CardFooter className="mt-auto pt-3 flex gap-2">
                <Button className="flex-1" size="sm">
                  <Calendar size={14} className="mr-1" />
                  Book
                </Button>
                <Button variant="outline" className="flex-1" size="sm">
                  <MessageSquare size={14} className="mr-1" />
                  Message
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-4 flex justify-center">
        <Button variant="outline">View All Experts</Button>
      </div>
    </div>
  );
};

export default ConnectModule;
