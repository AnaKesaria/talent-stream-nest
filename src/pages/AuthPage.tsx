import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Zap, ArrowLeft, Mail, Lock, User, Building } from "lucide-react";
import nftAvatar1 from "@/assets/nft-avatar-1.png";
import nftAvatar2 from "@/assets/nft-avatar-2.png";
import nftAvatar3 from "@/assets/nft-avatar-3.png";
import { toast } from "@/hooks/use-toast";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isBusiness = searchParams.get("type") === "business";
  
  const [isLogin, setIsLogin] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    company: "",
  });

  const avatars = [
    { src: nftAvatar1, name: "Cyber Guardian" },
    { src: nftAvatar2, name: "Mystic Mage" },
    { src: nftAvatar3, name: "Tech Scholar" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && !isBusiness && selectedAvatar === null) {
      toast({
        title: "Select your NFT Avatar",
        description: "Choose an avatar to represent you in the platform",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: isLogin ? "Welcome back!" : "Account created!",
      description: isLogin 
        ? "Redirecting to your dashboard..." 
        : "Your NFT avatar has been minted!",
    });

    setTimeout(() => {
      if (isBusiness) {
        navigate("/company");
      } else {
        navigate("/dashboard");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
          <Link to="/" className="flex items-center gap-2 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Zap className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold gradient-text">LearnChain</span>
          </Link>

          <h2 className="text-4xl font-bold text-center mb-4">
            {isBusiness ? "Hire Verified Talent" : "Begin Your Journey"}
          </h2>
          <p className="text-muted-foreground text-center max-w-md mb-12">
            {isBusiness 
              ? "Access a pool of verified professionals with blockchain-verified credentials."
              : "Choose your NFT avatar and start earning certificates and tokens."
            }
          </p>

          {/* Floating Avatars */}
          <div className="flex gap-6">
            {avatars.map((avatar, i) => (
              <div 
                key={i}
                className={`animate-float ${i === 1 ? "" : `animation-delay-${(i + 1) * 100}`}`}
              >
                <img 
                  src={avatar.src} 
                  alt={avatar.name}
                  className="w-28 h-28 rounded-2xl border-2 border-primary/30 glow-primary"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <Card variant="glass" className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-muted-foreground">
                {isLogin 
                  ? "Sign in to continue your learning journey"
                  : isBusiness 
                    ? "Register your company to find talent"
                    : "Choose your avatar and join the platform"
                }
              </p>
            </div>

            {/* Avatar Selection for Sign Up */}
            {!isLogin && !isBusiness && (
              <div className="mb-8">
                <label className="text-sm font-medium text-muted-foreground mb-4 block text-center">
                  Select Your NFT Avatar
                </label>
                <div className="flex justify-center gap-4">
                  {avatars.map((avatar, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedAvatar(i)}
                      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                        selectedAvatar === i 
                          ? "ring-4 ring-primary scale-105 glow-primary" 
                          : "ring-2 ring-border hover:ring-primary/50"
                      }`}
                    >
                      <img 
                        src={avatar.src} 
                        alt={avatar.name}
                        className="w-20 h-20 object-cover"
                      />
                      {selectedAvatar === i && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                {selectedAvatar !== null && (
                  <p className="text-center text-sm text-primary mt-3">
                    {avatars[selectedAvatar].name} selected
                  </p>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder={isBusiness ? "Contact Name" : "Full Name"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-12"
                      required
                    />
                  </div>
                  
                  {isBusiness && (
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="pl-12"
                        required
                      />
                    </div>
                  )}
                </>
              )}

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-12"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-12"
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full mt-6">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span className="text-primary font-medium">
                  {isLogin ? "Sign up" : "Sign in"}
                </span>
              </button>
            </div>
          </Card>

          {/* Business Toggle */}
          {!isBusiness && (
            <div className="mt-6 text-center">
              <Link 
                to="/auth?type=business"
                className="text-muted-foreground hover:text-secondary transition-colors text-sm"
              >
                Looking to hire? <span className="text-secondary font-medium">Business sign up →</span>
              </Link>
            </div>
          )}
          {isBusiness && (
            <div className="mt-6 text-center">
              <Link 
                to="/auth"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Are you a learner? <span className="text-primary font-medium">Student sign up →</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
