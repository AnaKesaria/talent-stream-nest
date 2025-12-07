import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  Coins, 
  Award, 
  BookOpen, 
  Zap,
  Home,
  User,
  Settings,
  PlayCircle,
  Clock,
  Star,
  TrendingUp,
  ChevronRight
} from "lucide-react";
import nftAvatar2 from "@/assets/nft-avatar-2.png";
import courseHero from "@/assets/course-hero.png";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");

  const courses = [
    { id: 1, title: "Blockchain Fundamentals", progress: 75, lessons: 24, completed: 18, instructor: "Dr. Sarah Chen", rating: 4.9 },
    { id: 2, title: "Smart Contract Development", progress: 45, lessons: 32, completed: 14, instructor: "Mike Johnson", rating: 4.8 },
    { id: 3, title: "DeFi Masterclass", progress: 20, lessons: 28, completed: 6, instructor: "Alex Rivera", rating: 4.7 },
  ];

  const certificates = [
    { id: 1, title: "Web3 Developer", date: "Nov 2024", tokenId: "#4521" },
    { id: 2, title: "Solidity Expert", date: "Oct 2024", tokenId: "#3892" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-border/50 p-6 glass">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text">LearnChain</span>
        </Link>

        <nav className="flex-1 space-y-2">
          {[
            { icon: Home, label: "Dashboard", active: true },
            { icon: BookOpen, label: "My Courses", active: false },
            { icon: Award, label: "Certificates", active: false },
            { icon: Coins, label: "Token Wallet", active: false },
            { icon: User, label: "Profile", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active 
                  ? "bg-primary/10 text-primary border border-primary/30" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User Card */}
        <div className="mt-auto pt-6 border-t border-border/50">
          <div className="flex items-center gap-3">
            <img 
              src={nftAvatar2} 
              alt="User Avatar" 
              className="w-12 h-12 rounded-xl border border-primary/30"
            />
            <div>
              <div className="font-medium">Mystic Mage</div>
              <div className="text-sm text-muted-foreground">Level 12</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 glass border-b border-border/30 px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Learner!</h1>
              <p className="text-muted-foreground">Continue your learning journey</p>
            </div>
            <div className="flex items-center gap-4">
              <Card variant="glass" className="px-4 py-2 flex items-center gap-2">
                <Coins className="w-5 h-5 text-primary" />
                <span className="font-semibold">2,450</span>
                <span className="text-muted-foreground text-sm">LEARN</span>
              </Card>
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-10 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Courses Enrolled", value: "8", icon: BookOpen, color: "primary" },
              { label: "Certificates", value: "5", icon: Award, color: "secondary" },
              { label: "Token Balance", value: "2,450", icon: Coins, color: "accent" },
              { label: "Hours Learned", value: "127", icon: Clock, color: "primary" },
            ].map((stat) => (
              <Card key={stat.label} variant="glass" className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-${stat.color}/10 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Continue Learning */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Continue Learning</h2>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Link key={course.id} to={`/learn/${course.id}`}>
                  <Card variant="glass" className="overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={courseHero} 
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span>{course.rating}</span>
                          <span className="text-muted-foreground">• {course.lessons} lessons</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{course.instructor}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-primary font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* NFT Certificates */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Your NFT Certificates</h2>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <Card key={cert.id} variant="glow" className="p-6 hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{cert.title}</h3>
                      <p className="text-muted-foreground text-sm">Issued: {cert.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Token ID</div>
                      <div className="font-mono text-primary">{cert.tokenId}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Learning Activity */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Weekly Activity</h2>
            <Card variant="glass" className="p-6">
              <div className="flex items-end justify-between h-40 gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                  const heights = [60, 80, 45, 90, 70, 30, 55];
                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full rounded-t-lg bg-gradient-to-t from-primary to-primary/50 transition-all duration-300 hover:from-primary hover:to-secondary"
                        style={{ height: `${heights[i]}%` }}
                      />
                      <span className="text-xs text-muted-foreground">{day}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">12% increase from last week</span>
                </div>
                <div className="text-muted-foreground">Total: 18.5 hours</div>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
