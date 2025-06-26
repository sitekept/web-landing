"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Équipe", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-xl font-bold transition-colors hover:text-blue-600"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className={isScrolled ? "text-slate-900" : "text-white"}>
                SiteKept
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? "text-slate-700" : "text-slate-300"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Commencer
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isScrolled ? "text-slate-900" : "text-white"}`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg bg-white px-2 pt-2 pb-3 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Commencer
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}