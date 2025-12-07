import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Zap,
  Home,
  Upload,
  BookOpen,
  BarChart3,
  Coins,
  Settings,
  PlusCircle,
  Users,
  Eye,
  TrendingUp,
  DollarSign
} from "lucide-react";
import nftAvatar1 from "@/assets/nft-avatar-1.png";

const CreatorPortal = () => {
  const stats = [
    { label: "Total Students", value: "12,450", icon: Users, change: "+12%" },
    { label: "Courses Published", value: "8", icon: BookOpen, change: "+2" },
    { label: "Total Views", value: "89.2K", icon: Eye, change: "+24%" },
    { label: "Earnings (LEARN)", value: "45,200", icon: Coins, change: "+18%" },
  ];

  const courses = [
    { title: "Blockchain Fundamentals", students: 5420, revenue: 15200, rating: 4.9 },
    { title: "Smart Contract Development", students: 3890, revenue: 12800, rating: 4.8 },
    { title: "DeFi Masterclass", students: 2140, revenue: 8900, rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-border/50 p-6 glass">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
            <Zap className="w-6 h-6 text-secondary-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text-secondary">Creator Hub</span>
        </Link>

        <nav className="flex-1 space-y-2">
          {[
            { icon: Home, label: "Overview", active: true },
            { icon: BookOpen, label: "My Courses", active: false },
            { icon: Upload, label: "Upload Content", active: false },
            { icon: BarChart3, label: "Analytics", active: false },
            { icon: Coins, label: "Earnings", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active
                  ? "bg-secondary/10 text-secondary border border-secondary/30"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-border/50">
          <div className="flex items-center gap-3">
            <img
              src={nftAvatar1}
              alt="Creator Avatar"
              className="w-12 h-12 rounded-xl border border-secondary/30"
            />
            <div>
              <div className="font-medium">Cyber Guardian</div>
              <div className="text-sm text-muted-foreground">Top Creator</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-40 glass border-b border-border/30 px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Creator Dashboard</h1>
              <p className="text-muted-foreground">Manage your courses and track performance</p>
            </div>
            <Button variant="accent" size="lg">
              <PlusCircle className="w-5 h-5 mr-2" />
              New Course
            </Button>
          </div>
        </header>

        <div className="p-6 lg:p-10 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} variant="glass" className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    <p className="text-sm text-secondary mt-1 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Revenue Chart Placeholder */}
          <Card variant="glass" className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Revenue Overview</h2>
              <select className="bg-muted border border-border rounded-lg px-3 py-2 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
              </select>
            </div>
            <div className="h-64 flex items-end justify-between gap-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                const heights = [40, 65, 45, 80, 60, 35, 70];
                return (
                  <div key={day} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-secondary to-accent transition-all duration-300 hover:opacity-80"
                      style={{ height: `${heights[i]}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{day}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Course Performance */}
          <Card variant="glass" className="overflow-hidden">
            <div className="p-6 border-b border-border/50">
              <h2 className="text-xl font-semibold">Course Performance</h2>
            </div>
            <div className="divide-y divide-border/50">
              {courses.map((course, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                  <div>
                    <h3 className="font-medium">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {course.students.toLocaleString()} students • ⭐ {course.rating}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-secondary">
                      {course.revenue.toLocaleString()} LEARN
                    </div>
                    <p className="text-sm text-muted-foreground">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CreatorPortal;
