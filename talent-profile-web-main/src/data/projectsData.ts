
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store built with React and Node.js, featuring product listings, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application built with Angular that helps teams organize tasks, set priorities, and track progress.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Angular", "TypeScript", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A messaging platform built with Socket.io and React that enables real-time communication between users.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and styled with Tailwind CSS to showcase projects and skills.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
];
