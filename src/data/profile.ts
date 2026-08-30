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

  // Profile photo from: /public/profile.jpeg
  photo: "/profile.jpeg",

  // CV from: /public/Srivijay-Kadam-CV.pdf
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
      "FoodShareAI is a food-focused web application built as a real-world project, combining a modern web interface with functionality designed around food sharing and accessibility.",
    // Main project screenshot
    image: "/projects/food-share-ai/food_1.png",
    // Screenshots gallery - all 70 screenshots from the project
    gallery: [
      "/projects/food-share-ai/food_1.png",
      "/projects/food-share-ai/food_2.png",
      "/projects/food-share-ai/food_3.png",
      "/projects/food-share-ai/food_4.png",
      "/projects/food-share-ai/food_5.png",
      "/projects/food-share-ai/food_6.png",
      "/projects/food-share-ai/food_7.png",
      "/projects/food-share-ai/food_8.png",
      "/projects/food-share-ai/food_9.png",
      "/projects/food-share-ai/food_10.png",
      "/projects/food-share-ai/food_11.png",
      "/projects/food-share-ai/food_12.png",
      "/projects/food-share-ai/food_13.png",
      "/projects/food-share-ai/food_14.png",
      "/projects/food-share-ai/food_15.png",
      "/projects/food-share-ai/food_16.png",
      "/projects/food-share-ai/food_17.png",
      "/projects/food-share-ai/food_18.png",
      "/projects/food-share-ai/food_19.png",
      "/projects/food-share-ai/food_20.png",
      "/projects/food-share-ai/food_21.png",
      "/projects/food-share-ai/food_22.png",
      "/projects/food-share-ai/food_23.png",
      "/projects/food-share-ai/food_24.png",
      "/projects/food-share-ai/food_25.png",
      "/projects/food-share-ai/food_26.png",
      "/projects/food-share-ai/food_27.png",
      "/projects/food-share-ai/food_28.png",
      "/projects/food-share-ai/food_29.png",
      "/projects/food-share-ai/food_30.png",
      "/projects/food-share-ai/food_31.png",
      "/projects/food-share-ai/food_32.png",
      "/projects/food-share-ai/food_33.png",
      "/projects/food-share-ai/food_34.png",
      "/projects/food-share-ai/food_35.png",
      "/projects/food-share-ai/food_36.png",
      "/projects/food-share-ai/food_37.png",
      "/projects/food-share-ai/food_38.png",
      "/projects/food-share-ai/food_39.png",
      "/projects/food-share-ai/food_40.png",
      "/projects/food-share-ai/food_41.png",
      "/projects/food-share-ai/food_42.png",
      "/projects/food-share-ai/food_43.png",
      "/projects/food-share-ai/food_44.png",
      "/projects/food-share-ai/food_45.png",
      "/projects/food-share-ai/food_46.png",
      "/projects/food-share-ai/food_47.png",
      "/projects/food-share-ai/food_48.png",
      "/projects/food-share-ai/food_49.png",
      "/projects/food-share-ai/food_50.png",
      "/projects/food-share-ai/food_51.png",
      "/projects/food-share-ai/food_52.png",
      "/projects/food-share-ai/food_53.png",
      "/projects/food-share-ai/food_54.png",
      "/projects/food-share-ai/food_55.png",
      "/projects/food-share-ai/food_56.png",
      "/projects/food-share-ai/food_57.png",
      "/projects/food-share-ai/food_58.png",
      "/projects/food-share-ai/food_59.png",
      "/projects/food-share-ai/food_60.png",
      "/projects/food-share-ai/food_61.png",
      "/projects/food-share-ai/food_62.png",
      "/projects/food-share-ai/food_63.png",
      "/projects/food-share-ai/food_64.png",
      "/projects/food-share-ai/food_65.png",
      "/projects/food-share-ai/food_66.png",
      "/projects/food-share-ai/food_67.png",
      "/projects/food-share-ai/food_68.png",
      "/projects/food-share-ai/food_69.png",
      "/projects/food-share-ai/food_70.png",
    ],
    liveUrl: "https://food-share-ai.vercel.app/landing",
    sourceUrl: "https://github.com/Jeevan321-K/FoodShareAI",
    tech: ["Web App", "Food Sharing", "Modern UI"],
    highlights: [
      "Modern, responsive web interface",
      "Food sharing and accessibility features",
      "Built as a real-world learning project",
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
