# Recipe Gallery – React Assignment

## Project Overview

This project is a **Recipe Gallery built with React**. 
The purpose of this assignment is to demonstrate how to render **static data in React** using the **JavaScript `map()` method** and properly assign a **unique key prop** to each rendered item.

The project was created using **Vite + React** and developed in **Visual Studio Code**.

---

## Features

* Displays multiple recipes in a gallery layout
* Uses a **RecipeGallery component**
* Renders recipe cards using the **map() function**
* Each recipe card includes:

  * Recipe title
  * Recipe image
  * List of ingredients
* Uses **unique keys** (`recipe.id`) for each rendered component
* Responsive layout using **CSS Flexbox**

---

## Technologies Used

* React
* Vite
* JavaScript
* HTML / CSS
* Visual Studio Code

---

## How to Run the Project

1. Clone the repository

```
git clone (https://github.com/PaulinaS123/building-a-recipe-gallery-in-react.git)
```

2. Navigate to the project folder

```
cd recipe-gallery
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm run dev
```

5. Open the local URL shown in the terminal to view the app.

---

## Test Cases

### Normal Test Cases

These tests confirm the application correctly renders recipe data.

1. Spaghetti Carbonara recipe renders with title, image, and ingredients.
2. Avocado Toast recipe renders correctly with its ingredient list.
3. Chicken Salad recipe displays properly with all recipe details.

### Edge Test Cases

These tests check how the application behaves with unusual or incomplete data.

1. Recipe with an empty title.
2. Recipe with an empty ingredient list.
3. Recipe with a missing or invalid image URL.

These edge cases ensure that the component still renders without crashing when data is incomplete or unexpected.

---

## Project Structure

```
recipe-gallery
│
├── src
│   ├── App.jsx
│   ├── RecipeGallery.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Video Demonstration

**YouTube Video:**
https://youtu.be/5loN4H1ut4U

