
import React from "react";
import Navbar from "./Navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { AttachmentsIcon } from "../ui/Icons";
import { useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const isAttachmentsPage = location.pathname === "/attachments";
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-1 container mx-auto ${isMobile ? 'px-4 py-4' : 'px-4 py-6'}`}>
        {children}
      </main>
      
      {!isAttachmentsPage && (
        <div className="fixed bottom-6 right-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to="/attachments">
                <button className="bg-halal-blue-dark hover:bg-halal-blue text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105">
                  <AttachmentsIcon size={20} />
                  <span className="sr-only">View All Attachments</span>
                </button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>View All Attachments</p>
            </TooltipContent>
          </Tooltip>
        </div>
      )}
      
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
