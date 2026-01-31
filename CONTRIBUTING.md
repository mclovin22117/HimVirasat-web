# Contributing to HimVirasat (Code Contributions)

This document describes how to contribute to the HimVirasat codebase.  
These guidelines apply to all frontend and backend development work.

---

## Repository Scope

The HimVirasat codebase includes:
- Frontend applications (Next.js / React)
- Backend services, scripts, and data pipelines
- Documentation related to development and infrastructure

---

## Creating Issues

Before starting work, please check existing issues to avoid duplication.

### When to create an issue
Create an issue if you want to:
- Report a bug
- Propose a new feature or enhancement
- Suggest architectural or structural changes
- Discuss improvements before implementation

### How to create an issue
1. Go to the repository’s **Issues** tab
2. Click **New Issue**
3. Choose the appropriate issue template (if available)
4. Provide:
   - A clear title
   - A concise description of the problem or proposal
   - Steps to reproduce (for bugs)
   - Expected behavior or outcome
   - Relevant screenshots, logs, or references

Do not open pull requests without an issue for large or breaking changes.

---

## Development Workflow

### 1. Fork and clone the repository
If you are not an organization member:
```bash
git clone https://github.com:<your-username>/<repo-name>.git
```
Organization members may clone directly from the org repository.

### 2. Create a feature branch
Always work on a separate branch:
```
git checkout -b feature/short-description
```
**Examples**:
- ``feature/landing-page``
- ``fix/navbar-overflow`` 
- ``chore/update-dependencies``

Do not commit directly to main.

### 3. Make changes
- Follow the existing project structure
- Keep changes focused and minimal
- Ensure code is readable and well-documented where necessary
- Run the project locally and verify functionality before committing

### 4. Commit changes
Write clear, descriptive commit messages:
```
git commit -m "Add dataset documentation page"
```
Avoid vague messages such as fix stuff or update.

### 5. Push Changes
```
git push origin feature/short-description
```

## Opening Pull Requests
#### When opening a PR
- Ensure your branch is up to date with main
- Ensure the build passes locally
- Ensure linting and formatting rules are followed

#### How to open a PR
1. Go to the repository on GitHub
2. Click Compare & pull request
3.Fill out the pull request description, including:
    - What the change does
    - Why it is needed
    - Which issue it addresses (if applicable)

Use keywords like:
```
Closes #123
```

## Pull Request Review Process
- All pull requests require review before merging
- Reviewers may request changes or clarification
- Address feedback promptly and update your branch
- Maintainers will merge once requirements are met


## Code Standards
- Follow the existing coding style and conventions
- Use consistent formatting
- Avoid introducing unnecessary dependencies
- Keep commits and pull requests scoped to a single concern

## Questions
- If you are unsure about implementation details:
- Open an issue for discussion
- Ask clarifying questions in the pull request