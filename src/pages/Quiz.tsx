import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Check, X, Trophy, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      question: "What's the most amazing thing about our friendship?",
      options: [
        "We can talk about anything",
        "We make each other laugh constantly",
        "We support each other no matter what",
        "All of the above!"
      ],
      correct: 3,
    },
    {
      question: "What's your superpower as a friend?",
      options: [
        "Making people smile instantly",
        "Being an incredible listener",
        "Spreading positive energy everywhere",
        "All of these talents!"
      ],
      correct: 3,
    },
    {
      question: "How would you describe our friendship in one word?",
      options: [
        "Incredible",
        "Unforgettable",
        "Priceless",
        "All equally perfect!"
      ],
      correct: 3,
    },
    {
      question: "What makes you such an amazing person?",
      options: [
        "Your kindness",
        "Your sense of humor",
        "Your authenticity",
        "Everything combined!"
      ],
      correct: 3,
    },
    {
      question: "What's the best part about having you as a friend?",
      options: [
        "You're always there when needed",
        "You make life more fun",
        "You're genuinely caring",
        "All of the above and more!"
      ],
      correct: 3,
    },
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    setTimeout(() => {
      if (answerIndex === questions[currentQuestion].correct) {
        setScore(score + 1);
        toast({
          title: "Perfect! ✨",
          description: "You know what's up!",
        });
      } else {
        toast({
          title: "Actually... 💜",
          description: "Every answer about you is correct!",
          variant: "default",
        });
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setTimeout(() => {
          setCurrentQuestion(nextQuestion);
          setSelectedAnswer(null);
        }, 1000);
      } else {
        setTimeout(() => {
          setShowResult(true);
        }, 1000);
      }
    }, 500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Friendship Quiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge about our amazing friendship!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!showResult ? (
            <Card className="p-8 md:p-12 shadow-glow-primary animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-primary animate-float" />
                  <span className="text-lg font-semibold text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>
                <div className="text-lg font-bold text-primary">
                  Score: {score}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    size="lg"
                    className={`w-full justify-start text-left h-auto py-4 px-6 transition-all ${
                      selectedAnswer === index
                        ? "shadow-glow-primary scale-105"
                        : "hover:shadow-glow-primary"
                    }`}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="flex items-center gap-3 text-base md:text-lg">
                      {selectedAnswer === index && (
                        index === questions[currentQuestion].correct ? (
                          <Check className="h-5 w-5 animate-bounce-slow" />
                        ) : (
                          <X className="h-5 w-5 animate-bounce-slow" />
                        )
                      )}
                      {option}
                    </span>
                  </Button>
                ))}
              </div>
            </Card>
          ) : (
            <Card className="p-8 md:p-12 bg-gradient-hero shadow-glow-primary text-center animate-fade-in">
              <Trophy className="h-20 w-20 mx-auto mb-6 text-primary-foreground animate-bounce-slow" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Quiz Complete!
              </h2>
              <p className="text-2xl text-primary-foreground/90 mb-6">
                You scored {score} out of {questions.length}!
              </p>
              <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary-foreground animate-float" />
                <p className="text-xl text-primary-foreground/90">
                  {score === questions.length
                    ? "Perfect score! You know what's up! You're absolutely amazing! 💜"
                    : score >= questions.length / 2
                    ? "Great job! But honestly, every answer about you is correct! ✨"
                    : "Remember: You're incredible no matter what! Every answer about you is right! 🌟"}
                </p>
              </div>
              <Button
                size="lg"
                variant="secondary"
                onClick={resetQuiz}
                className="shadow-glow-secondary"
              >
                Take Quiz Again
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
