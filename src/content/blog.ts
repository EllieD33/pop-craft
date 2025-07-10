import lewisHamilton from "@assets/lewisHamilton.jpg";

export const blogItems = Array.from({ length: 9 }, (_, i) => ({
  author: {
    name: "James Hughes",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
  },
  date: "13 Aug 2024",
  tags: ["Celebs", "Health", "Summer"],
  heading: "How Going Alcohol-Free Fuels Lewis Hamilton's Drive",
  summary:
    "Over a glass of his alcohol-free tequila, GOAT Lewis Hamilton tells us how going AF improves his performance. Bonus: he shares with us his go-to drinks for a hot summer's day!",
  image: lewisHamilton,
  imageAlt: "Lewis Hamilton drinking a non-alcoholic drink",
  ...(i !== 0 && i !== 4 ? { wide: true } : {}),
}));
