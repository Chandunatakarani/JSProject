const foodProducts = [
    {
      id: 1,
      name: "Pasta Primavera",
      category: "Italian",
      price: 12.99,
      available: true,
      ingredients: ["pasta", "vegetables", "parmesan"],
      calories: 450,
      imageUrl: "https://example.com/pasta.jpg",
      rating: 4.5
    },
    {
      id: 2,
      name: "Chicken Tikka Masala",
      category: "Indian",
      price: 15.99,
      available: true,
      ingredients: ["chicken", "yogurt", "spices"],
      calories: 600,
      imageUrl: "https://example.com/chicken_tikka.jpg",
      rating: 4.8
    },
    {
      id: 3,
      name: "Sushi Platter",
      category: "Japanese",
      price: 18.99,
      available: false,
      ingredients: ["salmon", "tuna", "rice", "seaweed"],
      calories: 300,
      imageUrl: "https://example.com/sushi.jpg",
      rating: 4.7
    },
    {
      id: 4,
      name: "Greek Salad",
      category: "Greek",
      price: 10.99,
      available: true,
      ingredients: ["lettuce", "feta cheese", "olives", "cucumber"],
      calories: 200,
      imageUrl: "https://example.com/greek_salad.jpg",
      rating: 4.3
    }
  ];

  
  const container = document.getElementById('container');

  container.className = 'container';

  container.innerHTML = 
  `
    <ul class='navbar'>
        ${
            foodProducts.map((item)=>{
                return `<li>${item.rating}</li>`
            }).join('')
        }

    </ul>
  
  
  `