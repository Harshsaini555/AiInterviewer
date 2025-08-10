import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { User, Star, TrendingUp, MapPin, Briefcase } from 'lucide-react';

const CandidateHeader: React.FC = () => {
  const profileScore = 87;
  const candidateName = "Sarah Johnson";
  const title = "Senior Frontend Developer";
  const location = "San Francisco, CA";
  const experience = "5+ years";

  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Profile Avatar */}
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <User className="h-10 w-10 text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 rounded-full shadow-lg">
              <Star className="h-3 w-3 mr-1" />
              Pro
            </Badge>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-1">{candidateName}</h2>
          <p className="text-lg text-slate-600 mb-2">{title}</p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500 mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {location}
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {experience}
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {['React', 'TypeScript', 'Next.js', 'Node.js'].map((skill, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="bg-blue-50 border-blue-200 text-blue-700"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Profile Score */}
        <div className="text-center">
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {profileScore}
                </div>
                <div className="text-xs text-slate-500">Score</div>
              </div>
            </motion.div>
            
            {/* Circular progress */}
            <svg className="absolute inset-0 w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-slate-200"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className="drop-shadow-sm"
                initial={{ strokeDasharray: "0 251.2" }}
                animate={{ strokeDasharray: `${(profileScore / 100) * 251.2} 251.2` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="h-4 w-4" />
            Profile Strong
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200/50">
        <div className="text-center">
          <div className="text-xl font-bold text-slate-800">24</div>
          <div className="text-sm text-slate-600">Matches Today</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-slate-800">156</div>
          <div className="text-sm text-slate-600">Total Matches</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-slate-800">12</div>
          <div className="text-sm text-slate-600">Applications</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-slate-800">3</div>
          <div className="text-sm text-slate-600">Interviews</div>
        </div>
      </div>
    </Card>
  );
};

export default CandidateHeader;