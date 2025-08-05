import { useState } from "react";
import { Menu, X, Upload } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" }
  ];

  const handleGetStarted = () => {
    // Placeholder for get started functionality
    console.log("Opening get started flow...");
  };

  const handleSignIn = () => {
    // Placeholder for sign in functionality
    console.log("Opening sign in...");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RM</span>
              </div>
              <span className="text-xl font-bold text-primary">ResumeMentor.AI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={handleSignIn}
              className="text-gray-600 hover:text-primary"
            >
              Sign In
            </Button>
            <Button
              onClick={handleGetStarted}
              className="bg-primary text-white hover:bg-primary/90 px-6"
            >
              <Upload className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="py-4 space-y-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                <Button
                  variant="ghost"
                  onClick={handleSignIn}
                  className="w-full justify-start text-gray-600 hover:text-primary"
                >
                  Sign In
                </Button>
                <Button
                  onClick={handleGetStarted}
                  className="w-full bg-primary text-white hover:bg-primary/90"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}