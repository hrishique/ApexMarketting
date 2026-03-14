import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Globe, Clock, RefreshCw, CheckCircle2, ArrowRight, MessageCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const AdAccounts = () => {
  const features = [
    { title: "High-Risk Support", desc: "Support for multiple advertising categories including high-risk industries.", icon: <Shield /> },
    { title: "No Tax Charges", desc: "No additional tax charges applied to the service budget.", icon: <Globe /> },
    { title: "No Spend Limits", desc: "Removal of low spending limits allowing you to scale from day one.", icon: <Zap /> },
    { title: "Large Budgets", desc: "Ability to spend large advertising budgets from the first day.", icon: <TrendingUp /> },
    { title: "Multi-Asset Support", desc: "Support for multiple pages and domains within campaigns.", icon: <RefreshCw /> },
    { title: "Account Replacement", desc: "Fast account replacement available if any issues arise.", icon: <RefreshCw /> },
    { title: "Lifetime Guarantee", desc: "Lifetime service guarantee for account access and support.", icon: <Clock /> }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-widest uppercase mb-6">
            Premium Infrastructure
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Meta Agency Ad Accounts</h1>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
            This page explains the agency ad account service provided by Apex Marketing for advertisers who require advertising infrastructure to run campaigns.
          </p>
        </motion.div>

        {/* Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Why Use Agency Accounts?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              These accounts are commonly used by advertisers running high-volume campaigns or operating in industries that often face strict ad review processes.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Standard business manager accounts often come with daily spending limits and are highly sensitive to policy changes. Our agency infrastructure is designed for stability and scale.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "Faster campaign launch",
                "Ability to scale ad budgets quickly",
                "Infrastructure designed for advertisers",
                "Flexible ad management capabilities"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-blue" size={20} />
                  <span className="text-zinc-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-10 rounded-3xl border-brand-blue/20 bg-brand-blue/5">
            <h3 className="text-2xl font-bold text-white mb-8">Pricing & Terms</h3>
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <div className="text-zinc-400 text-sm uppercase tracking-wider font-bold mb-1">Setup Fee</div>
                  <div className="text-white text-lg font-medium">One-time infrastructure setup</div>
                </div>
                <div className="text-3xl font-bold text-white">₹2499</div>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <div className="text-zinc-400 text-sm uppercase tracking-wider font-bold mb-1">Commission</div>
                  <div className="text-white text-lg font-medium">On ad budget top-ups</div>
                </div>
                <div className="text-3xl font-bold text-white">2%</div>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <div className="text-zinc-400 text-sm uppercase tracking-wider font-bold mb-1">Minimum Top-Up</div>
                  <div className="text-white text-lg font-medium">Flexible budget management</div>
                </div>
                <div className="text-3xl font-bold text-white">Any</div>
              </div>
            </div>
            <div className="mt-10">
              <WhatsAppButton className="w-full" />
            </div>
          </div>
        </div>

        {/* Comparison Table Section */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Standard vs. <span className="text-brand-blue">Apex Agency</span> Infrastructure</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-zinc-400 font-medium">Feature</th>
                  <th className="py-6 px-4 text-zinc-400 font-medium">Standard Business Manager</th>
                  <th className="py-6 px-4 text-brand-blue font-bold">Apex Agency Infrastructure</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-medium">Daily Spend Limit</td>
                  <td className="py-6 px-4">₹2,000 - ₹5,000 (Initial)</td>
                  <td className="py-6 px-4 text-white font-bold">Unlimited / High Limit (Day 1)</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-medium">Ad Review Speed</td>
                  <td className="py-6 px-4">24 - 48 Hours</td>
                  <td className="py-6 px-4 text-white font-bold">Instant - 4 Hours</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-medium">High-Risk Support</td>
                  <td className="py-6 px-4">Instant Bans</td>
                  <td className="py-6 px-4 text-white font-bold">Dedicated Whitelisting</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-medium">Account Stability</td>
                  <td className="py-6 px-4">Low (Fragile)</td>
                  <td className="py-6 px-4 text-white font-bold">Enterprise Grade (Robust)</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-medium">Support Channel</td>
                  <td className="py-6 px-4">Automated Bot</td>
                  <td className="py-6 px-4 text-white font-bold">24/7 Dedicated Human Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Contact", desc: "Contact us via WhatsApp" },
              { step: 2, title: "Discuss", desc: "Discuss requirements" },
              { step: 3, title: "Setup", desc: "Account setup begins" },
              { step: 4, title: "Access", desc: "Get account access" },
              { step: 5, title: "Launch", desc: "Start your campaigns" }
            ].map((item, i) => (
              <div key={i} className="relative text-center p-6">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 relative z-10">
                  {item.step}
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-zinc-800 -z-0"></div>
                )}
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="glass rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <MessageCircle size={120} className="text-brand-blue" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">24/7 Dedicated Support</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Clients receive round-the-clock support assistance to help with onboarding and account usage. Our team is here to help with setup, campaign launches, and troubleshooting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton />
            <a
              href="https://wa.me/917869838725"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdAccounts;
