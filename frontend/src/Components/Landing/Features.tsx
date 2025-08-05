import { Card } from "../ui/card";
import { FileCheck, Video, BarChart3 } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: FileCheck,
      title: "ATS Resume Scoring",
      description: "Get instant feedback on your resume's compatibility with Applicant Tracking Systems. Our AI analyzes keywords, formatting, and structure to maximize your chances of getting shortlisted.",
      accent: "blue",
    },
    {
      icon: Video,
      title: "Live AI Mock Interviews",
      description: "Practice with our advanced AI interviewer that adapts to your responses. Get real-time feedback on your answers, body language, and communication skills.",
      accent: "purple",
    },
    {
      icon: BarChart3,
      title: "HR-Ready Performance Reports",
      description: "Receive comprehensive reports that HR professionals trust. Track your progress, identify improvement areas, and showcase your interview readiness to potential employers.",
      accent: "blue",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our comprehensive AI-powered platform provides all the tools you need to optimize your resume, 
            practice interviews, and showcase your readiness to employers.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isBlue = feature.accent === "blue";
            
            return (
              <Card
                key={index}
                className="group p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl relative overflow-hidden cursor-pointer"
              >
                {/* Subtle gradient background that appears on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  isBlue 
                    ? "bg-gradient-to-br from-blue-500 to-blue-600" 
                    : "bg-gradient-to-br from-purple-500 to-purple-600"
                }`} />
                
                <div className="relative z-10 text-center space-y-6">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 ${
                      isBlue 
                        ? "bg-blue-50 group-hover:bg-blue-100" 
                        : "bg-purple-50 group-hover:bg-purple-100"
                    }`}>
                      <Icon className={`h-8 w-8 transition-colors duration-500 ${
                        isBlue 
                          ? "text-blue-600 group-hover:text-blue-700" 
                          : "text-purple-600 group-hover:text-purple-700"
                      }`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Subtle accent line that appears on hover */}
                  <div className={`w-0 group-hover:w-12 h-1 mx-auto rounded-full transition-all duration-500 ${
                    isBlue 
                      ? "bg-gradient-to-r from-blue-500 to-blue-600" 
                      : "bg-gradient-to-r from-purple-500 to-purple-600"
                  }`} />
                </div>

                {/* Subtle border accent that appears on hover */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-20 transition-all duration-500 ${
                  isBlue 
                    ? "group-hover:border-blue-200" 
                    : "group-hover:border-purple-200"
                }`} />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Ready to transform your job search?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <button className="px-8 py-3 border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}