
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout/Layout";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import { ChecklistIcon, LearnIcon, ConnectIcon } from "@/components/ui/Icons";
import ChecklistModule from "@/components/Checklist/ChecklistModule";

const Index = () => {
  return (
    <Layout>
      <section className="py-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Guide to <span className="text-halal-green">Halal</span> Compliance
            </h1>
            <p className="text-lg text-muted-foreground">
              HalalQuest helps businesses prepare for, obtain, and maintain halal certification
              with self-assessments, educational resources, and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-halal-green hover:bg-halal-green-light text-white">
                Start Self-Audit
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-halal-green/5 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-halal-gold/5 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80" 
                alt="Halal Certification" 
                className="relative z-10 rounded-lg shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Explore HalalQuest</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Audit Checklist"
            description="Evaluate your business's halal readiness with comprehensive checklists"
            icon={ChecklistIcon}
            to="/checklist"
            iconClassName="bg-halal-green/10 text-halal-green"
          />
          <DashboardCard
            title="Knowledge Base"
            description="Learn about halal standards through courses, videos, and readings"
            icon={LearnIcon}
            to="/learn"
            iconClassName="bg-halal-blue/10 text-halal-blue"
          />
          <DashboardCard
            title="Expert Network"
            description="Connect with halal industry experts for guidance and consultation"
            icon={ConnectIcon}
            to="/connect"
            iconClassName="bg-halal-gold/10 text-halal-gold"
          />
        </div>
      </section>

      <section className="mb-12">
        <div className="border-t pt-12">
          <ChecklistModule />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
