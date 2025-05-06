
import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Skill } from '@/data/skillsData';

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const response = await api.getSkills();
        setSkills(response.data);
        setFilteredSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const filterSkills = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === category));
    }
  };

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'languages', name: 'Languages' },
    { id: 'tools', name: 'Tools' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels across various technologies and tools.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => filterSkills(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills list */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {loading ? (
            // Loading skeleton
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-2 w-1/3"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
              </div>
            ))
          ) : (
            filteredSkills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
