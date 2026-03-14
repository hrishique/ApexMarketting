import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, MessageCircle, Send, ShieldCheck } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Ready to scale? Let's discuss your marketing goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="+91 78698 38725"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Business Type</label>
                  <select className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                    <option>eCommerce</option>
                    <option>Real Estate</option>
                    <option>Education/Coaching</option>
                    <option>Finance</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Direct Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Support</h4>
                    <a href="mailto:apexmarketingagency@outlook.com" className="text-zinc-400 hover:text-brand-blue transition-colors">apexmarketingagency@outlook.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp Support</h4>
                    <p className="text-zinc-400 mb-4">Instant assistance for onboarding and queries.</p>
                    <WhatsAppButton />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-brand-blue" /> Registered Office
              </h2>
              <div className="text-zinc-400 space-y-2 text-sm leading-relaxed">
                <p className="text-white font-medium">Apex Marketing (Burgeoning Media)</p>
                <p>Building No. 24, Janaura Road</p>
                <p>Ganga Vihar Colony Jogitara</p>
                <p>Ayodhya, Uttar Pradesh</p>
                <p>India</p>
                <div className="pt-4 flex items-center gap-2 text-xs">
                  <ShieldCheck size={14} className="text-brand-blue" />
                  <span>GSTIN: 09DWPPD9583M1ZG</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
