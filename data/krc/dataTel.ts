export interface LinkData {
  title: string;
  description: string;
  accessInfo: string;
  buttonText: string;
  link: string; // Add a new property for the link URL
}

export const linkData: LinkData[] = [
  {
    title: "SWAYAM",
    description: "Massive Open Online Courses. Earn credit through online courses",
    accessInfo: "",
    buttonText: "Explore",
    link: "https://swayam.gov.in", // Example link URL
  },
  {
    title: "SWAYAMPRABHA",
    description: "View digital courses on TV. Watch high quality educational programs 24/7",
    accessInfo: "",
    buttonText: "Explore",
    link: "https://swayamprabha.gov.in", // Example link URL
  },
  {
    title: "National Digital Library (NDL)",
    description: "Access e-content on multiple disciplines",
    accessInfo: "",
    buttonText: "Explore",
    link: "https://ndl.iitkgp.ac.in", // Example link URL
  },

];
