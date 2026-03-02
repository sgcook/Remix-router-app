# Remix Router App

A full-stack application built with React Router 7 (formerly Remix), featuring user authentication, notes management, and a blog system. Based on the React Router template and the [official-blog-tutorial](https://github.com/remix-run/examples/tree/main/_official-blog-tutorial).

## Tech Stack

- **Framework:** React Router 7 / Remix
- **Database:** SQLite with Prisma ORM
- **Authentication:** Session-based with bcrypt
- **Styling:** Tailwind CSS
- **Testing:** Vitest

## Getting Started

### Prerequisites

- Node.js (v25 or higher recommended)
- npm

### Installation

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:

   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL="file:./dev.db"
   SESSION_SECRET="your-secret-key-here"
   ```

3. Set up the database:

   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Push schema to database
   npx prisma db push

   # (Optional) Seed with test data
   npx prisma db seed
   ```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Database Management

This project uses Prisma with SQLite for local development.[Prisma Client API](https://www.prisma.io/docs/orm/reference/prisma-client-reference)

### Prisma Commands

```bash
# Generate Prisma Client after schema changes
npx prisma generate

# Create and apply migrations
npx prisma migrate dev

# Push schema changes without migrations (dev only)
npx prisma db push

# Open Prisma Studio to view/edit data
npx prisma studio

# Seed database with test data
npx prisma db seed
```

### Database Files

- `dev.db` - Development database (gitignored)
- `prisma/schema.prisma` - Database schema definition
- `prisma/migrations/` - Migration history

## Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm start          # Run production server
npm run typecheck  # Run TypeScript type checking
npm test           # Run tests with Vitest
```

## Project Structure

```text
├── app/
│   ├── routes/           # Route components
│   ├── models/           # Database models
│   ├── db.server.ts      # Prisma client setup
│   ├── session.server.ts # Session management
│   └── utils.ts          # Shared utilities
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Database migrations
├── public/               # Static assets
└── build/                # Production build output
```

## Features

- **User Authentication:** Sign up, login, and session management
- **Notes System:** Create, read, update, and delete personal notes
- **Blog:** Admin interface for managing blog posts with markdown support
- **Responsive Design:** Mobile-friendly UI with Tailwind CSS

## React Router 7 / Remix Notes

- Remix is now part of React Router 7. [Migration guide](https://reactrouter.com/upgrading/remix)
- 📖 [React Router documentation](https://reactrouter.com/)
- `entry.server.tsx` and `entry.client.tsx` are hidden by default but can be added for customization. [Docs](https://v2.remix.run/docs/file-conventions/entry.client)
- Session storage is configured in `app/session.server.ts`. [Session docs](https://v2.remix.run/docs/utils/sessions)
