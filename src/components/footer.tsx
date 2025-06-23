import { Zap, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SiteKept</span>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              Lightning-fast website development for modern businesses.
              Professional, scalable, and ready to convert.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-slate-400">
                <Mail className="mr-2 h-4 w-4" />
                sitekept@gmail.com
              </div>
              {/* TODO: Add phone number 
              <div className="flex items-center text-sm text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </div>
              */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Landing Pages</li>
              <li>E-commerce Sites</li>
              <li>Corporate Websites</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>About Us</li>
              <li>Our Process</li>
              <li>Case Studies</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Help Center</li>
              <li>Contact Support</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2025 SiteKept. All rights reserved. Built with Next.js and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
