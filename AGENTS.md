# AGENTS.md

## Project Overview

This is a production-grade portfolio application built with:

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- React Hook Form
- Zod
- Axios

## General Rules

- Always generate production-ready code.
- Follow modern React and Next.js best practices.
- Prefer Server Components by default.
- Use Client Components only when interactivity is required.
- Maintain strict TypeScript typing.
- Avoid using `any`.
- Keep code simple and maintainable.
- Do not overengineer solutions.
- Prioritize readability and scalability.

---

## Architecture

### Folder Structure

Use feature-based organization when appropriate.

Example:

src/ ├── app/ ├── components/ │ ├── ui/ │ └── shared/ ├── features/ ├── hooks/
├── lib/ ├── services/ ├── types/ ├── constants/ └── utils/

### Imports

Prefer absolute imports:

```ts
import { Button } from "@/components/ui/button";
```

Avoid deep relative paths.

---

## TypeScript Standards

- Enable strict typing.
- Avoid any.
- Prefer interfaces for public contracts.
- Use type for unions and utility types.
- Export reusable types from dedicated files.

Example:

```ts
interface Project {
  id: string;
  title: string;
  description: string;
}
```

---

## React Standards

### Components

- One responsibility per component.
- Keep components small.
- Extract reusable logic into hooks.

### State Management

Prefer:

1. Server Components
2. URL state
3. Local state

Avoid unnecessary global state.

### Hooks

Custom hooks must:

- Start with use
- Be reusable
- Contain business logic only

Example:

```ts
useThemeToggle();
useProjects();
```

---

## Next.js Standards

### App Router

Use:

```tsx
app/
```

Avoid Pages Router.

### Data Fetching

Prefer:

- Server Components
- async/await
- Server Actions when suitable

### Metadata

Always use Metadata API.

Example:

```ts
export const metadata = {
  title: "Portfolio",
};
```

### Performance

- Use next/image
- Use next/font
- Avoid unnecessary client components
- Lazy load heavy sections

---

## Styling Standards

### Tailwind CSS v4

- Prefer utility classes.
- Avoid inline styles.
- Extract repeated patterns.

### Class Management

Use:

```ts
cn();
```

for class merging.

### Responsive Design

Mobile-first approach.

Required breakpoints:

```txt
sm:
md:
lg:
xl:
2xl:
```

---

## shadcn/ui

- Prefer shadcn components when available.
- Extend instead of rewriting.
- Preserve accessibility.

---

## Forms

Use:

- React Hook Form
- Zod

Pattern:

```ts
react - hook - form + zodResolver;
```

Always validate user input.

---

## API Layer

### Axios

Create a shared client:

```ts
src / lib / axios.ts;
```

Use:

- request interceptors
- response interceptors
- centralized error handling

Never duplicate API logic.

---

## Animations

### Framer Motion

Use animations only when they improve UX.

Guidelines:

- Keep transitions smooth.
- Avoid excessive motion.
- Prefer subtle effects.

---

## Accessibility

Required:

- Semantic HTML
- Keyboard navigation
- Proper labels
- Accessible forms
- ARIA only when necessary

---

## Security

- Validate all inputs.
- Never trust client data.
- Sanitize external content.
- Avoid exposing secrets.
- Use environment variables properly.

Never hardcode:

- API keys
- Tokens
- Secrets

---

## Error Handling

Always handle:

- Loading states
- Empty states
- Error states

Example:

```tsx
if (isLoading) return <Loading />;
if (error) return <ErrorState />;
```

---

## Code Quality

Before generating code:

- Remove unused imports.
- Remove dead code.
- Avoid duplication.
- Follow DRY principles.

Code should pass:

- TypeScript
- ESLint
- Next.js build

without modification.

---

## Output Expectations

When generating code:

1. Provide complete implementation.
2. Include required imports.
3. Use TypeScript.
4. Follow project conventions.
5. Keep explanations concise.
6. Prefer implementation over theory.
