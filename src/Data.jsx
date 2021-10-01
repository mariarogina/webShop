const myData = [
  {
    id: 1,
    title: "Earrings",
    price: 109.95,
    description: "Beautiful earrnigs, nice colors! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "jewelery",
    image:
      "https://cdn.pixabay.com/photo/2015/03/09/10/15/glass-665379_960_720.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Lace Blouse",
    price: 22.3,
    description: "Hand-made clothes! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "women's clothing",
    image:
      "https://cdn.pixabay.com/photo/2017/09/06/23/23/red-2723476_960_720.jpg",
    rating: { rate: 4.1, count: "259" },
  },
  {
    id: 3,
    title: "Blue Lace Jacket",
    price: 55.99,
    description: "Hand-made clothes! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "women's clothing",
    image:
      "https://cdn.pixabay.com/photo/2017/06/05/09/07/studio-2373401_960_720.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Ammonite Earrings",
    price: 15.99,
    description: "Original earrings! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "jewelery",
    image:
      "https://cdn.pixabay.com/photo/2015/03/09/10/05/ammonite-665339_960_720.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title: "Silver Gem Necklace",
    price: 695,
    description: "Handmade, true gems! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "jewelery",
    image:
      "https://cdn.pixabay.com/photo/2015/03/09/11/30/jewelery-665502_960_720.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Green Gem Ring",
    price: 168,
    description: "Big gem, fancy shape! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "jewelery",
    image:
      "https://cdn.pixabay.com/photo/2015/03/09/09/46/agate-665285_960_720.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "Orange Backpack",
    price: 9.99,
    description: "Handy, comfortable, bright! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "women's clothing",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/12/13/backpack-159417_960_720.png",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Blue Backpack",
    price: 10.99,
    description: "Handy, comfortable, bright! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "men's clothing",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/17/58/backpack-152705_960_720.png",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "Blue T-shirt",
    price: 64,
    description: "For sports and office! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "men's clothing",
    image:
      "https://cdn.pixabay.com/photo/2017/05/23/10/53/t-shirt-design-2336850_960_720.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "Red T-shirt",
    price: 109,
    description: "For sports and office! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "men's clothing",
    image:
      "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_960_720.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title: "Ammonite Earrings",
    price: 15.99,
    description:
      "Original earrings! *Although it was not customary for invitations to request special attire,\
       least of all for a luncheon in the country,\
      the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
      with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
      wore their ordinary clothes.",
    category: "jewelery",
    image:
      "https://cdn.pixabay.com/photo/2015/03/09/10/05/ammonite-665339_960_720.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 12,
    title: "Green Gem Ring",
    price: 168,
    description: "Big gem, fancey shape! *Although it was not customary for invitations to request special attire,\
    least of all for a luncheon in the country,\
   the women wore evening gowns and precious jewels and most of the men were dressed in dinner jackets\
   with black ties, and some even wore frock coats. Only the most sophisticated, Dr. Urbino among them, \
   wore their ordinary clothes.",
    category: "jewelery",
    image:
      "https://cdn.pixabay.com/photo/2015/03/09/09/46/agate-665285_960_720.jpg",
    rating: { rate: 3.9, count: 70 },
  },
];

export default myData;
