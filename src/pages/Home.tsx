import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BarChart3, Target, Users, Zap, CheckCircle2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import ROICalculator from '../components/ROICalculator';

const Home = () => {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  const services = [
    {
      title: "Performance Marketing",
      desc: "Managing advertising campaigns designed to generate leads and customers through Meta and Google Ads.",
      icon: <BarChart3 className="text-brand-blue" size={24} />
    },
    {
      title: "Paid Ads Management",
      desc: "Full campaign management including creative development, targeting, optimization, and scaling.",
      icon: <Target className="text-brand-blue" size={24} />
    },
    {
      title: "Lead Generation",
      desc: "Building marketing funnels and campaigns designed to produce high-quality leads for your business.",
      icon: <Users className="text-brand-blue" size={24} />
    },
    {
      title: "Agency Ad Accounts",
      desc: "Providing high-limit, unrestricted agency-level advertising infrastructure for serious advertisers.",
      icon: <Zap className="text-brand-blue" size={24} />
    }
  ];

  const industries = [
    "eCommerce brands", "Real Estate", "Education", "Financial Services",
    "Affiliate Marketers", "Trading Businesses", "Gaming & Gambling",
    "Cryptocurrency", "Local Services", "Startups"
  ];

  const faqs = [
    {
      q: "What is an agency ad account?",
      a: "An agency ad account is a specialized advertising infrastructure provided by verified Meta/Google partners. These accounts offer higher spending limits, faster ad reviews, and better stability compared to personal or business manager accounts."
    },
    {
      q: "Who should use agency ad accounts?",
      a: "Advertisers running high-volume campaigns, those in competitive industries, or businesses that have faced restrictions on standard accounts benefit most from our infrastructure."
    },
    {
      q: "How long does setup take?",
      a: "Typically, the onboarding process and account access are provided within 24-48 hours after the initial consultation and setup fee payment."
    },
    {
      q: "What industries are supported?",
      a: "We support a wide range of industries including eCommerce, Real Estate, Finance, and even specialized categories like Gaming, Crypto, and Trading that often face strict reviews."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-widest uppercase mb-6">
                Performance Marketing Agency
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Performance Marketing That <span className="text-brand-blue">Scales</span> Businesses
              </h1>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Apex Marketing helps businesses generate leads, acquire customers, and scale revenue using advanced digital advertising strategies and marketing systems.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/917869838725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
                >
                  Book Consultation <ArrowRight size={20} />
                </a>
                <WhatsAppButton className="w-full sm:w-auto" />
              </div>
            </motion.div>
          </div>

          {/* Abstract Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative"
          >
            <div className="glass rounded-2xl p-4 md:p-8 overflow-hidden shadow-2xl border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Live Performance Dashboard</span>
                </div>
                <div className="text-[10px] font-medium text-zinc-500">Last updated: Just now</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="h-64 bg-zinc-800/50 rounded-xl flex items-end p-4 gap-2">
                    {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-brand-blue/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-zinc-800/30 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-2">Total Ad Spend</div>
                      <div className="text-2xl font-bold text-white">₹83 Cr+</div>
                      <div className="text-xs text-brand-blue mt-1 flex items-center gap-1">
                        Till date across all accounts
                      </div>
                    </div>
                    <div className="h-32 bg-zinc-800/30 rounded-xl p-4 border border-white/5">
                      <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-2">Performance Index</div>
                      <div className="text-2xl font-bold text-white">4.2x</div>
                      <div className="text-xs text-brand-blue mt-1">Avg. ROAS Across Channels</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 px-2">Live Campaigns</div>
                  {[
                    { name: "Meta Advantage+", status: "Scaling", color: "bg-blue-500", value: "5.2x" },
                    { name: "Google Search", status: "Active", color: "bg-green-500", value: "3.8x" },
                    { name: "YouTube Brand", status: "Optimizing", color: "bg-red-500", value: "2.1x" },
                    { name: "Retargeting", status: "Scaling", color: "bg-purple-500", value: "8.4x" }
                  ].map((campaign, i) => (
                    <div key={i} className="bg-zinc-800/20 rounded-xl p-4 flex items-center gap-4 border border-white/5 hover:bg-zinc-800/40 transition-colors">
                      <div className={`w-10 h-10 ${campaign.color}/20 rounded-lg shrink-0 flex items-center justify-center`}>
                        <div className={`w-2 h-2 ${campaign.color} rounded-full animate-pulse`}></div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-bold text-white">{campaign.name}</div>
                        <div className="text-[10px] text-zinc-500 uppercase">{campaign.status}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-brand-blue">{campaign.value}</div>
                        <div className="text-[10px] text-zinc-600">ROAS</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Expertise and Infrastructure for <span className="text-brand-blue">Effective Campaigns</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Apex Marketing (Burgeoning Media) is a performance marketing agency helping businesses grow using digital advertising strategies, paid traffic campaigns, and marketing systems.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Many businesses rely heavily on digital advertising for revenue. We provide the expertise and infrastructure required to run effective campaigns that don't just get clicks, but drive real business growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Performance-driven marketing",
                  "Paid advertising expertise",
                  "Customer acquisition systems",
                  "Scalable growth strategies"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-blue" size={20} />
                    <span className="text-sm font-medium text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/about" className="text-brand-blue font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more about us <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-zinc-800 rounded-3xl overflow-hidden glass p-1">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
                  alt="Performance Marketing Infrastructure"
                  className="w-full h-full object-cover rounded-[22px] opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl hidden md:block">
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-zinc-400">Campaigns Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Calculate Your <span className="text-brand-blue">Growth Potential</span></h2>
              <p className="text-zinc-400 text-lg mb-8">
                Stop guessing. Use our performance calculator to see how much revenue you're leaving on the table and how Apex Marketing can help you capture it.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-brand-blue" size={20} />
                  <span>Data-backed revenue projections</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-brand-blue" size={20} />
                  <span>Ad spend optimization analysis</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="text-brand-blue" size={20} />
                  <span>Scalability assessment</span>
                </div>
              </div>
            </div>
            <div className="glass p-8 rounded-3xl border-brand-blue/20">
              <ROICalculator />
            </div>
          </div>
        </div>
      </section>

      {/* The Apex Scaling Framework */}
      <section className="py-24 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Apex Scaling Framework</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Our proprietary 4-stage process designed to take businesses from stagnant to market leaders.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: "01", title: "Audit & Architecture", desc: "Deep dive into your current data, tracking, and campaign structure to find leaks." },
            { step: "02", title: "Creative Engine", desc: "Developing high-converting visual assets and copy that resonates with your target audience." },
            { step: "03", title: "Aggressive Scaling", desc: "Leveraging our agency infrastructure to push budgets and dominate market share." },
            { step: "04", title: "Optimization Loop", desc: "Continuous A/B testing and data analysis to drive down CPA and maximize ROAS." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl relative group hover:border-brand-blue/30 transition-all">
              <div className="text-5xl font-black text-brand-blue/10 absolute top-4 right-4 group-hover:text-brand-blue/20 transition-colors">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Core Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Comprehensive marketing solutions designed to take your business from where it is to where it needs to be.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl hover:border-brand-blue/30 transition-all group"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link to="/services" className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-2">
                Details <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-zinc-400">We bring performance marketing excellence to diverse business sectors.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, i) => (
              <span key={i} className="px-6 py-3 bg-zinc-800/50 border border-white/5 rounded-full text-zinc-300 text-sm font-medium hover:border-brand-blue/30 transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  {activeFaq === i ? <Minus size={20} className="text-brand-blue" /> : <Plus size={20} className="text-brand-blue" />}
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-zinc-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-blue to-blue-700 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-blue/20">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">Ready to scale your business?</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Join hundreds of successful businesses that have transformed their growth with Apex Marketing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a
                href="https://wa.me/917869838725"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-brand-blue px-10 py-4 rounded-xl font-bold hover:bg-zinc-100 transition-all shadow-xl"
              >
                Book Your Consultation
              </a>
              <WhatsAppButton className="w-full sm:w-auto !bg-zinc-950 hover:!bg-black" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
