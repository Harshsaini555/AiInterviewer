import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Trophy, X, Sparkles } from 'lucide-react';

interface BadgeUnlockProps {
  score: number;
  onClose: () => void;
}

export const BadgeUnlock: React.FC<BadgeUnlockProps> = ({ score, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'];

    // Create confetti particles
    for (let i = 0; i < 150; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach((particle, index) => {
        particle.y += particle.vy;
        particle.x += particle.vx;
        particle.vy += 0.1; // gravity
        particle.rotation += particle.rotationSpeed;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation * Math.PI / 180);
        ctx.fillStyle = particle.color;
        ctx.fillRect(-3, -3, 6, 6);
        ctx.restore();

        // Remove particles that are off screen
        if (particle.y > canvas.height) {
          confetti.splice(index, 1);
        }
      });

      if (confetti.length > 0) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 10 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="p-8 max-w-md bg-white/95 backdrop-blur-sm border-white/20 shadow-2xl relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10"></div>
          
          <div className="relative z-10">
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute -top-2 -right-2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="text-center space-y-6">
              {/* Badge Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-full shadow-2xl">
                    <Trophy className="h-12 w-12 text-white" />
                  </div>
                  
                  {/* Sparkle effects */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Sparkles className="h-6 w-6 text-yellow-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Achievement Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <h2 className="text-2xl font-bold text-slate-800">
                  🎉 Badge Unlocked!
                </h2>
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-lg font-semibold">
                  Resume Pro
                </Badge>
              </motion.div>

              {/* Score Display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-4 bg-slate-50 rounded-xl"
              >
                <p className="text-slate-600 mb-2">Your ATS Score</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {score}/100
                </div>
              </motion.div>

              {/* Achievement Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-slate-600 leading-relaxed"
              >
                Congratulations! Your resume scored {score}/100, earning you the 
                <span className="font-semibold text-blue-600"> Resume Pro </span>
                badge. This means your resume is highly optimized for ATS systems!
              </motion.p>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Button 
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Continue
                </Button>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
