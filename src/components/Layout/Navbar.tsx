
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-halal-green text-xl font-bold">
              Halal
              <span className="text-halal-blue">Quest</span>
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex gap-2">
            <User size={18} />
            <span>Sign In</span>
          </Button>
          <Button className="hidden md:inline-flex bg-halal-green hover:bg-halal-green-light">
            Register
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <User size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
