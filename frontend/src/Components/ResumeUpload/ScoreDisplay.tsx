import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { TrendingUp, Award, Target } from 'lucide-react';

interface ScoreDisplayProps {
  score: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'from-green-500 to-emerald-600';
    if (score >= 80) return 'from-blue-500 to-blue-600';
    if (score >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Great';
    if (score >= 70) return 'Good';
    return 'Needs Improvement';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return Award;
    if (score >= 70) return TrendingUp;
    return Target;
  };

  const ScoreIcon = getScoreIcon(score);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl relative overflow-hidden">
        {/* Background glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getScoreColor(score)} opacity-5`}></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <ScoreIcon className="h-5 w-5 text-slate-600" />
            <h3 className="text-xl font-semibold">ATS Score</h3>
          </div>

          <div className="text-center space-y-4">
            {/* Main Score Display */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className={`
                text-6xl font-bold bg-gradient-to-br ${getScoreColor(score)} 
                bg-clip-text text-transparent drop-shadow-lg
              `}>
                {score}
              </div>
              <div className="text-xl text-slate-600 mt-1">/100</div>
              
              {/* Glow effect around score */}
              <motion.div
                className={`
                  absolute inset-0 bg-gradient-to-br ${getScoreColor(score)} 
                  rounded-full blur-2xl opacity-20 -z-10
                `}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Score Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Badge 
                className={`
                  px-4 py-2 text-sm font-medium text-white
                  bg-gradient-to-r ${getScoreColor(score)} 
                  shadow-lg border-0
                `}
              >
                {getScoreLabel(score)}
              </Badge>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm text-slate-600">
                <span>ATS Compatibility</span>
                <span>{score}%</span>
              </div>
              <div className="relative">
                <Progress 
                  value={0}
                  className="h-3 bg-slate-200"
                />
                <motion.div
                  className={`
                    absolute top-0 left-0 h-3 rounded-full
                    bg-gradient-to-r ${getScoreColor(score)}
                  `}
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-slate-600 leading-relaxed"
            >
              Your resume has been analyzed against ATS algorithms and industry best practices.
            </motion.p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
