import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { CheckCircle, FileText, Brain, Zap, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)] opacity-30" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Land Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dream Job
                </span>{" "}
                with AI
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Get your resume ATS-optimized, tested with mock AI interviews, and shortlisted instantly. 
                Transform your job search with cutting-edge AI technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <form method="get" action="/resume-upload" className="flex items-center">
                <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Upload Resume
              </Button>
              </form>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-6 text-lg hover:bg-blue-50 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>ATS Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>

          {/* Right Side - AI Dashboard Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-lg w-full">
              {/* Main Dashboard Card */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-2xl border-0 rounded-2xl">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Brain className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">AI Analysis</h3>
                        <p className="text-sm text-gray-500">Resume Score</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">92%</div>
                      <div className="text-xs text-gray-500">Match Score</div>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Keywords</span>
                        <span className="text-gray-900">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Format</span>
                        <span className="text-gray-900">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Experience</span>
                        <span className="text-gray-900">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900 mb-1">AI Suggestions</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Add 3 more technical keywords</li>
                          <li>• Quantify achievements with metrics</li>
                          <li>• Optimize for Software Engineer role</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 p-3 bg-white rounded-full shadow-lg">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}