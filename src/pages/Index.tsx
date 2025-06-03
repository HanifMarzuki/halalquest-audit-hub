
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout/Layout";
import { ChecklistIcon, LearnIcon, ConnectIcon, AttachmentsIcon } from "@/components/ui/Icons";
import { ChevronRight, Zap, Shield, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  const quickActions = [
    {
      title: "Start Audit",
      description: "Begin your halal certification journey",
      icon: ChecklistIcon,
      to: "/checklist",
      color: "bg-halal-green",
      hoverColor: "hover:bg-halal-green-light"
    },
    {
      title: "Learn",
      description: "Educational resources and guides",
      icon: LearnIcon,
      to: "/learn",
      color: "bg-halal-blue",
      hoverColor: "hover:bg-halal-blue-light"
    },
    {
      title: "Connect",
      description: "Expert consultation and support",
      icon: ConnectIcon,
      to: "/connect",
      color: "bg-halal-gold",
      hoverColor: "hover:bg-amber-500"
    },
    {
      title: "Attachments",
      description: "Manage your documents",
      icon: AttachmentsIcon,
      to: "/attachments",
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Quick Assessment",
      description: "Complete pre-audit checks in minutes"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Stay audit-ready with real-time tracking"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Connect with halal certification experts"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className={`${isMobile ? 'py-8' : 'py-12'} text-center`}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold leading-tight`}>
            Your <span className="text-halal-green">Halal</span> Certification Hub
          </h1>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground px-4`}>
            Streamlined tools for halal compliance, audit preparation, and certification maintenance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link to="/checklist">
              <Button 
                size={isMobile ? "default" : "lg"} 
                className="bg-halal-green hover:bg-halal-green-light text-white w-full sm:w-auto"
              >
                Start Your Audit
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/learn">
              <Button 
                variant="outline" 
                size={isMobile ? "default" : "lg"}
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className={`${isMobile ? 'py-8' : 'py-12'}`}>
        <div className="text-center mb-8">
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-2`}>
            Quick Actions
          </h2>
          <p className="text-muted-foreground">
            Everything you need for halal compliance
          </p>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-2 md:grid-cols-4 gap-6'}`}>
          {quickActions.map((action, index) => (
            <Link key={index} to={action.to} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 border-0 shadow-md">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`${action.color} ${action.hoverColor} w-12 h-12 rounded-full flex items-center justify-center mx-auto transition-colors`}>
                    <action.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold mb-1`}>
                      {action.title}
                    </h3>
                    <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground`}>
                      {action.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className={`${isMobile ? 'py-8' : 'py-12'} bg-gray-50 rounded-lg`}>
        <div className="text-center mb-8">
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-2`}>
            Why Choose HalalQuest?
          </h2>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-3 gap-8'}`}>
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md">
                <feature.icon size={28} className="text-halal-green" />
              </div>
              <div>
                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold mb-2`}>
                  {feature.title}
                </h3>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-muted-foreground`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${isMobile ? 'py-8' : 'py-12'} text-center`}>
        <Card className="bg-halal-green text-white border-0">
          <CardContent className="p-8">
            <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-4`}>
              Ready to Get Started?
            </h2>
            <p className={`${isMobile ? 'text-sm' : 'text-base'} mb-6 opacity-90`}>
              Begin your halal certification journey today with our comprehensive audit tools
            </p>
            <Link to="/checklist">
              <Button 
                variant="secondary" 
                size={isMobile ? "default" : "lg"}
                className="bg-white text-halal-green hover:bg-gray-100"
              >
                Start Free Audit
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Index;
