import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Heart, Sparkles, Star } from "lucide-react";

const Countdown = () => {
  // Set a future date (you can customize this)
  const targetDate = new Date("2025-12-31T23:59:59").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const events = [
    {
      icon: Heart,
      title: "Next Celebration",
      date: "Coming Soon!",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Friendship Anniversary",
      date: "Every day together is special!",
      color: "text-secondary",
    },
    {
      icon: Star,
      title: "Next Adventure",
      date: "Always around the corner!",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Countdown Timer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Counting down to more amazing moments together!
          </p>
        </div>

        {/* Main Countdown */}
        <Card className="max-w-5xl mx-auto p-8 md:p-12 mb-12 bg-gradient-hero shadow-glow-primary animate-fade-in">
          <div className="text-center mb-8">
            <Calendar className="h-16 w-16 mx-auto mb-4 text-primary-foreground animate-bounce-slow" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Time Until New Year 2026
            </h2>
            <p className="text-xl text-primary-foreground/80">
              More memories to create together!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center animate-glow-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl md:text-6xl font-bold text-primary-foreground mb-2">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/80 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Events */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-hero bg-clip-text text-transparent">
            Special Moments Ahead
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-glow-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`mb-4 ${event.color}`}>
                    <Icon className="h-10 w-10 animate-float" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.date}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Motivational Section */}
        <Card className="max-w-3xl mx-auto mt-12 p-8 md:p-12 bg-gradient-card text-center animate-fade-in">
          <Clock className="h-12 w-12 mx-auto mb-4 text-primary animate-float" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Every Moment Counts
          </h3>
          <p className="text-lg text-muted-foreground">
            Time flies when you're having fun with amazing people. Here's to making every second count and creating more unforgettable memories together! 💜
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Countdown;
