# Navigation Manager App

This repository contains a web application for managing a navigation menu. The app allows users to create, edit, and reorder navigation elements based on a design provided in Figma. The project is built using Next.js, Tailwind CSS, and dnd-kit, with an emphasis on clean code and usability.

## Features

### 1. Navigation List

- **Display Navigation Items:** The app displays a list of navigation items with their labels and URLs.
- **Drag & Drop Reordering:** Users can reorder navigation items via drag-and-drop functionality.
- **Edit Button:** Each navigation item has an edit button to modify its details.

### 2. Create Navigation Form

- **Add New Navigation Items:** Users can add new navigation items with the following fields:
  - **Label (required):** The name of the navigation item.
  - **URL (optional):** The link associated with the navigation item.
  - **Sub-items:** Ability to add sub-items recursively.
- **Validation:** Fields are validated (e.g., the label field is required).

### 3. Edit Navigation Form

- **Edit Existing Items:** Users can edit any navigation item, including its label, URL, and sub-items.

## Technologies Used

### Frontend

- **Framework:** [Next.js](https://nextjs.org/)  
  A React-based framework for building server-rendered applications.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
  A utility-first CSS framework for fast UI development.
- **Drag & Drop:** [dnd-kit](https://dndkit.com/)  
  A modern drag-and-drop library for React applications.
- **Form Handling and Validation:**
  - [React Hook Form](https://react-hook-form.com/)
  - [Yup](https://github.com/jquense/yup)

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd navigation-manager
   ```

2. Run development mode

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

3. Open the application in your browser at
   http://localhost:3000.

### Public build address

https://droplo.vercel.app/
