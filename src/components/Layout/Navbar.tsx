
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const NavLinks = () => (
    <div className="flex flex-col md:flex-row gap-6">
      <Link 
        to="/" 
        className={cn(
          "hover:text-halal-green font-medium transition-colors",
          isActive("/") && "text-halal-green"
        )}
      >
        Home
      </Link>
      <Link 
        to="/checklist" 
        className={cn(
          "hover:text-halal-green font-medium transition-colors",
          isActive("/checklist") && "text-halal-green"
        )}
      >
        Audit Checklist
      </Link>
      <Link 
        to="/learn" 
        className={cn(
          "hover:text-halal-green font-medium transition-colors",
          isActive("/learn") && "text-halal-green"
        )}
      >
        Learn
      </Link>
      <Link 
        to="/connect" 
        className={cn(
          "hover:text-halal-green font-medium transition-colors",
          isActive("/connect") && "text-halal-green"
        )}
      >
        Connect
      </Link>
      <Link 
        to="/attachments" 
        className={cn(
          "hover:text-halal-green font-medium transition-colors",
          isActive("/attachments") && "text-halal-green"
        )}
      >
        Attachments
      </Link>
    </div>
  );
  
  return (
    <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-halal-green text-xl font-bold">
              Halal<span className="text-halal-blue">Quest</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="ml-10 hidden md:flex space-x-1">
              <NavLinks />
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex gap-2">
            <User size={18} />
            <span>Sign In</span>
          </Button>
          <Button className="hidden md:inline-flex bg-halal-green hover:bg-halal-green-light">
            Register
          </Button>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 py-6">
                  <NavLinks />
                  <div className="space-y-3 pt-4 border-t">
                    <Button variant="outline" className="w-full gap-2">
                      <User size={18} />
                      <span>Sign In</span>
                    </Button>
                    <Button className="w-full bg-halal-green hover:bg-halal-green-light">
                      Register
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
