import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Star, Music, Coffee, Laugh } from "lucide-react";

const Story = () => {
  const timeline = [
    {
      icon: Sparkles,
      title: "The Beginning",
      description: "When we first met, I knew you were someone special. Your energy was contagious!",
      color: "text-primary",
    },
    {
      icon: Laugh,
      title: "Endless Laughter",
      description: "We've shared countless moments of joy and laughter. Every conversation is an adventure!",
      color: "text-secondary",
    },
    {
      icon: Coffee,
      title: "Deep Conversations",
      description: "From silly jokes to deep talks, we've covered it all. Thanks for always listening.",
      color: "text-accent",
    },
    {
      icon: Music,
      title: "Shared Passions",
      description: "Music, movies, food - we've discovered so many things together!",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "True Friendship",
      description: "You're not just a friend, you're family. Here's to many more memories together!",
      color: "text-secondary",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every friendship has a story, and ours is filled with amazing moments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-8 hover:shadow-glow-primary transition-all duration-300 hover:scale-102 bg-gradient-card">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl bg-card shadow-lg ${item.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-12 bg-gradient-hero shadow-glow-primary max-w-3xl mx-auto">
            <Star className="h-16 w-16 mx-auto mb-6 text-primary-foreground animate-float" fill="currentColor" />
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              You're One of a Kind
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Thank you for being such an incredible person and an even better friend. 
              Your kindness, humor, and amazing personality light up every room you enter!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Story;
