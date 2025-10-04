import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Star, Smile } from "lucide-react";

const Messages = () => {
  const messages = [
    {
      icon: Heart,
      title: "You're Amazing",
      message: "Your kindness and warmth make everyone around you feel special. Never stop being you!",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Sparkles,
      title: "Your Energy",
      message: "Your positive energy is absolutely contagious! You light up every room you walk into.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Star,
      title: "Simply the Best",
      message: "You're talented, brilliant, incredible, and absolutely one of a kind. Don't ever forget that!",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Smile,
      title: "Your Smile",
      message: "Your smile can brighten even the darkest days. Thank you for sharing it with the world!",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Heart,
      title: "True Friend",
      message: "Finding a friend like you is rare. You're loyal, caring, and absolutely irreplaceable!",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Sparkles,
      title: "Keep Shining",
      message: "Never doubt yourself. You're capable of achieving anything you set your mind to!",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Special Messages
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Words from the heart, just for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {messages.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-glow-primary transition-all duration-300 hover:scale-105 animate-fade-in ${item.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-card shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-lg text-foreground/80">{item.message}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-12 bg-gradient-hero shadow-glow-primary max-w-3xl mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-6 text-primary-foreground animate-glow-pulse" fill="currentColor" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Forever Grateful
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Thank you for being you. Your friendship means the world to me, 
              and I'm so lucky to have you in my life. Here's to many more 
              amazing memories together! 💜
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;
