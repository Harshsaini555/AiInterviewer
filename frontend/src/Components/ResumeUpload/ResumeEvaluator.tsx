import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Upload, Brain, Sparkles, CheckCircle} from 'lucide-react';
import {FileUpload} from './FileUpload';
import {ScoreDisplay} from './ScoreDisplay';
import {BadgeUnlock} from './BadgeUnlock';
import {SuggestionsList} from './SuggestionList';
import axios from "axios";

type UploadState = 'idle' | 'uploading' | 'success' | 'error';


export const ResumeEvaluator: React.FC = () => {
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const [showBadge, setShowBadge] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setUploadState('idle');
    setShowBadge(false);
  };
 const handleUpload = async () => {
    if (!selectedFile) return alert("No file selected.");

    const formData = new FormData();
    formData.append("resume", selectedFile);

    setUploadState("uploading");

    try {
        const res = await axios.post("http://localhost:3000/api/resume/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        });

        setResult(res.data);

        setUploadState("success");

        toast.success("Resume uploaded successfully!", {
        icon: <CheckCircle className="h-4 w-4 text-green-500" />,
        });

        if (result.atsResult.score >= 80) {
        setTimeout(() => setShowBadge(true), 1000);
        }

    } catch (err: any) {
        console.error("Upload error:", err);

        setUploadState("error");

        toast.error("Upload failed: " + (err.response?.data?.message || err.message), {
        icon: "⚠️",
        });
    }
    };



  const handleReset = () => {
    setSelectedFile(null);
    setUploadState('idle');
    setResult(null);
    setShowBadge(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-2">
          AI Resume Evaluator
        </h1>
        <p className="text-slate-600 text-lg">
          Get instant AI-powered feedback and improve your resume's ATS compatibility
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Upload Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Upload className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Upload Your Resume</h2>
            </div>

            <FileUpload 
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
              uploadState={uploadState}
            />

            {selectedFile && uploadState === 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <Button 
                  onClick={handleUpload}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  size="lg"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Analyze Resume with AI
                </Button>
              </motion.div>
            )}

            {uploadState === 'uploading' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center space-y-4"
              >
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
                </div>
                <p className="text-slate-600 font-medium">Analyzing your resume...</p>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            )}
          </Card>
        </motion.div>

        {/* Right Column - Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <AnimatePresence>
            {result && uploadState === 'success' && (
              <>
                <ScoreDisplay score={result.atsResult.score} />
                <SuggestionsList suggestions={result.atsResult.suggestions} />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button 
                    onClick={handleReset}
                    variant="outline"
                    className="w-full border-slate-300 hover:bg-slate-50"
                  >
                    Analyze Another Resume
                  </Button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Badge Unlock Popup */}
      <AnimatePresence>
        {showBadge && result && result.atsResult.score >= 80 && (
          <BadgeUnlock 
            score={result.atsResult.score}
            onClose={() => setShowBadge(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
