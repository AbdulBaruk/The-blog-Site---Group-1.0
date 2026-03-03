# SCRUM & GitHub Guide for "The Blog Site"

## 1. Suggested SCRUM Backlog
A typical SCRUM Backlog is broken down into User Stories and/or Tasks. Here is a suggested backlog for your project from start to finish.

### Epic: The Blog Site MVP (Minimum Viable Product)
- **Task 1: Project Setup & Repository**
  - Initialize Git repository.
  - Create file structure (`index.html`, `about.html`, `contact.html`, `css/`, `js/`).
  - Create `README.md` with project description.
- **Task 2: Global Layout & Navigation**
  - Implement the sticky navigation bar across all pages.
  - Create a consistent footer layout with author info, project name, and fake email.
- **Task 3: Home Page Implementation**
  - Add hero section with basic text.
  - Add 2-3 blog article cards with proper heading tags (h1-h6) and paragraph tags.
  - Add images to the blog cards.
- **Task 4: About Us Page Implementation**
  - Add information about Group 1.0.
  - Detail the purpose of the website.
- **Task 5: Contact Us Page Implementation**
  - Add fake email, fake phone, and location.
  - Create the contact form structure (Name, Email, Message).
- **Task 6: CSS Styling & Responsiveness**
  - Add external CSS file.
  - Style the typography, colors, padding, and margins.
  - Make the layout readable on smaller screens (basic responsiveness).
- **Task 7: Form Validation (JavaScript)**
  - Add basic JS validation to ensure Name, Email, and Message fields are not empty before submission.
- **Task 8: Final Review & Polish**
  - Test all links across pages.
  - Validate HTML/CSS structure.
  - Review design against the wireframe.

---

## 2. Suggested GitHub Issue Structure
When converting the backlog into GitHub Issues, use a standardized format. Keep the title clear and use issue labels like `enhancement`, `bug`, `documentation`, or `help wanted`.

### Example Issue 1: Main Navigation & Footer
**Title:** Implement global Sticky Navigation and Footer
**Labels:** `enhancement`, `frontend`
**Assignee:** [Team Member Name]
**Description:**
> As a user, I want a consistent navigation bar and footer on all pages so that I can easily move between the Home, About Us, and Contact pages.
>
> **Acceptance Criteria:**
> - [ ] Sticky navbar is created in `index.html`, `about.html`, and `contact.html`.
> - [ ] Navbar links correctly route to the respective pages.
> - [ ] Footer contains the author list, fake email, and project name.

### Example Issue 2: Contact Form JavaScript Validation
**Title:** Add basic validation to Contact Form
**Labels:** `javascript`, `enhancement`
**Assignee:** [Team Member Name]
**Description:**
> As a user, I want to be notified if I leave a required field blank in the contact form so that I don't submit an incomplete message.
>
> **Acceptance Criteria:**
> - [ ] Validation checks if Name, Email, and Message are filled.
> - [ ] Displays an error message under empty fields.
> - [ ] Simulates a success message on valid submission.

---

## 3. Commit Message Examples
Clean commit messages are essential for your SCRUM team to understand the repository's history. Use the imperative mood (e.g., "Add feature" instead of "Added feature").

**Format:** `<type>: <short summary>`

**Common Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes (like README)
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature

**Examples for this project:**
- `docs: initialize project README and file structure`
- `feat: add sticky navigation bar to all HTML pages`
- `feat: create home page grid layout with placeholder images`
- `style: update primary color theme and typography in CSS`
- `feat: add contact form input fields`
- `feat: implement JS validation for missing form fields`
- `fix: correct broken links in the footer`
- `refactor: clean up unused CSS classes`
