"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAVIGATION_ITEMS = [
  { name: "Accueil", href: "/#hero" },
  { name: "Services", href: "/#services" },
  { name: "Nos créations", href: "/#our-work" },
  { name: "Contact", href: "/#contact" },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

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
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold transition-colors hover:text-blue-600"
            >
              <div className="flex h-8 w-8 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="SiteKept Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <span className={isScrolled ? "text-slate-900" : "text-white"}>
                SiteKept
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              const linkClass = `text-sm font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? "text-slate-700" : "text-slate-300"
              }`;

              return (
                <Link key={item.name} href={item.href} className={linkClass}>
                  {item.name}
                </Link>
              );
            })}
            <Button
              asChild
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link href="/#contact">Commencer</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 ${isScrolled ? "text-slate-900" : "text-white"}`}
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
              {NAVIGATION_ITEMS.map((item) => {
                const mobileClass =
                  "block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600";

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={mobileClass}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/#contact" onClick={closeMenu}>
                    Commencer
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
