import React, { useState } from 'react';

const ROICalculator = () => {
  const [adSpend, setAdSpend] = useState(100000);
  const [currentRoas, setCurrentRoas] = useState(2.5);
  const [targetRoas, setTargetRoas] = useState(4.0);

  const currentRevenue = adSpend * currentRoas;
  const targetRevenue = adSpend * targetRoas;
  const revenueLift = targetRevenue - currentRevenue;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-zinc-400">Monthly Ad Spend (₹)</label>
            <span className="text-white font-bold">₹{adSpend.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="10000"
            max="2000000"
            step="10000"
            value={adSpend}
            onChange={(e) => setAdSpend(parseInt(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-blue"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-zinc-400">Current ROAS</label>
              <span className="text-white font-bold">{currentRoas}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={currentRoas}
              onChange={(e) => setCurrentRoas(parseFloat(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-600"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-zinc-400">Target ROAS</label>
              <span className="text-white font-bold text-brand-blue">{targetRoas}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={targetRoas}
              onChange={(e) => setTargetRoas(parseFloat(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-blue"
            />
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/5 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Current Revenue</span>
          <span className="text-white font-medium">₹{currentRevenue.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Projected Revenue</span>
          <span className="text-white font-medium">₹{targetRevenue.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-brand-blue/10 rounded-xl border border-brand-blue/20">
          <span className="text-brand-blue font-bold">Monthly Revenue Lift</span>
          <span className="text-brand-blue text-2xl font-black">₹{revenueLift.toLocaleString()}</span>
        </div>
      </div>

      <p className="text-[10px] text-zinc-500 text-center italic">
        *Projections based on historical agency performance. Results may vary by industry.
      </p>
    </div>
  );
};

export default ROICalculator;
