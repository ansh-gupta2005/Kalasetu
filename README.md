This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## How to Run Backend

1. Open terminal

2. Go to backend folder

cd backend

3. Install packages

npm install

4. Run backend

npm run dev

5. Open

http://localhost:5000

# Database Choice

The KalaSetu project uses **MongoDB Atlas** as the database.

MongoDB was selected because it is flexible, easy to integrate with Node.js, and suitable for storing artisan product information.

---

# Database Schema

Product

- _id
- name
- category
- price
- description

---

# Database Setup

1. Create a MongoDB Atlas account.
2. Create a free M0 cluster.
3. Create a database user.
4. Allow network access.
5. Copy the MongoDB connection string.
6. Add the connection string in `.env` as:

MONGO_URI=your_connection_string

7. Install dependencies

npm install

8. Start the backend

npm run dev