import { Card } from "../ui/card";
import { Upload, Target, Video, FileCheck2 } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Upload Resume",
      icon: Upload,
      description: "Simply upload your resume and our AI will instantly analyze its structure, keywords, and formatting.",
      accent: "blue",
    },
    {
      number: 2,
      title: "Get ATS Score",
      icon: Target,
      description: "Receive a comprehensive ATS compatibility score with detailed insights and improvement suggestions.",
      accent: "purple",
    },
    {
      number: 3,
      title: "Take AI Interview",
      icon: Video,
      description: "Practice with our advanced AI interviewer that simulates real interview scenarios and provides feedback.",
      accent: "blue",
    },
    {
      number: 4,
      title: "Get Shortlisted & View Report",
      icon: FileCheck2,
      description: "Download your HR-ready performance report and track your progress toward landing your dream job.",
      accent: "purple",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Transform your job search in just 4 simple steps. Our AI-powered platform guides you 
            from resume optimization to interview success.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full w-full opacity-30"></div>
            </div>
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isBlue = step.accent === "blue";
                const isLast = index === steps.length - 1;
                
                return (
                  <div key={index} className="relative">
                    <Card className="group p-6 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl relative overflow-hidden cursor-pointer">
                      {/* Hover background gradient */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                        isBlue 
                          ? "bg-gradient-to-br from-blue-500 to-blue-600" 
                          : "bg-gradient-to-br from-purple-500 to-purple-600"
                      }`} />
                      
                      <div className="relative z-10 text-center space-y-4">
                        {/* Number Badge */}
                        <div className="flex justify-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500 group-hover:scale-110 ${
                            isBlue 
                              ? "bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700" 
                              : "bg-gradient-to-r from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700"
                          }`}>
                            {step.number}
                          </div>
                        </div>

                        {/* Icon */}
                        <div className="flex justify-center">
                          <div className={`p-3 rounded-xl transition-all duration-500 group-hover:scale-105 ${
                            isBlue 
                              ? "bg-blue-50 group-hover:bg-blue-100" 
                              : "bg-purple-50 group-hover:bg-purple-100"
                          }`}>
                            <Icon className={`h-6 w-6 transition-colors duration-500 ${
                              isBlue 
                                ? "text-blue-600 group-hover:text-blue-700" 
                                : "text-purple-600 group-hover:text-purple-700"
                            }`} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>

                      {/* Hover border effect */}
                      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-20 transition-all duration-500 ${
                        isBlue 
                          ? "group-hover:border-blue-200" 
                          : "group-hover:border-purple-200"
                      }`} />
                    </Card>

                    {/* Connector Arrow (not for last item) */}
                    {!isLast && (
                      <div className="absolute top-20 -right-4 w-8 h-8 flex items-center justify-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isBlue ? "bg-blue-500" : "bg-purple-500"
                        }`}>
                          <div className="w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isBlue = step.accent === "blue";
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                <Card className="group p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <div className="flex items-start gap-4">
                    {/* Left side - Number and Icon */}
                    <div className="flex flex-col items-center space-y-3 flex-shrink-0">
                      {/* Number Badge */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                        isBlue 
                          ? "bg-gradient-to-r from-blue-500 to-blue-600" 
                          : "bg-gradient-to-r from-purple-500 to-purple-600"
                      }`}>
                        {step.number}
                      </div>

                      {/* Connector line (not for last item) */}
                      {!isLast && (
                        <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                      )}
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${
                          isBlue ? "bg-blue-50" : "bg-purple-50"
                        }`}>
                          <Icon className={`h-5 w-5 ${
                            isBlue ? "text-blue-600" : "text-purple-600"
                          }`} />
                        </div>
                        <h3 className="font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Ready to get started?</span>
          </div>
          <div>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Your Journey Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}