import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Building2, 
  MapPin, 
  Clock, 
  DollarSign, 
  GraduationCap,
  Users,
  Heart,
  Share2,
  Bookmark
} from 'lucide-react';
import type { JobData } from './JobPost';

interface JobPreviewProps {
  jobData: JobData;
}

const JobPreview: React.FC<JobPreviewProps> = ({ jobData }) => {
  const hasBasicInfo = jobData.title || jobData.company || jobData.location;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-slate-600 font-medium">Live Preview</span>
      </div>

      <motion.div
        layout
        className="space-y-4"
      >
        {/* Main Job Card */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
          {!hasBasicInfo ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-slate-400" />
              </div>
              <p className="text-slate-500">Start filling the form to see your job preview</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  {/* Company Logo Placeholder */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">
                      {jobData.title || 'Job Title'}
                    </h3>
                    <p className="text-slate-600 mb-2">
                      {jobData.company || 'Company Name'}
                    </p>
                    
                    {/* Location and Type */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      {jobData.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {jobData.location}
                        </div>
                      )}
                      {jobData.employmentType && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {jobData.employmentType.charAt(0).toUpperCase() + jobData.employmentType.slice(1)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-3">
                {/* Salary and Experience */}
                {(jobData.salaryRange || jobData.experienceRequired > 0) && (
                  <div className="flex flex-wrap gap-4 text-sm">
                    {jobData.salaryRange && (
                      <div className="flex items-center gap-1 text-green-600">
                        <DollarSign className="h-3 w-3" />
                        {jobData.salaryRange}
                      </div>
                    )}
                    {jobData.experienceRequired > 0 && (
                      <div className="flex items-center gap-1 text-blue-600">
                        <GraduationCap className="h-3 w-3" />
                        {jobData.experienceRequired} years experience
                      </div>
                    )}
                  </div>
                )}

                {/* Skills */}
                {jobData.skills.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">Required Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {jobData.skills.slice(0, 6).map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-700 hover:from-blue-100 hover:to-purple-100 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {jobData.skills.length > 6 && (
                        <Badge variant="outline" className="text-slate-500">
                          +{jobData.skills.length - 6} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Description Preview */}
                {jobData.description && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">Job Description</p>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {jobData.description.slice(0, 150)}
                      {jobData.description.length > 150 && '...'}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-slate-100">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="hover:bg-slate-50">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Job Stats */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    Posted 2 hours ago
                  </div>
                  <div>
                    15 applicants
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Preview Tips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200/50">
            <div className="space-y-2">
              <h4 className="font-medium text-blue-800">Preview Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Make your job title clear and specific</li>
                <li>• Add relevant skills to attract qualified candidates</li>
                <li>• Include salary range to save time for both parties</li>
                <li>• Write a compelling description highlighting benefits</li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JobPreview;