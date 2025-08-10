import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Search, Filter, Star } from 'lucide-react';
import CandidateHeader from './CandidateHeader';
import JobFilters from './JobFilters';
import JobMatchCard from './JobMatchCard';
import EmptyState from './EmptyState';

export interface JobMatch {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: 'full-time' | 'part-time' | 'contract' | 'remote';
  matchScore: number;
  skills: string[];
  salary?: string;
  postedDate: string;
  applicants?: number;
}

export interface FilterState {
  location: string;
  matchScore: number;
  jobType: string;
  salaryRange: string;
}

const mockJobs: JobMatch[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    employmentType: 'full-time',
    matchScore: 95,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    salary: '$120,000 - $160,000',
    postedDate: '2024-01-15',
    applicants: 23
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    employmentType: 'full-time',
    matchScore: 88,
    skills: ['JavaScript', 'Node.js', 'PostgreSQL', 'AWS'],
    salary: '$110,000 - $140,000',
    postedDate: '2024-01-14',
    applicants: 45
  },
  {
    id: '3',
    title: 'React Developer',
    company: 'InnovateLabs',
    location: 'Remote',
    employmentType: 'remote',
    matchScore: 82,
    skills: ['React', 'Redux', 'JavaScript', 'CSS'],
    salary: '$90,000 - $120,000',
    postedDate: '2024-01-13',
    applicants: 67
  },
  {
    id: '4',
    title: 'Frontend Engineer',
    company: 'DesignStudio',
    location: 'Los Angeles, CA',
    employmentType: 'full-time',
    matchScore: 76,
    skills: ['Vue.js', 'Sass', 'Figma', 'JavaScript'],
    salary: '$85,000 - $110,000',
    postedDate: '2024-01-12',
    applicants: 12
  },
  {
    id: '5',
    title: 'Web Developer',
    company: 'LocalBusiness',
    location: 'Austin, TX',
    employmentType: 'part-time',
    matchScore: 65,
    skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    salary: '$40,000 - $60,000',
    postedDate: '2024-01-11',
    applicants: 8
  },
  {
    id: '6',
    title: 'UI/UX Developer',
    company: 'CreativeAgency',
    location: 'Seattle, WA',
    employmentType: 'contract',
    matchScore: 58,
    skills: ['HTML', 'CSS', 'Sketch', 'Photoshop'],
    salary: '$70,000 - $90,000',
    postedDate: '2024-01-10',
    applicants: 34
  }
];

const JobMatches: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    matchScore: 0,
    jobType: '',
    salaryRange: ''
  });

  const [filteredJobs, setFilteredJobs] = useState<JobMatch[]>(mockJobs);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);

    // Apply filters
    let filtered = mockJobs.filter(job => {
      if (updatedFilters.location && !job.location.toLowerCase().includes(updatedFilters.location.toLowerCase())) {
        return false;
      }
      if (updatedFilters.matchScore && job.matchScore < updatedFilters.matchScore) {
        return false;
      }
      if (updatedFilters.jobType && updatedFilters.jobType !== 'all' && job.employmentType !== updatedFilters.jobType) {
        return false;
      }
      return true;
    });

    setFilteredJobs(filtered);
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      matchScore: 0,
      jobType: '',
      salaryRange: ''
    });
    setFilteredJobs(mockJobs);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
          AI Job Matches
        </h1>
        <p className="text-slate-600 text-lg">
          Personalized job recommendations powered by AI
        </p>
      </motion.div>

      {/* Candidate Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <CandidateHeader />
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <JobFilters 
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
          totalJobs={filteredJobs.length}
        />
      </motion.div>

      {/* Job Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {filteredJobs.length > 0 ? (
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <JobMatchCard job={job} />
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState onClearFilters={clearFilters} />
        )}
      </motion.div>
    </div>
  );
};

export default JobMatches;