
import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { resumeData as initialResumeData } from '@/data/skillsData';

const About = () => {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setLoading(true);
        const response = await api.getResumeData();
        setResumeData(response.data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            {loading ? 'Loading...' : resumeData.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/10 text-primary flex items-center justify-center rounded-full mr-3">
                <span className="text-sm font-bold">E</span>
              </span>
              Experience
            </h3>

            <div className="space-y-8">
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                </div>
              ) : (
                resumeData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-100 pb-8 animate-fade-in">
                    <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                    <h4 className="text-lg font-medium">{exp.position}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/10 text-primary flex items-center justify-center rounded-full mr-3">
                <span className="text-sm font-bold">E</span>
              </span>
              Education
            </h3>

            <div className="space-y-8">
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ) : (
                resumeData.education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-100 pb-8 animate-fade-in">
                    <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                    <h4 className="text-lg font-medium">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
