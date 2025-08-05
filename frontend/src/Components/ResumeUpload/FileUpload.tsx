import React, { useCallback, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { FileText, Upload, X } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  uploadState: 'idle' | 'uploading' | 'success' | 'error';
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, selectedFile, uploadState }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const validFile = files.find(file => 
      file.type === 'application/pdf' || 
      file.type === 'application/msword' || 
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
    
    if (validFile) {
      onFileSelect(validFile);
    }
  }, [onFileSelect]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const removeFile = () => {
    onFileSelect(null as any);
  };

  return (
    <div className="space-y-4">
      {!selectedFile ? (
        <motion.div
          className={`
            relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200
            ${isDragging 
              ? 'border-blue-500 bg-blue-50/50 scale-105' 
              : 'border-slate-300 hover:border-blue-400 hover:bg-blue-50/30'
            }
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className={`
                p-4 rounded-full transition-colors duration-200
                ${isDragging ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'}
              `}>
                <Upload className="h-8 w-8" />
              </div>
            </div>
            
            <div>
              <p className="text-lg font-medium text-slate-700 mb-2">
                Drag & drop your resume here
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Supports PDF, DOC, and DOCX files up to 10MB
              </p>
              
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
                id="resume-upload"
              />
              <Button 
                asChild
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
              >
                <label htmlFor="resume-upload" className="cursor-pointer">
                  Choose File
                </label>
              </Button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-slate-700 truncate max-w-xs">
                {selectedFile.name}
              </p>
              <p className="text-sm text-slate-500">
                {(selectedFile.size / 1024 / 1024).toFixed(1)} MB
              </p>
            </div>
          </div>
          
          {uploadState !== 'uploading' && (
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="text-slate-500 hover:text-red-500 hover:bg-red-50"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </motion.div>
      )}
    </div>
  );
};
