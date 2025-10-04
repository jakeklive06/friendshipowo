import { Link, useLocation } from "react-router-dom";
import { Home, BookHeart, MessageSquareHeart, Sparkles, Brain, Clock, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/story", label: "Our Story", icon: BookHeart },
    { path: "/quiz", label: "Quiz", icon: Brain },
    { path: "/countdown", label: "Countdown", icon: Clock },
    { path: "/memory-jar", label: "Memory Jar", icon: Archive },
    { path: "/messages", label: "Messages", icon: MessageSquareHeart },
    { path: "/fun-facts", label: "Fun Facts", icon: Sparkles },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            ✨ Special Friend
          </div>
          <div className="flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`gap-2 transition-all ${
                      isActive
                        ? "shadow-glow-primary"
                        : "hover:shadow-glow-primary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden md:inline">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
