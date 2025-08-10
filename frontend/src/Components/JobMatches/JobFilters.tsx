import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';
import { Filter, X, Search, MapPin, Target, Briefcase } from 'lucide-react';
import type { FilterState } from './JobMatches';

interface JobFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onClearFilters: () => void;
  totalJobs: number;
}

const JobFilters: React.FC<JobFiltersProps> = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  totalJobs 
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== '' && value !== 0 && value !== 'all'
  );

  return (
    <Card className="p-4 bg-white/70 backdrop-blur-sm border-white/20 shadow-lg">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Filter className="h-5 w-5 text-slate-600" />
          <h3 className="font-semibold text-slate-800">Filters</h3>
          <div className="px-3 py-1 bg-blue-100 rounded-full">
            <span className="text-sm font-medium text-blue-700">
              {totalJobs} {totalJobs === 1 ? 'job' : 'jobs'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-slate-500 hover:text-slate-700"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-slate-600"
          >
            {isExpanded ? 'Less' : 'More'} Filters
          </Button>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Location Filter */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-blue-600" />
            Location
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="City, state, or remote"
              value={filters.location}
              onChange={(e) => onFilterChange({ location: e.target.value })}
              className="pl-10 bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-blue-400"
            />
          </div>
        </div>

        {/* Job Type Filter */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-sm">
            <Briefcase className="h-4 w-4 text-purple-600" />
            Job Type
          </Label>
          <Select 
            value={filters.jobType || 'all'} 
            onValueChange={(value) => onFilterChange({ jobType: value === 'all' ? '' : value })}
          >
            <SelectTrigger className="bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-purple-400">
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any type</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Match Score Filter */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-green-600" />
            Min Match Score: {filters.matchScore}%
          </Label>
          <Slider
            value={[filters.matchScore]}
            onValueChange={(value) => onFilterChange({ matchScore: value[0] })}
            max={100}
            step={5}
            className="w-full"
          />
        </div>
      </div>

      {/* Expanded Filters */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="border-t border-slate-200/50 pt-4 space-y-4">
          {/* Salary Range Filter */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Salary Range</Label>
            <Select 
              value={filters.salaryRange || 'all'} 
              onValueChange={(value) => onFilterChange({ salaryRange: value === 'all' ? '' : value })}
            >
              <SelectTrigger className="bg-white/50 backdrop-blur-sm border-slate-200/50">
                <SelectValue placeholder="Any salary" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any salary</SelectItem>
                <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                <SelectItem value="150k+">$150,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Toggle Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 bg-slate-50/50 rounded-lg">
              <div>
                <Label className="text-sm font-medium">Remote Only</Label>
                <p className="text-xs text-slate-500">Show only remote positions</p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-slate-50/50 rounded-lg">
              <div>
                <Label className="text-sm font-medium">Recent Posts</Label>
                <p className="text-xs text-slate-500">Posted within 7 days</p>
              </div>
              <Switch />
            </div>
          </div>

          {/* Experience Level */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Experience Level</Label>
            <div className="flex flex-wrap gap-2">
              {['Entry Level', 'Mid Level', 'Senior Level', 'Executive'].map((level) => (
                <Button
                  key={level}
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

export default JobFilters;