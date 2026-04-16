import React from 'react';
import Navbar from './Navbar';
import CallToAction from './ui/call-to-action';
import NewsletterCTA from './ui/newsletter-cta';
import { Mail, MessageSquare, Phone, Globe } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen custom-scrollbar">
      <Navbar />
      
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="fluid-container">
          <div className="text-center mb-16 md:mb-24 px-4">
            <h1 className="heading-fluid-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6 font-serif">
              Get in Touch
            </h1>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Have questions about Aura? Our team of intelligence experts is here to help you navigate the future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32">
            {[
              { icon: Mail, label: 'Email', value: 'hello@aura.ai', desc: 'Our team will respond within 24h.' },
              { icon: MessageSquare, label: 'Live Chat', value: 'Active Now', desc: 'Average wait time: 3 mins.' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000', desc: 'Mon-Fri from 9am to 6pm.' },
              { icon: Globe, label: 'Office', value: 'San Francisco, CA', desc: '100 Terminal Way, Suite 400.' },
            ].map((item, index) => (
              <div key={index} className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all group">
                <item.icon className="size-6 mb-4 text-white group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-1 md:text-lg">{item.label}</h3>
                <p className="text-white text-sm md:text-base mb-2 font-mono break-all">{item.value}</p>
                <p className="text-zinc-500 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-16 md:space-y-24">
            <CallToAction />
            <NewsletterCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
