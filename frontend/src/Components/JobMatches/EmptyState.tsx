import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Search, RefreshCw, Target, TrendingUp } from 'lucide-react';

interface EmptyStateProps {
  onClearFilters: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onClearFilters }) => {
  return (
    <Card className="p-12 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Illustration */}
        <div className="relative mx-auto w-48 h-48">
          {/* Background circles */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Search className="h-12 w-12 text-slate-500" />
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-4 right-4 bg-blue-500 p-2 rounded-full shadow-lg"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Target className="h-4 w-4 text-white" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-4 left-4 bg-purple-500 p-2 rounded-full shadow-lg"
            animate={{
              y: [5, -5, 5],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <TrendingUp className="h-4 w-4 text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-800">
            No Job Matches Found
          </h3>
          <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
            We couldn't find any jobs matching your current filters. Try adjusting your search criteria or clearing filters to see more opportunities.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            onClick={onClearFilters}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Clear All Filters
          </Button>
          
          <Button
            variant="outline"
            className="border-slate-300 hover:bg-slate-50 hover:border-slate-400"
          >
            <Search className="h-4 w-4 mr-2" />
            Expand Search
          </Button>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200/50 mt-8">
          <h4 className="font-semibold text-blue-800 mb-2">Search Tips</h4>
          <ul className="text-sm text-blue-700 space-y-1 text-left max-w-md mx-auto">
            <li>• Try broader location searches (e.g., "California" instead of specific cities)</li>
            <li>• Lower your minimum match score to see more opportunities</li>
            <li>• Consider different job types (remote, contract, part-time)</li>
            <li>• Update your profile to get better AI recommendations</li>
          </ul>
        </div>
      </motion.div>
    </Card>
  );
};

export default EmptyState;