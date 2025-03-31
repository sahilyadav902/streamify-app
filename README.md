## Installation & Setup

- To start the server locally, use the following commands:

```code
npm install
npm start
```

- View in [https://localhost:3000](https://localhost:3000)

## Production Link

- The app is deployed on Vercel.
- Click on [this link](https://streamify-app-ten.vercel.app) to view.

## Features & Thought Process

- Opted for a sidebar navigation to enhance usability in a dashboard setting, where the menu items can grow significantly. A navbar would become less user-friendly as the list expands.
- Implemented a grid layout for metric cards and charts for a clean and responsive design that adapts to all screen sizes.
- Chose Recharts for data visualization due to its simplicity, customizability and good documentation with examples.
- Used Zustand for state management for handling the data, sorting, and filtering criteria for Recent Streams table.
- Design UI using Tailwind CSS for fast and intuitive design scheme.
- Used Lucide Icons library due to low overhead and reduced code size compared to traditional SVGs.
- Implemented search and filtering functionality, allowing users to search for songs by title or artist, or filter them dynamically by clicking on a pie chart sector.
- To maintain usability on mobile devices, the table is horizontally scrollable, couldn't think of a better optimization.

## Tech Stack

- Frontend: Next.js (App Router), Typescript
- State Management: Zustand
- UI and Styling: Tailwind CSS, Lucide Icons
- Data Visualization: Recharts
- Data Used: Hardcoded
