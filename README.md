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

---

## Backend Appointment Booking System

A Node.js/Express backend is used to securely interact with the Google Calendar API for doctor appointment scheduling.

### Setup Instructions

1. Go to the `/backend` folder (create it if it doesn't exist).
2. Place your downloaded Google Calendar API credentials JSON file in this folder and rename it to `credentials.json`.
3. Run `npm install` in the `/backend` folder to install dependencies.
4. Start the backend server with `node index.js` or `npm start`.

### Endpoints

- `GET /api/doctors` — List all doctors.
- `GET /api/slots?doctor=ID` — List available time slots for a doctor.
- `POST /api/appointments` — Create a new appointment in Google Calendar.

The backend must be running for the frontend to book appointments.
