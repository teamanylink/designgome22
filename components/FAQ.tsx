import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        <span className={`text-2xl text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How fast can you actually build something?",
      answer: "MVPs launch in 4-6 weeks. Full products or embedded systems in 8-12 weeks. We validate before we build, so we're not wasting time on features nobody wants or systems that won't deliver ROI."
    },
    {
      question: "What if I don't have a technical team?",
      answer: "Perfect. Most of our clients don't. We become your technical team—from validation to launch to scale."
    },
    {
      question: "Do you only work with startups?",
      answer: "No. We work with founders launching new companies, operators building products inside existing companies, and executives who need AI embedded into operations. If you're serious about moving fast, we're for you."
    },
    {
      question: "How much does this cost?",
      answer: "Ventures projects: Starting at $20K per build. Embedded engagements: $7,997-$12,997/month. We can discuss specifics on a strategy call once we understand what you're building."
    },
    {
      question: "What if the product or system doesn't work?",
      answer: "We validate with real buyers or real operational data before building anything. If it won't work, we kill it in week 1 and pivot. We don't waste your money building things that won't deliver results."
    },
    {
      question: "Do you take equity or just cash?",
      answer: "We're flexible. Sometimes equity if we love the vision and want long-term upside. Sometimes cash. Sometimes hybrid. Depends on the project."
    },
    {
      question: "How involved do I need to be?",
      answer: "Very involved in weeks 1-2 (validation phase). Moderately involved during build. Less involved once it's live and scaling. You're the founder/operator—we need your insights, but we do the heavy lifting."
    },
    {
      question: "What industries do you work in?",
      answer: "B2B SaaS, e-commerce, fintech, healthcare, logistics, marketing tools, professional services—anywhere AI can generate revenue or cut costs. If there's a business case, we can build it."
    },
    {
      question: "Why should I trust you over a bigger agency?",
      answer: "Bigger agencies move slow, charge more, and assign junior people to your project. We're operators who've built our own companies. We move fast because we know speed wins. And we only take projects we believe in."
    },
    {
      question: "What happens after launch?",
      answer: "We don't disappear. For Ventures clients, we optimize and scale the growth engine. For Embedded clients, we measure ROI and find the next opportunity. We're partners, not vendors."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="mt-16 text-center">
           <button className="bg-black text-white hover:bg-gray-800 font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 active:scale-95">
             Get Started Now →
           </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;