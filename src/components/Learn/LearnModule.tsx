
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LearnIcon, VideoIcon, DocumentIcon } from "../ui/Icons";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, BookOpen } from "lucide-react";

const LearnModule: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <LearnIcon size={24} className="text-halal-green" />
          Knowledge Base
        </h1>
        <p className="text-muted-foreground mt-1">
          Learn about halal standards and build your knowledge
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Continue Learning</CardTitle>
            <CardDescription>Pick up where you left off</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-halal-green/5 rounded-lg p-4 border border-halal-green/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-halal-green" />
                  <h3 className="text-lg font-medium">Halal Fundamentals</h3>
                </div>
                <Badge variant="outline" className="bg-halal-green/10 text-halal-green">
                  Course
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Learn the core principles and requirements of halal certification
              </p>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">Progress: 60%</span>
                <span className="text-xs text-muted-foreground">3/5 Modules</span>
              </div>
              <Progress value={60} className="h-2 mb-3" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={14} />
                  <span>2 hours remaining</span>
                </div>
                <Button size="sm" className="bg-halal-green hover:bg-halal-green-light">
                  Continue
                </Button>
              </div>
            </div>
            
            <div className="rounded-lg p-4 border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <h3 className="text-lg font-medium">MS1500:2009 Standards</h3>
                </div>
                <Badge variant="outline">Reading</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Detailed breakdown of MS1500:2009 halal food production standards
              </p>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">Progress: 25%</span>
                <span className="text-xs text-muted-foreground">1/4 Sections</span>
              </div>
              <Progress value={25} className="h-2 mb-3" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={14} />
                  <span>45 minutes remaining</span>
                </div>
                <Button size="sm" variant="outline">
                  Continue
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Learning Stats</CardTitle>
            <CardDescription>Your progress at a glance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-sm font-medium">Courses Completed</span>
              <span className="text-xl font-bold">2</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-sm font-medium">Certificates Earned</span>
              <span className="text-xl font-bold">1</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="text-sm font-medium">Learning Streaks</span>
              <span className="text-xl font-bold">5 days</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Quiz Success Rate</span>
              <span className="text-xl font-bold">78%</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Stats</Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="courses">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="readings">Readings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="h-40 bg-halal-green/10 rounded-md flex items-center justify-center">
                    <BookOpen size={40} className="text-halal-green" />
                  </div>
                  <CardTitle className="mt-2">Halal Certification Process</CardTitle>
                  <CardDescription>
                    Learn the step-by-step process for halal certification
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Clock size={14} />
                    <span>3 hours</span>
                    <span className="mx-1">•</span>
                    <Calendar size={14} />
                    <span>5 modules</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-halal-green hover:bg-halal-green-light">
                    Start Course
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="h-40 bg-halal-blue/10 rounded-md flex items-center justify-center">
                    <VideoIcon size={40} className="text-halal-blue" />
                  </div>
                  <CardTitle className="mt-2">Halal Production Requirements</CardTitle>
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
                  <Button className="w-full" variant="outline">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="readings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="h-40 bg-halal-gold/10 rounded-md flex items-center justify-center">
                    <DocumentIcon size={40} className="text-halal-gold" />
                  </div>
                  <CardTitle className="mt-2">MS2424 Standard Guide</CardTitle>
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
                  <Button className="w-full" variant="outline">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearnModule;
