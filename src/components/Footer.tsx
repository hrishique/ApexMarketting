import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center font-bold text-white">A</div>
              <span className="text-xl font-bold tracking-tight text-white">APEX <span className="text-zinc-500 font-medium">MARKETING</span></span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Performance marketing agency helping businesses grow using digital advertising strategies, paid traffic campaigns, and marketing systems.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Paid Ads Management</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Lead Generation</Link></li>
              <li><Link to="/ad-accounts" className="hover:text-white transition-colors">Agency Ad Accounts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-blue shrink-0" />
                <a href="mailto:apexmarketingagency@outlook.com" className="hover:text-brand-blue transition-colors">apexmarketingagency@outlook.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-brand-blue shrink-0" />
                <a href="https://wa.me/917869838725" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">WhatsApp: +91 78698 38725</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-blue shrink-0" />
                <span>Building No. 24, Janaura Road, Ayodhya, UP, India</span>
              </li>
              <li className="pt-2 text-xs text-zinc-500">
                GSTIN: 09DWPPD9583M1ZG
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Apex Marketing (Burgeoning Media). All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <span>Registered in India</span>
            <span>Ayodhya, Uttar Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
