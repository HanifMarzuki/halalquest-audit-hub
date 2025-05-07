
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LearnIcon, VideoIcon, DocumentIcon } from "../ui/Icons";
import { Progress } from "@/components/ui/progress";
import { Award, Calendar, Check, CheckCircle, Clock, BookOpen, Star, Flame } from "lucide-react";

const LearnModule: React.FC = () => {
  const [streakCount, setStreakCount] = useState(5);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <LearnIcon size={24} className="text-halal-green" />
            Learn
          </h1>
          <p className="text-muted-foreground mt-1">
            Master halal standards through interactive lessons
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-halal-green/10 rounded-full p-2 mb-1">
              <Flame size={20} className="text-halal-green" />
            </div>
            <span className="text-xs font-bold">{streakCount} days</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-halal-gold/10 rounded-full p-2 mb-1">
              <Award size={20} className="text-halal-gold" />
            </div>
            <span className="text-xs font-bold">3 badges</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-2 border-halal-green/30 overflow-hidden">
            <CardHeader className="bg-halal-green/5 border-b border-halal-green/20">
              <CardTitle className="flex items-center justify-between">
                <span>Continue Your Learning Journey</span>
                <Badge variant="outline" className="bg-halal-green text-white border-none">
                  Daily Streak: {streakCount} 🔥
                </Badge>
              </CardTitle>
              <CardDescription>Pick up where you left off</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-halal-green text-white p-2 rounded-full">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Halal Fundamentals</h3>
                      <p className="text-sm text-muted-foreground">Module 3 of 5</p>
                    </div>
                  </div>
                  <Button className="bg-halal-green hover:bg-halal-green-light">
                    Continue
                  </Button>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium">Progress: 60%</span>
                    <span className="text-xs font-medium">3/5 Modules</span>
                  </div>
                  <Progress value={60} className="h-3 bg-gray-100" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-halal-blue text-white p-2 rounded-full">
                      <DocumentIcon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">MS1500:2009 Standards</h3>
                      <p className="text-sm text-muted-foreground">Section 1 of 4</p>
                    </div>
                  </div>
                  <Button variant="outline" className="border-halal-blue text-halal-blue hover:bg-halal-blue hover:text-white">
                    Continue
                  </Button>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium">Progress: 25%</span>
                    <span className="text-xs font-medium">1/4 Sections</span>
                  </div>
                  <Progress value={25} className="h-3 bg-gray-100" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Daily Goals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "Complete a lesson", done: true },
                { name: "Complete a quiz", done: false },
                { name: "Review a standard", done: false },
              ].map((goal, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 p-3 rounded-lg border ${goal.done ? 'bg-halal-green/5 border-halal-green/30' : 'bg-gray-50 border-gray-200'}`}
                >
                  <div className={`rounded-full p-1 ${goal.done ? 'bg-halal-green text-white' : 'bg-gray-200'}`}>
                    {goal.done ? <CheckCircle size={20} /> : <Check size={20} className="text-gray-400" />}
                  </div>
                  <span className={goal.done ? 'text-halal-green font-medium' : ''}>{goal.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star size={20} className="text-halal-gold" />
              Your Stats
            </CardTitle>
            <CardDescription>Track your progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-sm font-medium">Courses Completed</span>
              <span className="text-xl font-bold text-halal-green">2</span>
            </div>
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-sm font-medium">Certificates</span>
              <span className="text-xl font-bold text-halal-green">1</span>
            </div>
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-sm font-medium">Learning Streak</span>
              <div className="flex items-center">
                <Flame size={16} className="text-halal-gold mr-1" />
                <span className="text-xl font-bold text-halal-gold">{streakCount} days</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Quiz Success</span>
              <span className="text-xl font-bold text-halal-green">78%</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Stats</Button>
          </CardFooter>
        </Card>
      </div>

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
              {[
                {
                  title: "Halal Certification Process",
                  description: "Learn the step-by-step process for halal certification",
                  level: "Beginner",
                  time: "3 hours",
                  modules: 5,
                  color: "green"
                },
                {
                  title: "Ingredient Verification",
                  description: "Understand how to verify halal ingredients properly",
                  level: "Intermediate",
                  time: "2 hours",
                  modules: 4,
                  color: "blue"
                },
                {
                  title: "Advanced Compliance",
                  description: "Master complex compliance scenarios and exceptions",
                  level: "Advanced",
                  time: "4 hours",
                  modules: 6,
                  color: "gold"
                }
              ].map((course, i) => (
                <Card key={i} className="overflow-hidden border-t-4 hover:shadow-lg transition-shadow" 
                  style={{ borderTopColor: course.color === "green" ? "#0A6E46" : course.color === "blue" ? "#2C3E50" : "#D4AF37" }}>
                  <CardHeader className="pb-2">
                    <div className={`h-40 bg-${course.color === "green" ? "halal-green" : course.color === "blue" ? "halal-blue" : "halal-gold"}/10 rounded-md flex items-center justify-center`}>
                      <BookOpen size={36} className={`text-${course.color === "green" ? "halal-green" : course.color === "blue" ? "halal-blue" : "halal-gold"}`} />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge variant="outline" className={`bg-${course.color === "green" ? "halal-green" : course.color === "blue" ? "halal-blue" : "halal-gold"}/10 text-${course.color === "green" ? "halal-green" : course.color === "blue" ? "halal-blue" : "halal-gold"}`}>
                        {course.level}
                      </Badge>
                    </div>
                    <CardDescription>
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{course.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        <span>{course.modules} modules</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${course.color === "green" ? "bg-halal-green hover:bg-halal-green-light" : course.color === "blue" ? "bg-halal-blue hover:bg-halal-blue-light" : "bg-halal-gold hover:bg-halal-gold-light"}`}>
                      Start Course
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="space-y-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden border-t-4 border-t-halal-blue hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="h-40 bg-halal-blue/10 rounded-md flex items-center justify-center">
                      <VideoIcon size={36} className="text-halal-blue" />
                    </div>
                    <CardTitle className="mt-3">Halal Production Requirements</CardTitle>
                    <CardDescription>
                      Video guide to halal production requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={14} />
                      <span>25 minutes</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-halal-blue hover:bg-halal-blue-light">
                      Watch Video
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="readings" className="space-y-4 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden border-t-4 border-t-halal-gold hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="h-40 bg-halal-gold/10 rounded-md flex items-center justify-center">
                      <DocumentIcon size={36} className="text-halal-gold" />
                    </div>
                    <CardTitle className="mt-3">MS2424 Standard Guide</CardTitle>
                    <CardDescription>
                      Guide to MS2424 halal pharmaceutical standards
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={14} />
                      <span>15 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-halal-gold hover:bg-halal-gold-light text-white">
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LearnModule;
