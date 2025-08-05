import { Card } from "../ui/card";
import { Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CardCarousel } from "../ui/card-carousel"


export function TestimonialsSection() {
  const images = [
    { src: "../../../public/image.png", alt: "Image 1" },
    { src: "../../../public/image.png", alt: "Image 2" },
    { src: "../../../public/image.png", alt: "Image 3" },
  ]

//   const StarRating = ({ rating }: { rating: number }) => {
//     return (
        
//       <div className="flex gap-1 mb-4">
//         {[...Array(5)].map((_, index) => (
//           <Star
//             key={index}
//             className={`h-5 w-5 ${
//               index < rating
//                 ? "fill-yellow-400 text-yellow-400"
//                 : "fill-gray-200 text-gray-200"
//             }`}
//           />
//         ))}
//       </div>
//     );
//   };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/70 via-purple-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
              Users Say
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join thousands of professionals who have transformed their careers with our AI-powered platform.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="pt-40">
        <CardCarousel
            images={images}
            autoplayDelay={2000}
            showPagination={true}
            showNavigation={true}
        />
        </div>
      </div>
      
      {/* Custom scrollbar styles for mobile */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}