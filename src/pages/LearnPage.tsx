import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  PlayCircle,
  Pause,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Lock,
  FileText,
  Clock,
  Award,
  MessageCircle,
  ThumbsUp,
  Bookmark
} from "lucide-react";
import courseHero from "@/assets/course-hero.png";

const LearnPage = () => {
  const { courseId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);

  const course = {
    title: "Blockchain Fundamentals",
    instructor: "Dr. Sarah Chen",
    progress: 75,
    modules: [
      {
        title: "Introduction to Blockchain",
        lessons: [
          { title: "What is Blockchain?", duration: "12:30", completed: true },
          { title: "History of Cryptocurrency", duration: "18:45", completed: true },
          { title: "Key Concepts & Terminology", duration: "15:20", completed: true },
        ]
      },
      {
        title: "How Blockchain Works",
        lessons: [
          { title: "Distributed Ledger Technology", duration: "20:15", completed: true },
          { title: "Consensus Mechanisms", duration: "25:30", completed: true },
          { title: "Mining and Validation", duration: "22:00", completed: false, active: true },
        ]
      },
      {
        title: "Cryptography Basics",
        lessons: [
          { title: "Hash Functions", duration: "18:00", completed: false },
          { title: "Public & Private Keys", duration: "16:45", completed: false },
          { title: "Digital Signatures", duration: "14:30", completed: false },
        ]
      },
      {
        title: "Smart Contracts",
        lessons: [
          { title: "Introduction to Smart Contracts", duration: "20:00", completed: false, locked: true },
          { title: "Writing Your First Contract", duration: "30:00", completed: false, locked: true },
        ]
      },
    ]
  };

  const currentLesson = course.modules[activeModule]?.lessons[activeLesson];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-border/30 px-6 py-4">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-semibold">{course.title}</h1>
              <p className="text-sm text-muted-foreground">{course.instructor}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Progress:</span>
              <Progress value={course.progress} className="w-32 h-2" />
              <span className="text-sm font-medium text-primary">{course.progress}%</span>
            </div>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row">
        {/* Main Content - Video Player */}
        <div className="flex-1 p-6 lg:p-10">
          {/* Video Player */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted mb-8">
            <img 
              src={courseHero} 
              alt="Course Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 glow-primary"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-primary-foreground" />
                ) : (
                  <PlayCircle className="w-10 h-10 text-primary-foreground" />
                )}
              </button>
            </div>
            
            {/* Video Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="h-1 bg-muted-foreground/30 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </div>
              <div className="flex items-center justify-between mt-2 text-sm">
                <span className="text-foreground/80">7:24</span>
                <span className="text-muted-foreground">22:00</span>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentLesson?.title}</h2>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {currentLesson?.duration}
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  Resources included
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button variant="hero">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Mark as Complete
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Download Resources
              </Button>
              <Button variant="outline">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask Question
              </Button>
            </div>

            {/* Lesson Description */}
            <Card variant="glass" className="p-6">
              <h3 className="font-semibold mb-4">About This Lesson</h3>
              <p className="text-muted-foreground leading-relaxed">
                In this lesson, we dive deep into the mining and validation processes that 
                keep blockchain networks secure and decentralized. You'll learn about Proof 
                of Work, Proof of Stake, and how transactions are verified and added to the 
                blockchain. By the end, you'll understand the critical role miners and 
                validators play in maintaining network integrity.
              </p>
            </Card>

            {/* Engagement Section */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ThumbsUp className="w-5 h-5" />
                <span>Helpful (234)</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>Comments (42)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Course Outline */}
        <aside className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-border/50 p-6 lg:p-8 bg-card/30">
          <h3 className="font-semibold text-lg mb-6">Course Content</h3>
          
          <div className="space-y-4">
            {course.modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="border border-border/50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveModule(activeModule === moduleIndex ? -1 : moduleIndex)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium ${
                      moduleIndex < 2 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {moduleIndex + 1}
                    </div>
                    <span className="font-medium text-left">{module.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                    activeModule === moduleIndex ? "rotate-180" : ""
                  }`} />
                </button>
                
                {activeModule === moduleIndex && (
                  <div className="border-t border-border/50">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lessonIndex}
                        onClick={() => !lesson.locked && setActiveLesson(lessonIndex)}
                        disabled={lesson.locked}
                        className={`w-full flex items-center gap-3 p-4 text-left transition-colors ${
                          lesson.active 
                            ? "bg-primary/10 border-l-2 border-primary" 
                            : lesson.locked 
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-muted/50"
                        }`}
                      >
                        {lesson.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : lesson.locked ? (
                          <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <PlayCircle className={`w-5 h-5 flex-shrink-0 ${
                            lesson.active ? "text-primary" : "text-muted-foreground"
                          }`} />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm truncate ${
                            lesson.active ? "text-primary font-medium" : ""
                          }`}>
                            {lesson.title}
                          </p>
                          <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certificate Preview */}
          <Card variant="glow" className="mt-8 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold">Complete to Earn</h4>
                <p className="text-sm text-muted-foreground">NFT Certificate + 500 LEARN</p>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default LearnPage;
