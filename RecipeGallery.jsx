function RecipeGallery() {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
      image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c",
    },
    {
      id: 2,
      title: "Avocado Toast",
      ingredients: ["Bread", "Avocado", "Olive Oil", "Salt"],
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600",
    },
    {
      id: 3,
      title: "Chicken Salad",
      ingredients: ["Chicken", "Lettuce", "Tomatoes", "Dressing"],
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
    // Edge Test Cases
    {
      id: 4,
      title: "",
      ingredients: ["Milk", "Banana"],
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600",
    },
    {
      id: 5,
      title: "Mystery Dish",
      ingredients: [],
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
    },
    {
      id: 6,
      title: "Invisible Dish",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      image: "",
    },
  ];

  return (
    <div>
      <h2>Recipe Gallery</h2>

      <div className="gallery">
        {recipes.map((recipe) => (
          <div className="card" key={recipe.id}>
            <h3>{recipe.title}</h3>

            <img src={recipe.image} alt={recipe.title} />

            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeGallery;
