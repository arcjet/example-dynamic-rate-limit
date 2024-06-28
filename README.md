<a href="https://arcjet.com" target="_arcjet-home">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://arcjet.com/logo/arcjet-dark-lockup-voyage-horizontal.svg">
    <img src="https://arcjet.com/logo/arcjet-light-lockup-voyage-horizontal.svg" alt="Arcjet Logo" height="128" width="auto">
  </picture>
</a>

# Arcjet dynamic rate limit example

[Arcjet](https://arcjet.com) helps developers protect their apps in just a few
lines of code. This is an example application demonstrating the use of dynamic
rate limits with user configuration in a database.

This is forked from the main [Arcjet example
app](https://github.com/arcjet/arcjet-js-example).

## Video walkthrough

[Watch the video walkthrough](https://www.youtube.com/watch?v=Nwr07VkL3QM) of
this example on YouTube.

## Features

- [Rate limiting](https://example.arcjet.com/rate-limiting) shows the use of
  different rate limit configurations depending on the authenticated user.
- [Dynamic rate limits](https://docs.arcjet.com/reference/nextjs#ad-hoc-rules)
  using the value set in a SQLite database for each user.

## Run locally

1. [Register for a free Arcjet account](https://app.arcjet.com).

2. Install dependencies:

```bash
npm ci
```

3. Rename `.env.example` to `.env` and add your Arcjet key. Add an Auth.js
   secret and [create a GitHub OAuth
   app](https://authjs.dev/guides/configuring-github).

4. Bootstrap the database:

```bash
npm exec prisma migrate dev
```

5. Start the dev server

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stack

- Auth: [Auth.js](https://authjs.dev/)
- App: [Next.js](https://nextjs.org/)
- Database: [SQLite](https://www.sqlite.org/) using
  [libsql](https://github.com/tursodatabase/libsql-client-ts)
- UI: [shadcn/ui](https://ui.shadcn.com/)
- ORM: [Prisma](https://www.prisma.io/)
- Security: [Arcjet](https://arcjet.com/)
