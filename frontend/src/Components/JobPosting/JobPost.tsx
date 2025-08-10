import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Briefcase, Sparkles } from 'lucide-react';
import JobForm from './JobForm';
import JobPreview from './JobPreview';

export interface JobData {
  title: string;
  company: string;
  location: string;
  employmentType: string;
  salaryRange: string;
  experienceRequired: number;
  skills: string[];
  description: string;
  uploadedFile?: File;
}

const JobPosting: React.FC = () => {
  const [jobData, setJobData] = useState<JobData>({
    title: '',
    company: '',
    location: '',
    employmentType: '',
    salaryRange: '',
    experienceRequired: 0,
    skills: [],
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleJobDataChange = (data: Partial<JobData>) => {
    setJobData(prev => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // You could add success toast here
    }, 2000);
  };

  const isFormValid = jobData.title && jobData.company && jobData.location && 
                     jobData.employmentType && jobData.description;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-2">
          Post a Job
        </h1>
        <p className="text-slate-600 text-lg">
          Create compelling job postings that attract top talent
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
            <JobForm 
              jobData={jobData}
              onJobDataChange={handleJobDataChange}
              isSubmitting={isSubmitting}
            />
          </Card>
        </motion.div>

        {/* Right Column - Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <JobPreview jobData={jobData} />
          
          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid || isSubmitting}
              className={`
                w-full py-4 text-lg font-semibold transition-all duration-200
                ${isFormValid && !isSubmitting 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-2xl' +
                    ' hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                }
              `}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                  Posting Job...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Post Job
                </div>
              )}
            </Button>
            
            {isFormValid && !isSubmitting && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default JobPosting;