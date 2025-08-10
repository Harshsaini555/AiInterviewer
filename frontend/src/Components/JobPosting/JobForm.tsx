import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Clock, 
  DollarSign, 
  GraduationCap, 
  Code, 
  FileText,
  Upload,
  X
} from 'lucide-react';
import type { JobData } from './JobPost';

interface JobFormProps {
  jobData: JobData;
  onJobDataChange: (data: Partial<JobData>) => void;
  isSubmitting: boolean;
}

const JobForm: React.FC<JobFormProps> = ({ jobData, onJobDataChange, isSubmitting }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSkillAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim()) {
      event.preventDefault();
      const newSkill = event.currentTarget.value.trim();
      if (!jobData.skills.includes(newSkill)) {
        onJobDataChange({ skills: [...jobData.skills, newSkill] });
      }
      event.currentTarget.value = '';
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    onJobDataChange({ 
      skills: jobData.skills.filter(skill => skill !== skillToRemove) 
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onJobDataChange({ uploadedFile: file });
      
      // Extract text from file (simplified - in real app you'd use file reading API)
      const reader = new FileReader();
      reader.onload = (e) => {
        // This is a simplified example - real implementation would parse PDF/DOC
        const text = e.target?.result as string;
        if (text && !jobData.description) {
          onJobDataChange({ description: `Uploaded content: ${file.name}` });
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-5 w-5 text-slate-600" />
        <h2 className="text-xl font-semibold">Job Details</h2>
      </div>

      {/* Job Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        <Label className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-blue-600" />
          Job Title
        </Label>
        <Input
          placeholder="e.g. Senior Frontend Developer"
          value={jobData.title}
          onChange={(e) => onJobDataChange({ title: e.target.value })}
          className="bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-blue-400 focus:ring-blue-400/20"
        />
      </motion.div>

      {/* Company Name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2"
      >
        <Label className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-purple-600" />
          Company Name
        </Label>
        <Input
          placeholder="e.g. TechCorp Inc."
          value={jobData.company}
          onChange={(e) => onJobDataChange({ company: e.target.value })}
          className="bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-purple-400 focus:ring-purple-400/20"
        />
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <Label className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-green-600" />
          Location
        </Label>
        <Input
          placeholder="e.g. San Francisco, CA or Remote"
          value={jobData.location}
          onChange={(e) => onJobDataChange({ location: e.target.value })}
          className="bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-green-400 focus:ring-green-400/20"
        />
      </motion.div>

      {/* Employment Type & Salary Range */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <Label className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-orange-600" />
            Employment Type
          </Label>
          <Select value={jobData.employmentType} onValueChange={(value) => onJobDataChange({ employmentType: value })}>
            <SelectTrigger className="bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-orange-400">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <Label className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-600" />
            Salary Range
          </Label>
          <Input
            placeholder="e.g. $80,000 - $120,000"
            value={jobData.salaryRange}
            onChange={(e) => onJobDataChange({ salaryRange: e.target.value })}
            className="bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-green-400 focus:ring-green-400/20"
          />
        </motion.div>
      </div>

      {/* Experience Required */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-2"
      >
        <Label className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-indigo-600" />
          Experience Required (years)
        </Label>
        <Input
          type="number"
          min="0"
          max="20"
          placeholder="e.g. 3"
          value={jobData.experienceRequired || ''}
          onChange={(e) => onJobDataChange({ experienceRequired: parseInt(e.target.value) || 0 })}
          className="bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-indigo-400 focus:ring-indigo-400/20"
        />
      </motion.div>

      {/* Skills Required */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-2"
      >
        <Label className="flex items-center gap-2">
          <Code className="h-4 w-4 text-cyan-600" />
          Skills Required
        </Label>
        <Input
          placeholder="Type a skill and press Enter"
          onKeyDown={handleSkillAdd}
          className="bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-cyan-400 focus:ring-cyan-400/20"
        />
        {jobData.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {jobData.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 hover:from-cyan-200 hover:to-blue-200 transition-colors"
              >
                {skill}
                <button
                  onClick={() => handleSkillRemove(skill)}
                  className="ml-1 hover:text-red-600 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </motion.div>

      {/* Upload Job Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="space-y-2"
      >
        <Label className="flex items-center gap-2">
          <Upload className="h-4 w-4 text-slate-600" />
          Upload Job Description (Optional)
        </Label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="hidden"
        />
        <Button
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          className="w-full border-dashed border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
        >
          <Upload className="h-4 w-4 mr-2" />
          Choose PDF or DOC file
        </Button>
        {jobData.uploadedFile && (
          <p className="text-sm text-slate-600">
            Uploaded: {jobData.uploadedFile.name}
          </p>
        )}
      </motion.div>

      {/* Job Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="space-y-2"
      >
        <Label className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-slate-600" />
          Job Description
        </Label>
        <Textarea
          placeholder="Describe the role, responsibilities, requirements, and benefits..."
          value={jobData.description}
          onChange={(e) => onJobDataChange({ description: e.target.value })}
          className="min-h-32 bg-white/50 backdrop-blur-sm border-slate-200/50 focus:border-slate-400 focus:ring-slate-400/20 resize-y"
        />
      </motion.div>
    </div>
  );
};

export default JobForm;