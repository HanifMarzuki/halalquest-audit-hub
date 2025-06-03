
import React from "react";
import Navbar from "./Navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { AttachmentsIcon } from "../ui/Icons";
import { useLocation } from "react-router-dom";

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
      <main className={`flex-1 container mx-auto ${isMobile ? 'px-4 py-6' : 'px-6 py-8'} max-w-7xl`}>
        {children}
      </main>
      
      {/* Floating Action Button - Mobile Optimized */}
      {!isAttachmentsPage && (
        <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'} z-40`}>
          <Link to="/attachments">
            <button className={`bg-halal-blue-dark hover:bg-halal-blue text-white ${
              isMobile ? 'p-3' : 'p-4'
            } rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group`}>
              <AttachmentsIcon size={isMobile ? 18 : 20} />
              {!isMobile && (
                <span className="ml-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Files
                </span>
              )}
              <span className="sr-only">View All Attachments</span>
            </button>
          </Link>
        </div>
      )}
      
      {/* Footer - Simplified for mobile */}
      <footer className="bg-halal-blue-dark text-white py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className={`flex ${isMobile ? 'flex-col space-y-4 text-center' : 'flex-row justify-between items-center'}`}>
            <div className={isMobile ? 'mb-0' : 'mb-4 md:mb-0'}>
              <span className={`font-bold ${isMobile ? 'text-base' : 'text-lg'}`}>HalalQuest</span>
              <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-300 mt-1`}>
                Simplifying halal compliance for businesses
              </p>
            </div>
            <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-300`}>
              &copy; {new Date().getFullYear()} HalalQuest. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
