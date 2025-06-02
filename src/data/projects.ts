export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Bookworms",
    description: "An iOS app that allows users to track and review the books they have read and interact with the book reading community. Features book tracking, reviews, and social interactions with fellow readers.",
    technologies: ["Swift", "iOS", "UIKit", "Core Data"],
    githubUrl: "https://github.com/farazsaudagar/bookmarks",
  },
  {
    title: "YouTube Search Extension",
    description: "A Chrome extension to live transcribe notes from YouTube videos/lectures. Helps users take notes while watching educational content by providing real-time transcription capabilities.",
    technologies: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    githubUrl: "https://github.com/farazsaudagar/youtube-search-extension",
  },
]; 