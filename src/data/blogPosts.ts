export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  date: string; // Format: YYYY-MM-DD
  readTime: string; // e.g., "5 min read"
  slug: string; // URL-friendly version of title
  author: string;
}

// Add your blog posts here - just copy the template below and fill in your content!
export const blogPosts: BlogPost[] = [
  // Example post (remove this when you add your first real post):
  // {
  //   title: "Your First Blog Post",
  //   excerpt: "A brief description of what this post is about...",
  //   content: `
  //     # Your First Blog Post
  //     
  //     Write your blog content here using Markdown syntax.
  //     
  //     ## Subheading
  //     
  //     Your content goes here. You can use:
  //     - **Bold text**
  //     - *Italic text*
  //     - Code blocks
  //     - Lists
  //     - And more!
  //   `,
  //   tags: ["Tag1", "Tag2", "Tag3"],
  //   date: "2025-01-15",
  //   readTime: "5 min read",
  //   slug: "your-first-blog-post",
  //   author: "Mohammed Faraz Saudagar"
  // }
];

// Helper function to get a post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}; 