const recipes = [
  {
    id: '1',
    name: 'Spaghetti Bolognese',
    ingredients: [
      '200g spaghetti',
      '100g ground beef',
      '1 onion (chopped)',
      '2 cloves garlic (minced)',
      '400g canned tomatoes',
      '2 tbsp olive oil',
      'Salt and pepper to taste',
      'Parmesan cheese (optional)'
    ],
    instructions:
      'Cook the spaghetti according to the package instructions. In a pan, heat olive oil and sauté onions and garlic until fragrant. Add ground beef and cook until browned. Pour in the tomatoes and simmer for 15 minutes. Season with salt and pepper. Serve the sauce over spaghetti and top with parmesan cheese if desired.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvPi8d5vdOvjQOOyrc8MRf31ztnivjycoA5Uc1KFfKhniLhyfEJj0_OE9pWJVWGdojAQ&usqp=CAU'
  },
  {
    id: '2',
    name: 'Chicken Caesar Salad',
    ingredients: [
      '2 chicken breasts',
      '1 romaine lettuce head',
      '50g parmesan cheese (shaved)',
      'Croutons',
      'Caesar dressing',
      'Salt and pepper to taste'
    ],
    instructions:
      'Grill the chicken breasts with salt and pepper until fully cooked, then slice. Chop the romaine lettuce and toss it in a bowl with Caesar dressing. Add sliced chicken, croutons, and parmesan shavings on top. Serve chilled.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjAUgTiMaT6hurIj797W3LJ1gPdpU3mhc1Iw&s'
  },
  {
    id: '3',
    name: 'Vegetable Stir Fry',
    ingredients: [
      '1 bell pepper (sliced)',
      '1 carrot (sliced)',
      '100g broccoli florets',
      '1 zucchini (sliced)',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tsp ginger (grated)',
      '2 cloves garlic (minced)'
    ],
    instructions:
      'Heat sesame oil in a wok or pan. Add garlic and ginger and stir-fry for 1 minute. Add vegetables and stir-fry for 5-7 minutes until tender-crisp. Add soy sauce and toss to coat. Serve hot with rice or noodles.',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f'
  },
  {
    id: '4',
    name: 'Pancakes',
    ingredients: [
      '1 cup all-purpose flour',
      '2 tbsp sugar',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '1 cup milk',
      '1 egg',
      '2 tbsp melted butter',
      'Maple syrup (for serving)'
    ],
    instructions:
      'In a bowl, mix the dry ingredients: flour, sugar, baking powder, and salt. In another bowl, whisk together the milk, egg, and melted butter. Combine wet and dry ingredients and stir until just mixed. Heat a pan and pour batter to form pancakes. Cook until bubbles form, flip and cook until golden brown. Serve with maple syrup.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNBFnmMvztGngElEUtFAXtsHwDye7xdHcBg&s'
  },
  {
    id: '5',
    name: 'Avocado Toast',
    ingredients: [
      '2 slices of bread',
      '1 ripe avocado',
      '1 tsp lemon juice',
      'Salt and pepper to taste',
      'Chili flakes (optional)'
    ],
    instructions:
      'Toast the bread slices. In a bowl, mash the avocado with lemon juice, salt, and pepper. Spread the mashed avocado on toast and sprinkle chili flakes if desired. Serve immediately.',
    image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/01/avocado-toast-480x270.jpg'
  },
  {
    id: '6',
    name: 'Beef Tacos',
    ingredients: [
      '6 small taco shells',
      '200g ground beef',
      '1 tsp cumin',
      '1/2 tsp chili powder',
      'Lettuce (shredded)',
      'Cheddar cheese (grated)',
      'Salsa',
      'Sour cream'
    ],
    instructions:
      'Cook ground beef in a pan over medium heat. Add cumin and chili powder. Simmer for 5 minutes. Warm taco shells, then fill with beef, lettuce, cheese, salsa, and sour cream. Serve hot.',
    image: 'https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg'
  },
  {
    id: '7',
    name: 'Mango Smoothie',
    ingredients: [
      '1 ripe mango (peeled and chopped)',
      '1/2 cup yogurt',
      '1/2 cup milk or juice',
      '1 tsp honey (optional)',
      'Ice cubes'
    ],
    instructions:
      'Combine mango, yogurt, milk, and ice cubes in a blender. Blend until smooth. Add honey for extra sweetness if desired. Serve cold.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc'
  },
  {
    id: '8',
    name: 'Tomato Basil Soup',
    ingredients: [
      '4 ripe tomatoes (chopped)',
      '1 onion (chopped)',
      '2 cloves garlic',
      '2 cups vegetable broth',
      'Fresh basil leaves',
      'Salt and pepper to taste',
      '1 tbsp olive oil'
    ],
    instructions:
      'Heat olive oil in a pot and sauté onion and garlic. Add tomatoes and cook for 5 minutes. Add broth and simmer for 15 minutes. Blend the soup and stir in basil. Season with salt and pepper. Serve warm.',
    image: 'https://thecozyapron.com/wp-content/uploads/2012/02/tomato-basil-soup_thecozyapron_1.jpg'
  }
];

export default recipes;
