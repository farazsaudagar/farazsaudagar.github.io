# Blog Management Guide

This guide will help you easily add and manage blog posts on your website.

## Adding a New Blog Post

### Step 1: Open the Blog Data File
Navigate to `src/data/blogPosts.ts` in your project.

### Step 2: Add Your Post
Copy this template and add it to the `blogPosts` array:

```typescript
{
  title: "Your Blog Post Title",
  excerpt: "A brief 1-2 sentence description that appears on the blog page...",
  content: `
    # Your Blog Post Title
    
    Write your blog content here using simple formatting:
    
    ## Subheadings
    Use ## for subheadings
    
    ### Smaller Subheadings
    Use ### for smaller subheadings
    
    **Bold text** - wrap text in **double asterisks**
    *Italic text* - wrap text in *single asterisks*
    
    - Bullet point 1
    - Bullet point 2
    - Bullet point 3
    
    1. Numbered list item 1
    2. Numbered list item 2
    3. Numbered list item 3
    
    > This is a quote or important note
    
    You can also include code:
    \`inline code\` or 
    
    \`\`\`
    code block
    console.log("Hello World");
    \`\`\`
    
    Links: [Link text](https://example.com)
  `,
  tags: ["Tag1", "Tag2", "Tag3"], // Add relevant tags
  date: "2025-01-15", // Format: YYYY-MM-DD
  readTime: "5 min read", // Estimate reading time
  slug: "your-blog-post-title", // URL-friendly version (lowercase, hyphens)
  author: "Mohammed Faraz Saudagar"
}
```

### Step 3: Fill in Your Content
1. **Title**: Clear, descriptive title
2. **Excerpt**: Brief summary (appears on blog page)
3. **Content**: Your full blog post using the formatting examples above
4. **Tags**: 2-4 relevant tags
5. **Date**: Today's date in YYYY-MM-DD format
6. **Read Time**: Estimate (roughly 200 words per minute)
7. **Slug**: URL-friendly version of your title (lowercase, replace spaces with hyphens)

### Step 4: Save and Deploy
1. Save the file
2. Test locally with `npm run dev`
3. Deploy your changes

## Examples

### Quick Tech Tip Post
```typescript
{
  title: "Quick Git Tip: Squashing Commits",
  excerpt: "Learn how to clean up your Git history by squashing multiple commits into one.",
  content: `
    # Quick Git Tip: Squashing Commits
    
    Sometimes you want to combine multiple commits into a single, clean commit. Here's how:
    
    ## Interactive Rebase
    \`\`\`
    git rebase -i HEAD~3
    \`\`\`
    
    This opens an editor where you can:
    - Pick the first commit
    - Squash the others with 's'
    
    ## Why Squash?
    - Cleaner commit history
    - Easier to review
    - Better for team collaboration
  `,
  tags: ["Git", "Tips", "Version Control"],
  date: "2025-01-15",
  readTime: "2 min read",
  slug: "quick-git-tip-squashing-commits",
  author: "Mohammed Faraz Saudagar"
}
```

### Project Showcase Post
```typescript
{
  title: "Building Bookworms: Lessons from iOS Development",
  excerpt: "Key insights and challenges from building a book tracking iOS app with Swift and Core Data.",
  content: `
    # Building Bookworms: Lessons from iOS Development
    
    Recently, I built Bookworms, an iOS app for tracking and reviewing books. Here are the key lessons learned.
    
    ## Technical Stack
    - **Swift** for the main language
    - **UIKit** for the interface
    - **Core Data** for local storage
    
    ## Challenges
    ### Data Modeling
    Designing the Core Data model for books, reviews, and user interactions required careful planning.
    
    ### UI/UX Design
    Creating an intuitive interface for book discovery and review writing.
    
    ## What I Learned
    1. Core Data relationships are powerful but complex
    2. User testing early saves time later
    3. iOS Human Interface Guidelines are worth following
    
    ## Next Steps
    Planning to add social features and book recommendations.
  `,
  tags: ["iOS", "Swift", "Mobile Development", "Projects"],
  date: "2025-01-15",
  readTime: "7 min read",
  slug: "building-bookworms-ios-development",
  author: "Mohammed Faraz Saudagar"
}
```

## Tips for Great Blog Posts

### Content Ideas
- Project walkthroughs and lessons learned
- Technical tutorials and tips
- Industry insights and opinions
- Problem-solving stories
- Tool reviews and comparisons

### Writing Tips
1. **Start with the problem** - What issue are you solving?
2. **Be specific** - Include code examples and screenshots
3. **Tell a story** - People connect with narratives
4. **Keep it practical** - Include actionable takeaways
5. **Edit ruthlessly** - Clear, concise writing is better

### SEO-Friendly Practices
- Use descriptive titles
- Include relevant tags
- Write compelling excerpts
- Use proper headings structure
- Include internal links to other posts

## Formatting Reference

| Element | Syntax |
|---------|--------|
| Heading 1 | `# Heading` |
| Heading 2 | `## Heading` |
| Heading 3 | `### Heading` |
| Bold | `**bold text**` |
| Italic | `*italic text*` |
| Code | `` `code` `` |
| Code block | ``` (three backticks) |
| Link | `[text](url)` |
| List item | `- item` or `1. item` |
| Quote | `> quote text` |

## Need Help?

If you run into any issues or want to add more advanced features (like markdown parsing, syntax highlighting, etc.), feel free to reach out!

Happy blogging! 🚀 