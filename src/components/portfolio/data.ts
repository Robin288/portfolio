export const LINKS = {
  github: "https://github.com/Robin288",
  linkedin: "https://www.linkedin.com/in/dhruv-dash",
  email: "mailto:dhruvdash2006@gmail.com",
  emailText: "dhruvdash2006@gmail.com",
};

export const NAV = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Services"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["contact", "Contact"],
] as const;

export const SERVICES = [
  {
    title: "AI/ML Development",
    icon: "brain",
    desc: "I develop machine learning prototypes and computer vision applications, with a focus on object detection and model evaluation.",
    items: ["Machine learning prototypes", "Computer vision models", "Model testing and evaluation", "AI features for apps"],
    tags: ["Python", "PyTorch", "YOLO"],
  },
  {
    title: "Web Development",
    icon: "code",
    desc: "I build responsive websites and web applications, from the user interface to the supporting backend services.",
    items: ["Responsive websites", "Portfolio and business sites", "React and Next.js apps", "Apps built with Firebase"],
    tags: ["Next.js", "React", "Tailwind", "Firebase"],
  },
  {
    title: "AI Integration & Automation",
    icon: "bot",
    desc: "I integrate AI capabilities into digital products and develop practical automation prototypes.",
    items: ["AI features for web apps", "AI tool integration", "Assistant and chatbot prototypes", "Workflow automation"],
    tags: ["LLM APIs", "Automation"],
  },
] as const;

export const SKILLS = [
  { title: "AI & Machine Learning", items: ["Machine Learning", "Deep Learning", "Computer Vision", "YOLO", "PyTorch"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Backend & Databases", items: ["Firebase", "Firestore", "Authentication"] },
  { title: "Programming & Tools", items: ["Python", "Java", "Data Structures & Algorithms", "Git", "GitHub"] },
  { title: "Business & Product", items: ["Entrepreneurship", "Business Strategy", "Venture Building", "Startup Consultancy"] },
];
