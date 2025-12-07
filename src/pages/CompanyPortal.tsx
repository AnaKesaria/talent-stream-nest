import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Zap,
  Home,
  Users,
  Briefcase,
  Search,
  Settings,
  Filter,
  MapPin,
  Award,
  CheckCircle2,
  ExternalLink,
  Star
} from "lucide-react";
import nftAvatar1 from "@/assets/nft-avatar-1.png";
import nftAvatar2 from "@/assets/nft-avatar-2.png";
import nftAvatar3 from "@/assets/nft-avatar-3.png";

const CompanyPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const talents = [
    {
      avatar: nftAvatar1,
      name: "Alex Chen",
      title: "Blockchain Developer",
      location: "San Francisco, CA",
      skills: ["Solidity", "Web3.js", "React"],
      certificates: 8,
      verified: true,
      rating: 4.9
    },
    {
      avatar: nftAvatar2,
      name: "Maria Santos",
      title: "Smart Contract Auditor",
      location: "New York, NY",
      skills: ["Security", "Solidity", "DeFi"],
      certificates: 12,
      verified: true,
      rating: 5.0
    },
    {
      avatar: nftAvatar3,
      name: "James Wilson",
      title: "Full Stack Web3 Dev",
      location: "Austin, TX",
      skills: ["TypeScript", "Rust", "Ethereum"],
      certificates: 6,
      verified: true,
      rating: 4.8
    },
  ];

  const jobPostings = [
    { title: "Senior Blockchain Developer", applicants: 45, status: "Active" },
    { title: "DeFi Protocol Engineer", applicants: 28, status: "Active" },
    { title: "Web3 Security Analyst", applicants: 32, status: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-border/50 p-6 glass">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
            <Zap className="w-6 h-6 text-accent-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text-accent">Enterprise</span>
        </Link>

        <nav className="flex-1 space-y-2">
          {[
            { icon: Home, label: "Dashboard", active: true },
            { icon: Users, label: "Talent Pool", active: false },
            { icon: Briefcase, label: "Job Postings", active: false },
            { icon: Award, label: "Verifications", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active
                  ? "bg-accent/10 text-accent border border-accent/30"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-border/50">
          <Card variant="gradient" className="p-4">
            <p className="text-sm font-medium mb-2">Enterprise Plan</p>
            <p className="text-xs text-muted-foreground mb-3">Unlimited verifications</p>
            <Button variant="accent" size="sm" className="w-full">
              Manage Subscription
            </Button>
          </Card>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-40 glass border-b border-border/30 px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Find Verified Talent</h1>
              <p className="text-muted-foreground">Search candidates with blockchain-verified credentials</p>
            </div>
            <Button variant="accent" size="lg">
              <Briefcase className="w-5 h-5 mr-2" />
              Post Job
            </Button>
          </div>
        </header>

        <div className="p-6 lg:p-10 space-y-8">
          {/* Search Section */}
          <Card variant="glass" className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by skills, role, or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button variant="accent">Search Talent</Button>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" className="p-6">
              <div className="text-3xl font-bold gradient-text-accent">12,450</div>
              <p className="text-muted-foreground">Verified Candidates</p>
            </Card>
            <Card variant="glass" className="p-6">
              <div className="text-3xl font-bold gradient-text-accent">25,000+</div>
              <p className="text-muted-foreground">NFT Certificates</p>
            </Card>
            <Card variant="glass" className="p-6">
              <div className="text-3xl font-bold gradient-text-accent">98%</div>
              <p className="text-muted-foreground">Verification Accuracy</p>
            </Card>
          </div>

          {/* Talent Grid */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Featured Candidates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {talents.map((talent, i) => (
                <Card key={i} variant="glass" className="p-6 hover:border-accent/30 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={talent.avatar}
                      alt={talent.name}
                      className="w-16 h-16 rounded-xl border border-accent/30"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{talent.name}</h3>
                        {talent.verified && (
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{talent.title}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {talent.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {talent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs rounded-lg bg-accent/10 text-accent border border-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-accent" />
                        {talent.certificates} certs
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        {talent.rating}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Job Postings */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Your Job Postings</h2>
            <Card variant="glass" className="overflow-hidden">
              <div className="divide-y divide-border/50">
                {jobPostings.map((job, i) => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                    <div>
                      <h3 className="font-medium">{job.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {job.applicants} applicants
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.status === "Active"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {job.status}
                      </span>
                      <Button variant="outline" size="sm">
                        View Applicants
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CompanyPortal;
