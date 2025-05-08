
import React from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout/Layout";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { ChecklistIcon, LearnIcon, ConnectIcon, CalendarIcon } from "@/components/ui/Icons";
import { AttachmentsProvider } from "@/components/Checklist/context/AttachmentsContext";
import ChecklistModule from "@/components/Checklist/ChecklistModule";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-8 md:py-16 mb-6 md:mb-12 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <div className="inline-block bg-halal-green/10 text-halal-green font-medium px-4 py-2 rounded-full text-sm mb-2">
              Simplifying Halal Certification
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your Complete <span className="text-halal-green">Halal</span> Certification Solution
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Streamline your halal certification journey with self-assessments, educational resources, and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-halal-green hover:bg-halal-green-light text-white gap-2">
                Start Self-Audit <ArrowRight size={16} />
              </Button>
              <Button variant="outline">View Demo</Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-halal-green/5 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-halal-gold/5 rounded-full"></div>
            <Card className="overflow-hidden border-0 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80" 
                alt="Halal Certification" 
                className="w-full h-80 object-cover object-center"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Essential Tools</h2>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn("px-4 py-2 hover:text-halal-green transition-colors")}
                  href="/checklist"
                >
                  Audit Checklist
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn("px-4 py-2 hover:text-halal-green transition-colors")}
                  href="/learn"
                >
                  Knowledge Base
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn("px-4 py-2 hover:text-halal-green transition-colors")}
                  href="/connect"
                >
                  Expert Network
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Audit Checklist"
            description="Evaluate your business's halal readiness with comprehensive checklists"
            icon={ChecklistIcon}
            to="/checklist"
            iconClassName="bg-halal-green/10 text-halal-green"
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          />
          <DashboardCard
            title="Knowledge Base"
            description="Learn about halal standards through courses, videos, and readings"
            icon={LearnIcon}
            to="/learn"
            iconClassName="bg-halal-blue/10 text-halal-blue"
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          />
          <DashboardCard
            title="Expert Network"
            description="Connect with halal industry experts for guidance and consultation"
            icon={ConnectIcon}
            to="/connect"
            iconClassName="bg-halal-gold/10 text-halal-gold"
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          />
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="mb-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <Card className="bg-gradient-to-r from-halal-green/5 to-halal-blue/5 border-0">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">Ready to get started?</h3>
                <p className="text-muted-foreground">
                  Begin with our self-assessment checklist to evaluate your current halal compliance status.
                </p>
                <Button className="bg-halal-green hover:bg-halal-green-light text-white mt-2">
                  Launch Quick Audit
                </Button>
              </div>
              <div className="flex-1">
                <AttachmentsProvider>
                  <ChecklistModule />
                </AttachmentsProvider>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Index;
