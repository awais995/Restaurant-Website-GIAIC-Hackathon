import MenuComponent from "../components/MenuComponent";

const menuItems = [
  {
    name: "Caesar Salad",
    price: 12,
    description: "Crispy lettuce, Parmesan cheese, and Caesar dressing.",
    calories: 250,
    highlight: true,
  },
  {
    name: "Garlic Bread",
    price: 8,
    description: "Warm garlic bread with melted butter.",
    calories: 150,
  },
  {
    name: "Bruschetta",
    price: 10,
    description: "Grilled bread topped with tomato and basil.",
    calories: 200,
  },
];

export default function StarterMenu() {
  return (
    <MenuComponent
      title="Starter Menu"
      imageSrc="/Starter-menu.png"
      menuItems={menuItems}
    />
  );
}
