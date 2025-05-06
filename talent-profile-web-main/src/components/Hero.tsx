
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
              Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-primary">Mohammad Shafi</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web. Specialized in both frontend and backend technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Developer working"
                className="relative z-10 rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
                <p className="font-bold text-primary">1+ Years</p>
                <p className="text-sm text-gray-500">Professional Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
