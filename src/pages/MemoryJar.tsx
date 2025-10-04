import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RotateCcw, Heart, Star, Smile } from "lucide-react";

const MemoryJar = () => {
  const memories = [
    {
      icon: Heart,
      text: "Remember when we laughed so hard we couldn't breathe? Those are the moments I cherish most!",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      text: "That time we stayed up talking until sunrise - your wisdom and humor made every minute magical!",
      color: "text-secondary",
    },
    {
      icon: Star,
      text: "You have this incredible ability to turn ordinary moments into extraordinary memories!",
      color: "text-accent",
    },
    {
      icon: Smile,
      text: "Every conversation with you is an adventure. Thanks for being such an amazing friend!",
      color: "text-primary",
    },
    {
      icon: Heart,
      text: "Your energy is absolutely contagious! You make everyone around you feel special.",
      color: "text-secondary",
    },
    {
      icon: Sparkles,
      text: "The way you support your friends is incredible. You're always there when we need you!",
      color: "text-accent",
    },
    {
      icon: Star,
      text: "Your sense of humor brightens even the cloudiest days. Never stop being you!",
      color: "text-primary",
    },
    {
      icon: Smile,
      text: "You have such a unique perspective on life - talking to you always opens my mind!",
      color: "text-secondary",
    },
    {
      icon: Heart,
      text: "Thank you for being genuine, caring, and absolutely wonderful in every way!",
      color: "text-accent",
    },
    {
      icon: Sparkles,
      text: "Your positivity is a superpower! You inspire everyone to be their best selves.",
      color: "text-primary",
    },
    {
      icon: Star,
      text: "The world is a better place with you in it. Your kindness ripples out to everyone!",
      color: "text-secondary",
    },
    {
      icon: Smile,
      text: "You're not just smart and funny - you're also one of the most caring people I know!",
      color: "text-accent",
    },
  ];

  const [currentMemory, setCurrentMemory] = useState(memories[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [usedMemories, setUsedMemories] = useState<number[]>([0]);

  const pickRandomMemory = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      let availableMemories = memories
        .map((_, index) => index)
        .filter((index) => !usedMemories.includes(index));

      if (availableMemories.length === 0) {
        setUsedMemories([]);
        availableMemories = memories.map((_, index) => index);
      }

      const randomIndex =
        availableMemories[Math.floor(Math.random() * availableMemories.length)];
      
      setCurrentMemory(memories[randomIndex]);
      setUsedMemories([...usedMemories, randomIndex]);
      setIsAnimating(false);
    }, 500);
  };

  const Icon = currentMemory.icon;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Memory Jar
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pull out a random memory or sweet message!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main Memory Card */}
          <Card
            className={`p-8 md:p-12 mb-8 bg-gradient-card shadow-glow-primary transition-all duration-500 ${
              isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            <div className="text-center">
              <div
                className={`inline-block p-6 rounded-full bg-card shadow-lg mb-6 ${
                  currentMemory.color
                } ${isAnimating ? "animate-bounce-slow" : "animate-float"}`}
              >
                <Icon className="h-16 w-16" />
              </div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-foreground">
                {currentMemory.text}
              </p>
            </div>
          </Card>

          {/* Action Button */}
          <div className="text-center mb-12">
            <Button
              size="lg"
              onClick={pickRandomMemory}
              disabled={isAnimating}
              className="shadow-glow-primary text-lg px-8 py-6 gap-3"
            >
              <RotateCcw className={`h-6 w-6 ${isAnimating ? "animate-spin" : ""}`} />
              Pick Another Memory
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 text-center bg-gradient-card hover:shadow-glow-primary transition-all">
              <div className="text-4xl font-bold text-primary mb-2">
                {memories.length}
              </div>
              <div className="text-muted-foreground">Total Memories</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-card hover:shadow-glow-secondary transition-all">
              <div className="text-4xl font-bold text-secondary mb-2">
                {usedMemories.length}
              </div>
              <div className="text-muted-foreground">Memories Explored</div>
            </Card>
          </div>

          {/* Bottom Message */}
          <Card className="mt-8 p-8 bg-gradient-hero shadow-glow-primary text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary-foreground animate-float" />
            <p className="text-xl text-primary-foreground">
              Every memory with you is precious. Keep being amazing! 💜✨
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MemoryJar;
