import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Coins, Briefcase, Users, Award, BookOpen, Zap } from "lucide-react";
import nftAvatar1 from "@/assets/nft-avatar-1.png";
import nftAvatar2 from "@/assets/nft-avatar-2.png";
import nftAvatar3 from "@/assets/nft-avatar-3.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">LearnChain</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Student
            </Link>
            <Link to="/creator" className="text-muted-foreground hover:text-foreground transition-colors">
              Creator
            </Link>
            <Link to="/company" className="text-muted-foreground hover:text-foreground transition-colors">
              Enterprise
            </Link>
          </div>
          <Link to="/auth">
            <Button variant="hero" size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Powered by Blockchain Technology</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            Learn. Earn.{" "}
            <span className="gradient-text">Verify.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            The future of education meets blockchain. Earn NFT certificates, 
            track achievements, and connect with opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Start Learning
              </Button>
            </Link>
            <Link to="/auth?type=business">
              <Button variant="hero-outline" size="xl">
                For Businesses
              </Button>
            </Link>
          </div>

          {/* Floating NFT Avatars */}
          <div className="relative mt-20 flex justify-center items-end gap-8">
            <div className="animate-float animation-delay-100">
              <img 
                src={nftAvatar1} 
                alt="NFT Avatar" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 border-primary/30 glow-primary"
              />
            </div>
            <div className="animate-float">
              <img 
                src={nftAvatar2} 
                alt="NFT Avatar" 
                className="w-32 h-32 md:w-44 md:h-44 rounded-2xl border-2 border-secondary/30 glow-secondary"
              />
            </div>
            <div className="animate-float animation-delay-200">
              <img 
                src={nftAvatar3} 
                alt="NFT Avatar" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 border-accent/30 glow-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Type Cards */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Choose Your <span className="gradient-text">Path</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Whether you're learning, teaching, or hiring — we've got you covered.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Card */}
            <Link to="/dashboard" className="group">
              <div className="glass rounded-2xl p-8 h-full border border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-primary">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Student Dashboard</h3>
                <p className="text-muted-foreground mb-6">
                  Browse courses, track progress, earn NFT certificates, and monitor your token balance.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Browse & enroll in courses
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Earn NFT certificates
                  </li>
                  <li className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-primary" />
                    Track token rewards
                  </li>
                </ul>
              </div>
            </Link>

            {/* Creator Card */}
            <Link to="/creator" className="group">
              <div className="glass rounded-2xl p-8 h-full border border-border/50 hover:border-secondary/50 transition-all duration-500 hover:glow-secondary">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Creator Portal</h3>
                <p className="text-muted-foreground mb-6">
                  Upload content, design assessments, and monetize your knowledge.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-secondary" />
                    Upload course content
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    Design assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-secondary" />
                    Monitor revenue
                  </li>
                </ul>
              </div>
            </Link>

            {/* Company Card */}
            <Link to="/company" className="group">
              <div className="glass rounded-2xl p-8 h-full border border-border/50 hover:border-accent/50 transition-all duration-500 hover:glow-accent">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Enterprise Portal</h3>
                <p className="text-muted-foreground mb-6">
                  Find verified talent, post opportunities, and verify skills instantly.
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    Search verified talent
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    Instant skill verification
                  </li>
                  <li className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-accent" />
                    Post job opportunities
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-t border-border/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-2">1,200+</div>
              <div className="text-muted-foreground">Courses</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text-accent mb-2">25K+</div>
              <div className="text-muted-foreground">NFTs Minted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">LearnChain</span>
          </div>
          <div className="text-muted-foreground text-sm">
            © 2024 LearnChain. Decentralized Education Platform.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
