
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Save, X, Star, User, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Expert {
  id: string;
  name: string;
  title: string;
  email: string;
  specialties: string[];
  rating: number;
  reviews: number;
  availability: string;
  bio: string;
  isVerified: boolean;
  isActive: boolean;
}

const ExpertManager: React.FC = () => {
  const { toast } = useToast();
  const [editingExpert, setEditingExpert] = useState<Expert | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data
  const [experts, setExperts] = useState<Expert[]>([
    {
      id: "1",
      name: "Dr. Ahmad Hassan",
      title: "Halal Food Specialist",
      email: "ahmad.hassan@email.com",
      specialties: ["Food Processing", "Ingredient Analysis"],
      rating: 4.8,
      reviews: 56,
      availability: "Available next week",
      bio: "Expert in halal food certification with 15+ years experience",
      isVerified: true,
      isActive: true
    },
    {
      id: "2",
      name: "Sarah Abdullah",
      title: "Halal Cosmetics Consultant",
      email: "sarah.abdullah@email.com",
      specialties: ["Cosmetics", "Personal Care"],
      rating: 4.9,
      reviews: 42,
      availability: "Available tomorrow",
      bio: "Specialized in halal cosmetics and personal care products",
      isVerified: true,
      isActive: true
    },
    {
      id: "3",
      name: "Mohammed Ali",
      title: "Halal Certification Auditor",
      email: "mohammed.ali@email.com",
      specialties: ["Audit Preparation", "Compliance"],
      rating: 4.7,
      reviews: 38,
      availability: "Available in 3 days",
      bio: "Certified auditor with expertise in halal compliance standards",
      isVerified: false,
      isActive: true
    }
  ]);

  const handleSave = (expert: Partial<Expert>) => {
    if (editingExpert) {
      setExperts(prev => prev.map(e => e.id === editingExpert.id ? { ...e, ...expert } : e));
      toast({
        title: "Expert Updated",
        description: "Expert profile has been successfully updated."
      });
    } else {
      const newExpert: Expert = {
        id: Date.now().toString(),
        name: expert.name || "",
        title: expert.title || "",
        email: expert.email || "",
        specialties: expert.specialties || [],
        rating: expert.rating || 0,
        reviews: expert.reviews || 0,
        availability: expert.availability || "",
        bio: expert.bio || "",
        isVerified: expert.isVerified || false,
        isActive: expert.isActive || true
      };
      setExperts(prev => [...prev, newExpert]);
      toast({
        title: "Expert Added",
        description: "New expert has been successfully added."
      });
    }
    setEditingExpert(null);
    setIsDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    setExperts(prev => prev.filter(e => e.id !== id));
    toast({
      title: "Expert Removed",
      description: "Expert has been removed from the network."
    });
  };

  const toggleVerification = (id: string) => {
    setExperts(prev => prev.map(e => 
      e.id === id ? { ...e, isVerified: !e.isVerified } : e
    ));
    toast({
      title: "Verification Updated",
      description: "Expert verification status has been changed."
    });
  };

  const toggleActive = (id: string) => {
    setExperts(prev => prev.map(e => 
      e.id === id ? { ...e, isActive: !e.isActive } : e
    ));
    toast({
      title: "Status Updated",
      description: "Expert active status has been changed."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Expert Network Management</h3>
          <p className="text-sm text-muted-foreground">
            Manage expert profiles and verification status
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => setEditingExpert(null)}>
              <Plus size={16} />
              Add Expert
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <ExpertForm 
              expert={editingExpert} 
              onSave={handleSave} 
              onCancel={() => setIsDialogOpen(false)} 
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {experts.map((expert) => (
          <Card key={expert.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-halal-blue/10 rounded-full flex items-center justify-center">
                    <User className="text-halal-blue" size={24} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-base">{expert.name}</CardTitle>
                      {expert.isVerified && (
                        <CheckCircle className="text-halal-green" size={16} />
                      )}
                    </div>
                    <CardDescription>{expert.title}</CardDescription>
                    <p className="text-sm text-muted-foreground">{expert.email}</p>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-halal-gold fill-halal-gold" />
                      <span className="text-sm">{expert.rating}</span>
                      <span className="text-xs text-muted-foreground">({expert.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant={expert.isVerified ? "default" : "outline"}
                    onClick={() => toggleVerification(expert.id)}
                    className="text-xs"
                  >
                    {expert.isVerified ? "Verified" : "Verify"}
                  </Button>
                  <Button 
                    size="sm" 
                    variant={expert.isActive ? "default" : "outline"}
                    onClick={() => toggleActive(expert.id)}
                    className="text-xs"
                  >
                    {expert.isActive ? "Active" : "Inactive"}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => {
                      setEditingExpert(expert);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Edit size={14} />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleDelete(expert.id)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm">{expert.bio}</p>
                <p className="text-sm text-green-600">{expert.availability}</p>
                <div className="flex flex-wrap gap-2">
                  {expert.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="bg-halal-green/5">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

interface ExpertFormProps {
  expert: Expert | null;
  onSave: (expert: Partial<Expert>) => void;
  onCancel: () => void;
}

const ExpertForm: React.FC<ExpertFormProps> = ({ expert, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: expert?.name || "",
    title: expert?.title || "",
    email: expert?.email || "",
    specialties: expert?.specialties.join(", ") || "",
    rating: expert?.rating || 0,
    reviews: expert?.reviews || 0,
    availability: expert?.availability || "",
    bio: expert?.bio || "",
    isVerified: expert?.isVerified || false,
    isActive: expert?.isActive || true
  });

  const handleSubmit = () => {
    const expertData = {
      ...formData,
      specialties: formData.specialties.split(",").map(s => s.trim()).filter(s => s)
    };
    onSave(expertData);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>{expert ? "Edit" : "Add"} Expert</DialogTitle>
        <DialogDescription>
          {expert ? "Update the expert profile details." : "Add a new expert to the network."}
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-4 max-h-96 overflow-y-auto">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Expert name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Professional title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="expert@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialties">Specialties (comma separated)</Label>
          <Input
            id="specialties"
            value={formData.specialties}
            onChange={(e) => setFormData(prev => ({ ...prev, specialties: e.target.value }))}
            placeholder="Food Processing, Ingredient Analysis"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rating">Rating</Label>
            <Input
              id="rating"
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) || 0 }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reviews">Reviews Count</Label>
            <Input
              id="reviews"
              type="number"
              min="0"
              value={formData.reviews}
              onChange={(e) => setFormData(prev => ({ ...prev, reviews: parseInt(e.target.value) || 0 }))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="availability">Availability</Label>
          <Input
            id="availability"
            value={formData.availability}
            onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
            placeholder="Available next week"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
            placeholder="Expert biography and experience"
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          <X size={16} className="mr-1" />
          Cancel
        </Button>
        <Button onClick={handleSubmit}>
          <Save size={16} className="mr-1" />
          Save Expert
        </Button>
      </div>
    </>
  );
};

export default ExpertManager;
