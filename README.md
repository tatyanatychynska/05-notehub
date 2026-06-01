# NoteHub

A React application for storing, creating, deleting, and searching personal notes.

## Features

- View a paginated list of your notes
- Search notes by keyword with debounced input
- Create new notes via a modal form
- Delete notes from the collection
- Tag notes by category: Todo, Work, Personal, Meeting, Shopping

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **TanStack Query** — server state management
- **Axios** — HTTP requests
- **Formik** + **Yup** — form handling and validation
- **React Paginate** — pagination
- **use-debounce** — debounced search
- **CSS Modules** — component-scoped styles
- **modern-normalize** — cross-browser style normalization

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root and add your token:
   ```
   VITE_NOTEHUB_TOKEN=your_token_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Backend

This app uses the [NoteHub public API](https://notehub-public.goit.study/api/docs).
A personal access token is required and must be set via the `VITE_NOTEHUB_TOKEN` environment variable.
