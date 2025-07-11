# Assignment Submissions Dashboard

A responsive and user-friendly dashboard to manage and view student assignment submissions. Built using React, TailwindCSS, ShadCN UI, and TanStack libraries.

---

##  Features

- *Submissions Table View*  
  Organized display of all student submissions with relevant details.

- *Search Functionality*  
  Search by student name, ID, or assignment title.

- *Advanced Filtering*  
  Filter submissions based on:
  - Submission status (Submitted, Late, Not Submitted)
  - Assignment title
  - Submission date
  - Grade/marks range

- *Pagination Support*  
  Navigate large data sets with page-wise control.

- *Mobile Responsive Design*  
  Optimized for a base width of 782px and adaptable to smaller screens.

- *Mock Data Integration*  
  Simulated backend data using a static JSON/mock file.

---

##  Tech Stack

| Technology     | Usage                                  |
|----------------|----------------------------------------|
| React          | Frontend development                   |
| TailwindCSS    | Styling and responsive layout          |
| ShadCN UI      | Prebuilt accessible UI components      |
| TanStack Query | Data fetching and caching              |
| TanStack Router| Client-side routing                    |
| Axios          | API calls (used with mock data)        |

---
## Project Structure

```
src/
├── components/
│   ├── SubmissionsPanel.jsx
│   ├── SearchBar.tsx
│   ├── Filters.jsx
├── pages/
│   └── Submissions4.jsx
├── data/
│   └── mockSubmissions.js
├── App.tsx
├── main.tsx
└── Routes.tsx
```

## Getting Started

1. Clone the repository:
git clone https://github.com/your-username/assignment-submissions-dashboard.git
cd assignment-submissions-dashboard

2. Install dependencies:
npm install

3. Run the development server:
npm run dev

4. Open in browser:
http://localhost:5173

## Customization

- Modify mock data in data/mockSubmissions.js
- Adjust layout, colors, or breakpoints in tailwind.config.js
- Extend filters or integrate with real APIs as needed

## License

This project is licensed under the MIT License.
