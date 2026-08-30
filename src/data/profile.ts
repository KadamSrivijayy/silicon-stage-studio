/**
 * ============================================================
 *  EDIT YOUR PERSONAL INFORMATION HERE — this is the only file
 *  you need to change to update the whole website.
 * ============================================================
 */

export const profile = {
  name: "Srivijay Kadam",
  role: "Aspiring Software Developer & Problem Solver",
  shortRole: "Aspiring Software Developer",
  intro:
    "I'm a student developer passionate about programming, problem solving, and building things with code. Currently focused on C++, DSA, and strengthening my fundamentals while preparing for the next stage of my development journey.",
  email: "srivijaykadam09@gmail.com",
  phone: "9701093430",

  // Replace this file: /public/profile.jpg  (keep the same name & path)
  photo: "/profile.jpg",

  // Replace this file: /public/Srivijay-Kadam-CV.pdf
  cv: "/Srivijay-Kadam-CV.pdf",

  // Replace with your real profile URLs
  github: "YOUR_GITHUB_URL",
  linkedin: "YOUR_LINKEDIN_URL",
} as const;

export const stats = [
  { value: "01", label: "Featured Project", note: "FoodShareAI" },
  { value: "C++", label: "Current Focus", note: "Fundamentals & DSA" },
  { value: "Python", label: "Previously Learned", note: "Apna College" },
  { value: "01", label: "Developer Journey", note: "Just getting started" },
];

export const timeline = [
  {
    phase: "PAST",
    title: "Python",
    body: "Started learning Python through Apna College and built my programming fundamentals.",
  },
  {
    phase: "PRESENT",
    title: "C++ + DSA",
    body: "Currently learning C++, practicing programming fundamentals, problem solving, arrays, pointers, searching, sorting, functions, loops and basic DSA.",
  },
  {
    phase: "FUTURE",
    title: "Java + Software Development",
    body: "Planning to learn Java, improve DSA, build more real-world projects and grow into a professional software developer.",
  },
];

export const drives = [
  { title: "Learning New Technologies", body: "Every new language or tool is a new way to think about problems." },
  { title: "Problem Solving", body: "I enjoy breaking a hard problem down until the logic becomes simple." },
  { title: "Programming", body: "Writing code that actually runs is still the most satisfying part of my day." },
  { title: "Building Projects", body: "Tutorials teach syntax; projects teach engineering." },
  { title: "Logical Thinking", body: "DSA practice is training for cleaner, sharper reasoning." },
  { title: "Turning Ideas Into Software", body: "The goal: take an idea and ship it as something people can use." },
];

export type SkillLevel = "Current Focus" | "Practicing" | "Learning" | "Familiar" | "Future";

export const skillGroups: {
  category: string;
  icon: "code" | "brain" | "layers" | "rocket";
  skills: { name: string; level: SkillLevel }[];
}[] = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "C++", level: "Current Focus" },
      { name: "Python", level: "Familiar" },
    ],
  },
  {
    category: "Currently Learning",
    icon: "brain",
    skills: [
      { name: "C++", level: "Current Focus" },
      { name: "DSA", level: "Learning" },
    ],
  },
  {
    category: "Core Programming",
    icon: "layers",
    skills: [
      { name: "Conditional Statements", level: "Practicing" },
      { name: "Loops", level: "Practicing" },
      { name: "Functions", level: "Practicing" },
      { name: "Arrays", level: "Practicing" },
      { name: "Pointers", level: "Learning" },
      { name: "Searching", level: "Practicing" },
      { name: "Sorting", level: "Practicing" },
      { name: "Problem Solving", level: "Practicing" },
      { name: "Basic DSA", level: "Learning" },
    ],
  },
  {
    category: "Future Learning",
    icon: "rocket",
    skills: [
      { name: "Java", level: "Future" },
      { name: "Advanced DSA", level: "Future" },
      { name: "Software Development", level: "Future" },
    ],
  },
];

export const projects = [
  {
    name: "FoodShareAI",
    tagline: "Smarter, more meaningful food sharing",
    description:
      "FoodShareAI is a web-based project focused on using technology to create a smarter and more meaningful food-sharing experience. The project combines a modern web interface with AI-oriented functionality to help users interact with food-sharing services more effectively.",
    // Replace this file: /public/projects/foodshareai.png
    image: "/projects/foodshareai.png",
    // TODO: paste your real links here
    liveUrl: "YOUR_FOODSHAREAI_LIVE_URL",
    sourceUrl: "YOUR_FOODSHAREAI_GITHUB_URL",
    // Editable — replace with the exact stack you used
    tech: ["Web App", "AI-oriented features", "Frontend UI", "TODO: add exact stack"],
    highlights: [
      "Modern, responsive web interface",
      "AI-oriented functionality around food sharing",
      "Built as a personal learning project",
    ],
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "CV", to: "/cv" },
  { label: "Contact", to: "/contact" },
] as const;
