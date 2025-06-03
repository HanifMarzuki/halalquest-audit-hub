
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Settings, Shield, Database, Users, BookOpen, CheckSquare } from "lucide-react";
import AuditListManager from "./AuditListManager";
import LearnContentManager from "./LearnContentManager";
import ExpertManager from "./ExpertManager";

const AdminModule: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Admin Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="text-halal-blue" size={28} />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage audit checklists, learning content, and expert network
          </p>
        </div>
        <Badge variant="outline" className="bg-halal-blue/10 text-halal-blue border-halal-blue/20">
          Admin Access
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-halal-green/5 border-halal-green/20">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Audit Items</CardTitle>
              <CheckSquare className="text-halal-green" size={16} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Across all sectors</p>
          </CardContent>
        </Card>
        
        <Card className="bg-halal-blue/5 border-halal-blue/20">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Learning Content</CardTitle>
              <BookOpen className="text-halal-blue" size={16} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Courses & materials</p>
          </CardContent>
        </Card>
        
        <Card className="bg-halal-gold/5 border-halal-gold/20">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Experts</CardTitle>
              <Users className="text-halal-gold" size={16} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Verified professionals</p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Tabs */}
      <Tabs defaultValue="audit" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="audit" className="flex items-center gap-2">
            <Database size={16} />
            Audit Lists
          </TabsTrigger>
          <TabsTrigger value="learn" className="flex items-center gap-2">
            <BookOpen size={16} />
            Learning
          </TabsTrigger>
          <TabsTrigger value="experts" className="flex items-center gap-2">
            <Users size={16} />
            Experts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="audit">
          <AuditListManager />
        </TabsContent>

        <TabsContent value="learn">
          <LearnContentManager />
        </TabsContent>

        <TabsContent value="experts">
          <ExpertManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminModule;
