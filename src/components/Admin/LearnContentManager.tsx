
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Save, X, Video, FileText, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LearningContent {
  id: string;
  title: string;
  description: string;
  type: "video" | "article" | "course";
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  author: string;
  isPublished: boolean;
}

const LearnContentManager: React.FC = () => {
  const { toast } = useToast();
  const [editingContent, setEditingContent] = useState<LearningContent | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data
  const [learningContent, setLearningContent] = useState<LearningContent[]>([
    {
      id: "1",
      title: "Introduction to Halal Certification",
      description: "Learn the basics of halal certification process",
      type: "video",
      category: "fundamentals",
      difficulty: "beginner",
      duration: "15 min",
      author: "Dr. Ahmad Hassan",
      isPublished: true
    },
    {
      id: "2",
      title: "Halal Ingredient Analysis",
      description: "Deep dive into ingredient verification methods",
      type: "course",
      category: "technical",
      difficulty: "intermediate",
      duration: "2 hours",
      author: "Sarah Abdullah",
      isPublished: true
    },
    {
      id: "3",
      title: "Common Halal Certification Mistakes",
      description: "Avoid these common pitfalls in the certification process",
      type: "article",
      category: "best-practices",
      difficulty: "intermediate",
      duration: "10 min",
      author: "Mohammed Ali",
      isPublished: false
    }
  ]);

  const handleSave = (content: Partial<LearningContent>) => {
    if (editingContent) {
      setLearningContent(prev => prev.map(c => c.id === editingContent.id ? { ...c, ...content } : c));
      toast({
        title: "Content Updated",
        description: "Learning content has been successfully updated."
      });
    } else {
      const newContent: LearningContent = {
        id: Date.now().toString(),
        title: content.title || "",
        description: content.description || "",
        type: content.type || "article",
        category: content.category || "fundamentals",
        difficulty: content.difficulty || "beginner",
        duration: content.duration || "",
        author: content.author || "",
        isPublished: content.isPublished || false
      };
      setLearningContent(prev => [...prev, newContent]);
      toast({
        title: "Content Added",
        description: "New learning content has been successfully added."
      });
    }
    setEditingContent(null);
    setIsDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    setLearningContent(prev => prev.filter(c => c.id !== id));
    toast({
      title: "Content Deleted",
      description: "Learning content has been removed."
    });
  };

  const togglePublish = (id: string) => {
    setLearningContent(prev => prev.map(c => 
      c.id === id ? { ...c, isPublished: !c.isPublished } : c
    ));
    toast({
      title: "Status Updated",
      description: "Content publication status has been changed."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Learning Content Management</h3>
          <p className="text-sm text-muted-foreground">
            Manage courses, videos, and educational materials
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => setEditingContent(null)}>
              <Plus size={16} />
              Add Content
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <ContentForm 
              content={editingContent} 
              onSave={handleSave} 
              onCancel={() => setIsDialogOpen(false)} 
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {learningContent.map((content) => (
          <Card key={content.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {content.type === 'video' && <Video size={16} className="text-halal-blue" />}
                    {content.type === 'article' && <FileText size={16} className="text-halal-green" />}
                    {content.type === 'course' && <Clock size={16} className="text-halal-gold" />}
                    <CardTitle className="text-base">{content.title}</CardTitle>
                  </div>
                  <CardDescription>{content.description}</CardDescription>
                  <p className="text-sm text-muted-foreground">By {content.author}</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant={content.isPublished ? "default" : "outline"}
                    onClick={() => togglePublish(content.id)}
                  >
                    {content.isPublished ? "Published" : "Draft"}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => {
                      setEditingContent(content);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Edit size={14} />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleDelete(content.id)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="capitalize">{content.type}</Badge>
                <Badge variant="outline">{content.category}</Badge>
                <Badge 
                  className={`${
                    content.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                    content.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}
                >
                  {content.difficulty}
                </Badge>
                <Badge variant="outline">{content.duration}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

interface ContentFormProps {
  content: LearningContent | null;
  onSave: (content: Partial<LearningContent>) => void;
  onCancel: () => void;
}

const ContentForm: React.FC<ContentFormProps> = ({ content, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: content?.title || "",
    description: content?.description || "",
    type: content?.type || "article" as "video" | "article" | "course",
    category: content?.category || "fundamentals",
    difficulty: content?.difficulty || "beginner" as "beginner" | "intermediate" | "advanced",
    duration: content?.duration || "",
    author: content?.author || "",
    isPublished: content?.isPublished || false
  });

  return (
    <>
      <DialogHeader>
        <DialogTitle>{content ? "Edit" : "Add"} Learning Content</DialogTitle>
        <DialogDescription>
          {content ? "Update the learning content details." : "Create new educational material."}
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter content title"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Enter content description"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value as "video" | "article" | "course" }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="article">Article</SelectItem>
                <SelectItem value="course">Course</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fundamentals">Fundamentals</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="best-practices">Best Practices</SelectItem>
                <SelectItem value="compliance">Compliance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select value={formData.difficulty} onValueChange={(value) => setFormData(prev => ({ ...prev, difficulty: value as "beginner" | "intermediate" | "advanced" }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
              placeholder="e.g., 15 min, 2 hours"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            value={formData.author}
            onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
            placeholder="Content author name"
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          <X size={16} className="mr-1" />
          Cancel
        </Button>
        <Button onClick={() => onSave(formData)}>
          <Save size={16} className="mr-1" />
          Save Content
        </Button>
      </div>
    </>
  );
};

export default LearnContentManager;
