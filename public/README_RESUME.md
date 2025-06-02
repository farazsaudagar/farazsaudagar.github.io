# Adding Your Resume

To add your actual resume to the website:

1. **Save your resume as a PDF** with the filename: `Mohammed_Faraz_Saudagar_Resume.pdf`

2. **Place the PDF file** in this `public` folder (same location as this README file)

3. **The resume will be accessible at**: `/Mohammed_Faraz_Saudagar_Resume.pdf`

## Resume Download Locations

Your resume download button has been added to:

- **Home page** - In the hero section with social links
- **About page** - At the top of the Professional Background section  
- **Resume page** - Dedicated page at `/resume` with full resume content
- **Navigation menu** - Resume link in the main navigation

## Updating Resume Content

To update the resume content displayed on the `/resume` page:

1. Edit the file: `src/pages/Resume.tsx`
2. Update the sections with your actual information:
   - Professional Summary
   - Experience
   - Education  
   - Technical Skills
   - Key Projects
   - Additional Information

## File Structure

```
public/
├── Mohammed_Faraz_Saudagar_Resume.pdf  ← Place your PDF here
└── README_RESUME.md                     ← This file

src/pages/
└── Resume.tsx                           ← Edit this for resume content
``` 