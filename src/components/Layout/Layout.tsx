
import React from "react";
import Navbar from "./Navbar";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-1 container mx-auto ${isMobile ? 'px-4 py-4' : 'px-4 py-6'}`}>
        {children}
      </main>
      <footer className="bg-halal-blue-dark text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-lg">HalalQuest</span>
              <p className="text-sm text-gray-300 mt-1">
                Simplifying halal compliance for businesses
              </p>
            </div>
            <div className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} HalalQuest. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
