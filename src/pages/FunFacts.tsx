import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star, Zap, Crown, Rainbow } from "lucide-react";

const FunFacts = () => {
  const [selectedFact, setSelectedFact] = useState<number | null>(null);

  const facts = [
    {
      icon: Crown,
      title: "Queen of Vibes",
      fact: "You have this incredible ability to lift everyone's mood. It's like your superpower!",
      color: "bg-primary text-primary-foreground",
    },
    {
      icon: Sparkles,
      title: "Conversation Master",
      fact: "You can make any topic interesting! From serious discussions to silly banter, you've got range.",
      color: "bg-secondary text-secondary-foreground",
    },
    {
      icon: Heart,
      title: "Empathy Expert",
      fact: "You always know exactly what to say when someone needs support. It's a rare gift!",
      color: "bg-accent text-accent-foreground",
    },
    {
      icon: Zap,
      title: "Energy Dynamo",
      fact: "Your enthusiasm is infectious! You make even mundane things feel exciting.",
      color: "bg-primary text-primary-foreground",
    },
    {
      icon: Star,
      title: "Style Icon",
      fact: "You have your own unique style that nobody else can pull off quite like you do!",
      color: "bg-secondary text-secondary-foreground",
    },
    {
      icon: Rainbow,
      title: "Joy Spreader",
      fact: "You bring color to everyone's life. The world is brighter with you in it!",
      color: "bg-accent text-accent-foreground",
    },
  ];

  const randomQuotes = [
    "You're absolutely phenomenal!",
    "Keep being awesome!",
    "You're a ray of sunshine!",
    "You're incredibly special!",
    "You make life more fun!",
    "You're one in a million!",
  ];

  const [currentQuote, setCurrentQuote] = useState(randomQuotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    setCurrentQuote(randomQuotes[randomIndex]);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Fun Facts About You
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All the reasons why you're absolutely incredible!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {facts.map((item, index) => {
            const Icon = item.icon;
            const isSelected = selectedFact === index;
            return (
              <Card
                key={index}
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in ${
                  isSelected ? "shadow-glow-primary scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedFact(isSelected ? null : index)}
              >
                <div className={`p-4 rounded-2xl ${item.color} mb-4 inline-block`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p
                  className={`text-muted-foreground transition-all duration-300 ${
                    isSelected ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {item.fact}
                </p>
                {!isSelected && (
                  <p className="text-sm text-muted-foreground mt-2">Click to reveal!</p>
                )}
              </Card>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <Card className="p-12 bg-gradient-card max-w-3xl mx-auto">
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary animate-float" />
            <h2 className="text-4xl font-bold mb-6 text-primary animate-glow-pulse">
              {currentQuote}
            </h2>
            <Button
              size="lg"
              onClick={generateRandomQuote}
              className="shadow-glow-primary"
            >
              Get Another Compliment
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-hero shadow-glow-primary max-w-2xl mx-auto">
            <Heart className="h-12 w-12 mx-auto mb-4 text-primary-foreground animate-bounce-slow" fill="currentColor" />
            <p className="text-2xl text-primary-foreground font-bold">
              You're simply the best! 💜✨
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
