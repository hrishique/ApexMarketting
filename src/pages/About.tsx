import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Apex Marketing</h1>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Performance-driven growth for the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Our Story & Mission</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Apex Marketing (Burgeoning Media) is a premier performance marketing agency dedicated to helping businesses grow using cutting-edge digital advertising strategies, paid traffic campaigns, and comprehensive marketing systems.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              In today's digital landscape, many businesses rely heavily on digital advertising for their primary revenue. However, the complexity of these platforms often leads to wasted budget and missed opportunities. Apex Marketing provides the expertise and infrastructure required to run effective, high-ROI campaigns.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Our mission is simple: to bridge the gap between business potential and digital performance. We don't just manage ads; we build scalable growth engines for our clients.
            </p>
          </div>
          <div className="relative">
            <div className="glass rounded-3xl p-2 aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
                alt="Apex Marketing Team & Strategy"
                className="w-full h-full object-cover rounded-2xl opacity-70"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            {
              title: "Performance Driven",
              desc: "Every strategy we implement is measured by its impact on your bottom line.",
              icon: <TrendingUp className="text-brand-blue" />
            },
            {
              title: "Paid Ad Expertise",
              desc: "Deep technical knowledge of Meta, Google, and emerging ad platforms.",
              icon: <Target className="text-brand-blue" />
            },
            {
              title: "Scalable Systems",
              desc: "We build infrastructure that grows with your business needs.",
              icon: <Rocket className="text-brand-blue" />
            },
            {
              title: "High Trust",
              desc: "Transparent reporting and dedicated support for every client.",
              icon: <ShieldCheck className="text-brand-blue" />
            }
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-2xl">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-3xl p-10 md:p-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Businesses Choose Us</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="space-y-4">
              <h4 className="text-brand-blue font-bold uppercase tracking-wider text-sm">Expertise</h4>
              <p className="text-zinc-300">We stay ahead of platform changes and algorithm updates so you don't have to. Our team is composed of specialists who live and breathe performance data.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-blue font-bold uppercase tracking-wider text-sm">Infrastructure</h4>
              <p className="text-zinc-300">Beyond strategy, we provide the technical backbone—from tracking pixels to agency-level ad accounts—ensuring your campaigns run without technical hitches.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
