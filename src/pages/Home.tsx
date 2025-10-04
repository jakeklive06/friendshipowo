import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-celebration.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/30 to-background" />
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-4 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground drop-shadow-2xl animate-bounce-slow">
              Hey Beautiful! 💜
            </h1>
            <p className="text-2xl md:text-4xl text-primary-foreground/90 drop-shadow-lg">
              This website is dedicated to you, my amazing friend
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Heart className="h-12 w-12 text-secondary animate-float" fill="currentColor" />
            <Sparkles className="h-10 w-10 text-accent animate-bounce-slow" />
            <Star className="h-12 w-12 text-primary animate-float" fill="currentColor" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="shadow-glow-primary text-lg px-8 py-6">
                Take the Quiz
              </Button>
            </Link>
            <Link to="/memory-jar">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-glow-secondary text-lg px-8 py-6"
              >
                Open Memory Jar
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce-slow">
          <div className="w-20 h-20 rounded-full bg-secondary/20 blur-xl" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 rounded-full bg-accent/20 blur-xl" />
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl shadow-glow-primary hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-primary mb-2">∞</div>
              <div className="text-xl text-muted-foreground">Countless Memories</div>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl shadow-glow-secondary hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-secondary mb-2">100%</div>
              <div className="text-xl text-muted-foreground">Pure Awesomeness</div>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl shadow-glow-accent hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-xl text-muted-foreground">Amazing Energy</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
