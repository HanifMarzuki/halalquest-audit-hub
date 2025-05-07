
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";
import VideoCard from "./VideoCard";
import ReadingCard from "./ReadingCard";

const LearningPaths: React.FC = () => {
  const courses = [
    {
      title: "Halal Certification Process",
      description: "Learn the step-by-step process for halal certification",
      level: "Beginner",
      time: "3 hours",
      modules: 5,
      color: "green" as const
    },
    {
      title: "Ingredient Verification",
      description: "Understand how to verify halal ingredients properly",
      level: "Intermediate",
      time: "2 hours",
      modules: 4,
      color: "blue" as const
    },
    {
      title: "Advanced Compliance",
      description: "Master complex compliance scenarios and exceptions",
      level: "Advanced",
      time: "4 hours",
      modules: 6,
      color: "gold" as const
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Learning Paths</h2>
      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="courses" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-halal-green data-[state=active]:shadow">Courses</TabsTrigger>
          <TabsTrigger value="videos" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-halal-blue data-[state=active]:shadow">Videos</TabsTrigger>
          <TabsTrigger value="readings" className="rounded-md data-[state=active]:bg-white data-[state=active]:text-halal-gold data-[state=active]:shadow">Readings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses" className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, i) => (
              <CourseCard 
                key={i}
                title={course.title}
                description={course.description}
                level={course.level}
                time={course.time}
                modules={course.modules}
                color={course.color}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <VideoCard key={i} index={i} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="readings" className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <ReadingCard key={i} index={i} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningPaths;
