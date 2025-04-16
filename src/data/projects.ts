export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Summaryze Whisper",
    description: "A YouTube video summarizer that uses AI to generate concise summaries of video content, making it easier to consume long-form content.",
    technologies: ["Python", "OpenAI", "LangChain", "Streamlit"],
    githubUrl: "https://github.com/farazsaudagar/summaryze-whisper",
  },
  {
    title: "Script Editor for Robotic Systems",
    description: "A recursive script editor built for robotic automation systems, enabling complex automation workflows with a user-friendly interface.",
    technologies: ["C#", ".NET 8", "WPF", "XAML"],
    githubUrl: "https://github.com/farazsaudagar/script-editor",
  },
  {
    title: "GraphRAG Chatbot",
    description: "A knowledge-graph powered chatbot using Ollama and Neo4j, providing context-aware responses based on structured data.",
    technologies: ["Python", "Neo4j", "Ollama", "LangChain"],
    githubUrl: "https://github.com/farazsaudagar/graphrag-chatbot",
  },
  {
    title: "Rentr",
    description: "A hackathon-built rental application that simplifies the process of finding and managing rental properties.",
    technologies: ["Flutter", "Firebase", "Dart"],
    githubUrl: "https://github.com/farazsaudagar/rentr",
  },
]; 