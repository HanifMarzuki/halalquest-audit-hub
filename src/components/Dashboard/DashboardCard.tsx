
import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  className?: string;
  iconClassName?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon: Icon,
  to,
  className,
  iconClassName,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "card-halal p-6 flex flex-col items-center text-center animate-scale-in",
        className
      )}
    >
      <div
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mb-4",
          iconClassName || "bg-primary/10 text-primary"
        )}
      >
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  );
};

export default DashboardCard;
