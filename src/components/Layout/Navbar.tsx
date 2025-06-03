
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Menu, X, ChevronDown, Shield } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navigationItems = [
    { to: "/", label: "Home" },
    { to: "/checklist", label: "Audit" },
    { to: "/learn", label: "Learn" },
    { to: "/connect", label: "Connect" },
    { to: "/attachments", label: "Files" }
  ];

  const NavLinks = () => (
    <div className="flex flex-col md:flex-row gap-1 md:gap-2">
      {navigationItems.map((item) => (
        <Link 
          key={item.to}
          to={item.to} 
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 ${
            isActive(item.to) 
              ? 'text-halal-green bg-halal-green/10' 
              : 'text-gray-700 hover:text-halal-green'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  const QuickActions = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          Quick Actions
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link to="/checklist" className="w-full">
            Start New Audit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/attachments" className="w-full">
            View Documents
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/learn" className="w-full">
            Browse Courses
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/connect" className="w-full">
            Find Expert
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/admin" className="w-full flex items-center gap-2">
            <Shield size={16} />
            Admin Panel
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-halal-green text-xl font-bold">
                Halal<span className="text-halal-blue">Quest</span>
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="ml-8 hidden md:flex">
                <NavLinks />
              </div>
            )}
          </div>
          
          {/* Desktop Actions */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-3">
              <QuickActions />
              <Button variant="outline" size="sm" className="gap-2">
                <User size={16} />
                Sign In
              </Button>
              <Button size="sm" className="bg-halal-green hover:bg-halal-green-light">
                Register
              </Button>
            </div>
          )}
          
          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <span className="text-halal-green">Halal</span>
                    <span className="text-halal-blue">Quest</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 py-6">
                  {/* Navigation */}
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Navigation</h3>
                    <NavLinks />
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-500">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Link to="/checklist" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" size="sm" className="w-full">
                          Start Audit
                        </Button>
                      </Link>
                      <Link to="/attachments" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" size="sm" className="w-full">
                          Files
                        </Button>
                      </Link>
                    </div>
                    <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <Shield size={16} />
                        Admin
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Account Actions */}
                  <div className="space-y-3 border-t pt-6">
                    <Button variant="outline" className="w-full gap-2">
                      <User size={16} />
                      Sign In
                    </Button>
                    <Button className="w-full bg-halal-green hover:bg-halal-green-light">
                      Get Started Free
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
