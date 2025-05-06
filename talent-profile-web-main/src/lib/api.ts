
import { skills, resumeData } from '@/data/skillsData';
import { projects } from '@/data/projectsData';
import { toast } from '@/components/ui/use-toast';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API service to simulate backend functionality
export const api = {
  // Get skills data
  getSkills: async () => {
    await delay(600);
    return { data: skills };
  },
  
  // Get resume data
  getResumeData: async () => {
    await delay(800);
    return { data: resumeData };
  },
  
  // Get projects
  getProjects: async () => {
    await delay(700);
    return { data: projects };
  },
  
  // Get featured projects
  getFeaturedProjects: async () => {
    await delay(500);
    return { data: projects.filter(project => project.featured) };
  },
  
  // Submit contact form
  submitContactForm: async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    await delay(1000);
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Please fill all required fields');
    }
    
    // Simulate successful form submission (in a real app, this would send data to a server)
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    return { success: true, message: "Form submitted successfully" };
  }
};
