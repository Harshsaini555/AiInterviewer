import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { CheckCircle, Lightbulb } from 'lucide-react';

interface SuggestionsListProps {
  suggestions: string[];
}

export const SuggestionsList: React.FC<SuggestionsListProps> = ({ suggestions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="p-6 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          <h3 className="text-xl font-semibold">AI Suggestions</h3>
        </div>

        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="group flex items-start gap-3 p-4 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle className="h-5 w-5 text-green-500 group-hover:text-green-600 transition-colors" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors">
                  {suggestion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
        >
          <p className="text-sm text-blue-700 leading-relaxed">
            💡 <strong>Pro Tip:</strong> Implementing these suggestions can significantly improve your resume's ATS score and increase your chances of getting interviews.
          </p>
        </motion.div>
      </Card>
    </motion.div>
  );
};
