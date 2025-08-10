import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Building2, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  ExternalLink,
  Heart,
  Bookmark,
  TrendingUp
} from 'lucide-react';
import type { JobMatch } from './JobMatches';

interface JobMatchCardProps {
  job: JobMatch;
}

const JobMatchCard: React.FC<JobMatchCardProps> = ({ job }) => {
  const getMatchColor = (score: number) => {
    if (score >= 90) return 'from-green-500 to-emerald-600';
    if (score >= 80) return 'from-blue-500 to-cyan-600';
    if (score >= 70) return 'from-yellow-500 to-orange-500';
    if (score >= 60) return 'from-orange-500 to-red-500';
    return 'from-red-500 to-red-600';
  };

  const getMatchBgColor = (score: number) => {
    if (score >= 90) return 'from-green-50 to-emerald-50';
    if (score >= 80) return 'from-blue-50 to-cyan-50';
    if (score >= 70) return 'from-yellow-50 to-orange-50';
    if (score >= 60) return 'from-orange-50 to-red-50';
    return 'from-red-50 to-red-100';
  };

  const getMatchTextColor = (score: number) => {
    if (score >= 90) return 'text-green-700';
    if (score >= 80) return 'text-blue-700';
    if (score >= 70) return 'text-yellow-700';
    if (score >= 60) return 'text-orange-700';
    return 'text-red-700';
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    return `${diffDays} days ago`;
  };

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card className={`
        p-6 bg-white/80 backdrop-blur-sm border-white/30 shadow-lg hover:shadow-2xl 
        transition-all duration-300 relative overflow-hidden
        ${job.matchScore >= 80 ? 'ring-2 ring-blue-200/50' : ''}
      `}>
        {/* High match gradient background */}
        {job.matchScore >= 80 && (
          <div className={`
            absolute inset-0 bg-gradient-to-br ${getMatchBgColor(job.matchScore)} opacity-30
          `} />
        )}
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4 flex-1">
              {/* Company Logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="h-6 w-6 text-slate-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-slate-800 mb-1 truncate">
                  {job.title}
                </h3>
                <p className="text-slate-600 mb-2">{job.company}</p>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {job.employmentType.charAt(0).toUpperCase() + job.employmentType.slice(1).replace('-', ' ')}
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      {job.salary}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Match Score */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className={`
                  w-16 h-16 rounded-full bg-gradient-to-br ${getMatchBgColor(job.matchScore)} 
                  flex items-center justify-center border-2 border-white shadow-lg
                `}>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${getMatchTextColor(job.matchScore)}`}>
                      {job.matchScore}
                    </div>
                    <div className={`text-xs ${getMatchTextColor(job.matchScore)} opacity-75`}>
                      match
                    </div>
                  </div>
                </div>
                
                {/* Circular progress indicator */}
                <svg className="absolute inset-0 w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-slate-200"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke={`url(#gradient-${job.id})`}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 219.8" }}
                    animate={{ strokeDasharray: `${(job.matchScore / 100) * 219.8} 219.8` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id={`gradient-${job.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      {job.matchScore >= 90 ? (
                        <>
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#059669" />
                        </>
                      ) : job.matchScore >= 80 ? (
                        <>
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#0891B2" />
                        </>
                      ) : job.matchScore >= 70 ? (
                        <>
                          <stop offset="0%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#EA580C" />
                        </>
                      ) : (
                        <>
                          <stop offset="0%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#DC2626" />
                        </>
                      )}
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {job.matchScore >= 80 && (
                <Badge className={`
                  bg-gradient-to-r ${getMatchColor(job.matchScore)} text-white text-xs px-2 py-1
                `}>
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Top Match
                </Badge>
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {job.skills.slice(0, 4).map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 4 && (
                <Badge variant="outline" className="text-slate-500">
                  +{job.skills.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {job.applicants} applicants
              </div>
              <div>
                {formatTimeAgo(job.postedDate)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-red-500 hover:bg-red-50"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-blue-500 hover:bg-blue-50"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button
                className={`
                  ${job.matchScore >= 80 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }
                  transition-all duration-200
                `}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default JobMatchCard;