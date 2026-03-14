import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Target, Users, Zap, Layout, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesList = [
    {
      title: "Performance Marketing",
      desc: "Managing advertising campaigns designed to generate leads and customers through platforms such as Meta Ads and Google Ads. We focus on the metrics that matter: conversion rates, CPA, and ROAS.",
      icon: <BarChart3 size={32} />,
      features: ["Conversion Optimization", "Platform-specific Strategy", "ROI Tracking", "Real-time Reporting"]
    },
    {
      title: "Paid Advertising Management",
      desc: "Full campaign management including creative development, targeting, optimization, and scaling. We handle everything from the initial setup to daily bid management and creative testing.",
      icon: <Target size={32} />,
      features: ["Creative Ad Design", "A/B Testing", "Audience Research", "Budget Management"]
    },
    {
      title: "Lead Generation Systems",
      desc: "Building marketing funnels and campaigns designed to produce high-quality leads. We don't just find people; we find the right people who are ready to engage with your business.",
      icon: <Users size={32} />,
      features: ["Funnel Architecture", "Lead Qualification", "CRM Integration", "Automated Follow-ups"]
    },
    {
      title: "Marketing Strategy",
      desc: "Strategic planning and campaign architecture for businesses aiming to scale online. We look at the big picture to ensure every marketing dollar is working toward your long-term goals.",
      icon: <Layout size={32} />,
      features: ["Market Analysis", "Competitor Research", "Brand Positioning", "Growth Mapping"]
    },
    {
      title: "Agency Ad Account Infrastructure",
      desc: "Providing agency-level advertising accounts for advertisers who need backup advertising infrastructure due to restrictions or advertising limitations.",
      icon: <Zap size={32} />,
      features: ["High Spending Limits", "Fast Ad Reviews", "Unrestricted Access", "24/7 Infrastructure Support"]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Comprehensive digital marketing solutions engineered for high performance and rapid scaling.
          </p>
        </motion.div>

        <div className="space-y-12">
          {servicesList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 md:p-12 rounded-3xl group hover:border-brand-blue/30 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  {service.title === "Agency Ad Account Infrastructure" && (
                    <Link to="/ad-accounts" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
                      View Dedicated Page <ArrowRight size={18} />
                    </Link>
                  )}
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="bg-zinc-800/30 p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                      <Shield className="text-brand-blue shrink-0 mt-1" size={20} />
                      <span className="text-zinc-200 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Need a custom solution?</h2>
            <p className="text-zinc-400 mb-10 text-lg">
              Every business is unique. We can tailor our services to meet your specific goals and budget requirements.
            </p>
            <a
              href="https://wa.me/917869838725"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all inline-block"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
